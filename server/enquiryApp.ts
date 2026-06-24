import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
import path from 'node:path';
import multer from 'multer';
import {
  ALLOWED_FILE_EXTENSIONS,
  MAX_FILE_BYTES,
  MAX_TOTAL_FILE_BYTES,
  type QuotePayload,
  validateQuotePayload
} from '../src/utils/quoteValidation';

export interface EnquiryMailer {
  sendQuoteEnquiry: (payload: {
    fields: QuotePayload;
    files: Express.Multer.File[];
  }) => Promise<void>;
}

function fieldValue(value: unknown) {
  return typeof value === 'string' ? value : '';
}

function extensionFor(filename: string) {
  const dot = filename.lastIndexOf('.');
  return dot === -1 ? '' : filename.slice(dot + 1).toLowerCase();
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: MAX_FILE_BYTES,
    files: 8
  },
  fileFilter: (_request, file, callback) => {
    const extension = extensionFor(file.originalname);
    if (!ALLOWED_FILE_EXTENSIONS.includes(extension)) {
      callback(new Error(`Allowed file types: ${ALLOWED_FILE_EXTENSIONS.join(', ')}.`));
      return;
    }
    callback(null, true);
  }
});

export function createEnquiryApp(_options: { mailer: EnquiryMailer; staticDir?: string }) {
  const app = express();
  app.use(cors());

  app.get('/api/health', (_request, response) => {
    response.json({ ok: true });
  });

  app.post('/api/enquiries', upload.array('files'), async (request, response, next) => {
    try {
      const files = (request.files ?? []) as Express.Multer.File[];
      const payload: QuotePayload = {
        name: fieldValue(request.body.name),
        email: fieldValue(request.body.email),
        phone: fieldValue(request.body.phone),
        siteAddress: fieldValue(request.body.siteAddress),
        councilArea: fieldValue(request.body.councilArea),
        serviceRequired: fieldValue(request.body.serviceRequired),
        projectType: fieldValue(request.body.projectType),
        projectStage: fieldValue(request.body.projectStage),
        message: fieldValue(request.body.message)
      };

      const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
      const validation = validateQuotePayload(payload, files);

      if (totalBytes > MAX_TOTAL_FILE_BYTES) {
        validation.valid = false;
        validation.errors.files = 'Total attachments must be 25MB or smaller.';
      }

      if (!validation.valid) {
        response.status(400).json({ errors: validation.errors });
        return;
      }

      await _options.mailer.sendQuoteEnquiry({ fields: payload, files });
      response.json({ message: 'Thank you. Your enquiry has been sent to IAM Surveyors.' });
    } catch (error) {
      next(error);
    }
  });

  if (_options.staticDir) {
    const staticDir = path.resolve(_options.staticDir);
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
    response.status(400).json({
      errors: {
        files: error.message || 'The uploaded files could not be processed.'
      }
    });
  });

  return app;
}
