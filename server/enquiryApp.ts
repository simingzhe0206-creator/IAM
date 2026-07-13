import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import multer from 'multer';
import {
  ALLOWED_FILE_EXTENSIONS,
  MAX_FILES,
  MAX_FILE_BYTES,
  type QuotePayload,
  isAllowedFileType,
  validateQuotePayload
} from '../src/utils/quoteValidation';

const SUCCESS_MESSAGE = 'Thank you. Your enquiry has been sent to IAM Surveyors.';
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

export interface EnquiryMailer {
  mailReady: boolean;
  sendQuoteEnquiry: (payload: {
    fields: QuotePayload;
    files: Express.Multer.File[];
  }) => Promise<void>;
}

type RateEntry = {
  count: number;
  resetAt: number;
};

type EnquiryAppOptions = {
  mailer: EnquiryMailer;
  staticDir?: string;
  now?: () => number;
  logger?: Pick<Console, 'error'>;
};

function fieldValue(value: unknown) {
  return typeof value === 'string' ? value : '';
}

function createRateLimiter(now: () => number) {
  const entries = new Map<string, RateEntry>();

  return (key: string) => {
    const currentTime = now();
    const current = entries.get(key);

    if (!current || current.resetAt <= currentTime) {
      entries.set(key, { count: 1, resetAt: currentTime + RATE_LIMIT_WINDOW_MS });
      return false;
    }

    if (current.count >= RATE_LIMIT_MAX) {
      return true;
    }

    current.count += 1;
    return false;
  };
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: MAX_FILE_BYTES,
    files: MAX_FILES
  },
  fileFilter: (_request, file, callback) => {
    if (!isAllowedFileType(file)) {
      const extension = file.originalname.split('.').pop()?.toLowerCase() ?? '';
      const message = ALLOWED_FILE_EXTENSIONS.includes(extension)
        ? 'One or more attachments does not match its file type.'
        : `Allowed file types: ${ALLOWED_FILE_EXTENSIONS.join(', ')}.`;
      callback(new Error(message));
      return;
    }
    callback(null, true);
  }
});

export function createEnquiryApp(options: EnquiryAppOptions) {
  const app = express();
  const isRateLimited = createRateLimiter(options.now ?? Date.now);
  const logger = options.logger ?? console;

  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  app.get('/api/health', (_request, response) => {
    response.json({ ok: true, mailReady: options.mailer.mailReady });
  });

  app.post('/api/enquiries', upload.array('files'), async (request, response) => {
    const requestId = crypto.randomUUID();
    const files = (request.files ?? []) as Express.Multer.File[];

    if (fieldValue(request.body.website)) {
      response.json({ message: SUCCESS_MESSAGE });
      return;
    }

    const payload: QuotePayload = {
      name: fieldValue(request.body.name),
      email: fieldValue(request.body.email),
      phone: fieldValue(request.body.phone),
      siteAddress: fieldValue(request.body.siteAddress),
      councilArea: fieldValue(request.body.councilArea),
      serviceRequired: fieldValue(request.body.serviceRequired),
      projectType: fieldValue(request.body.projectType),
      projectStage: fieldValue(request.body.projectStage),
      message: fieldValue(request.body.message),
      website: ''
    };
    const validation = validateQuotePayload(payload, files);

    if (!validation.valid) {
      response.status(400).json({ errors: validation.errors, requestId });
      return;
    }

    if (!options.mailer.mailReady) {
      response.status(503).json({
        message: 'Quote delivery is temporarily unavailable. Please contact IAM Surveyors directly.',
        requestId
      });
      return;
    }

    const rateLimitKey = request.ip ?? request.socket.remoteAddress ?? 'unknown';
    if (isRateLimited(rateLimitKey)) {
      response.status(429).json({
        message: 'Too many quote requests have been submitted. Please wait 15 minutes or contact IAM Surveyors directly.',
        requestId
      });
      return;
    }

    try {
      await options.mailer.sendQuoteEnquiry({ fields: payload, files });
      response.json({ message: SUCCESS_MESSAGE });
    } catch (error) {
      logger.error('IAM quote delivery failed', {
        requestId,
        errorType: error instanceof Error ? error.name : 'UnknownError'
      });
      response.status(502).json({
        message: 'The enquiry could not be delivered. Please try again or contact IAM Surveyors directly.',
        requestId
      });
    }
  });

  if (options.staticDir) {
    const staticDir = path.resolve(options.staticDir);
    const indexHtml = path.join(staticDir, 'index.html');

    if (fs.existsSync(indexHtml)) {
      app.use(express.static(staticDir));
      app.use((request, response, next) => {
        if (request.method !== 'GET' || request.path.startsWith('/api/')) {
          next();
          return;
        }

        response.sendFile(indexHtml);
      });
    }
  }

  app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
    let message = error.message || 'The uploaded files could not be processed.';

    if (error instanceof multer.MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        message = 'Each file must be 10MB or smaller.';
      } else if (error.code === 'LIMIT_FILE_COUNT') {
        message = `A maximum of ${MAX_FILES} files can be uploaded.`;
      }
    }

    response.status(400).json({ errors: { files: message } });
  });

  return app;
}
