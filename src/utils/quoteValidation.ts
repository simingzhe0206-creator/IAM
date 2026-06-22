export const ALLOWED_FILE_EXTENSIONS = ['pdf', 'doc', 'docx', 'jpg', 'png', 'dwg', 'dxf', 'zip'];
export const MAX_FILE_BYTES = 10 * 1024 * 1024;
export const MAX_TOTAL_FILE_BYTES = 25 * 1024 * 1024;

export type QuotePayload = {
  name?: string;
  email?: string;
  phone?: string;
  siteAddress?: string;
  councilArea?: string;
  serviceRequired?: string;
  projectType?: string;
  projectStage?: string;
  message?: string;
};

export type QuoteErrors = Partial<Record<keyof QuotePayload | 'files', string>>;

export type QuoteFile = {
  name?: string;
  originalname?: string;
  size: number;
};

const requiredFields: Array<[keyof QuotePayload, string]> = [
  ['name', 'Name is required.'],
  ['email', 'Email is required.'],
  ['phone', 'Phone is required.'],
  ['siteAddress', 'Site address is required.'],
  ['serviceRequired', 'Service required is required.'],
  ['projectType', 'Project type is required.'],
  ['projectStage', 'Project stage is required.'],
  ['message', 'Message is required.']
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function valueOf(value?: string) {
  return value?.trim() ?? '';
}

function fileName(file: QuoteFile) {
  return file.name ?? file.originalname ?? '';
}

function extensionFor(file: QuoteFile) {
  const name = fileName(file).toLowerCase();
  const dot = name.lastIndexOf('.');
  return dot === -1 ? '' : name.slice(dot + 1);
}

export function validateQuotePayload(
  _payload: QuotePayload,
  _files: QuoteFile[] = []
): { valid: boolean; errors: QuoteErrors } {
  const errors: QuoteErrors = {};

  for (const [field, message] of requiredFields) {
    if (!valueOf(_payload[field])) {
      errors[field] = message;
    }
  }

  if (valueOf(_payload.email) && !emailPattern.test(valueOf(_payload.email))) {
    errors.email = 'Enter a valid email address.';
  }

  const fileMessages: string[] = [];
  const hasDisallowed = _files.some(
    (file) => !ALLOWED_FILE_EXTENSIONS.includes(extensionFor(file))
  );
  const hasOversize = _files.some((file) => file.size > MAX_FILE_BYTES);
  const totalBytes = _files.reduce((sum, file) => sum + file.size, 0);

  if (hasDisallowed) {
    fileMessages.push(`Allowed file types: ${ALLOWED_FILE_EXTENSIONS.join(', ')}.`);
  }
  if (hasOversize) {
    fileMessages.push('Each file must be 10MB or smaller.');
  }
  if (totalBytes > MAX_TOTAL_FILE_BYTES) {
    fileMessages.push('Total attachments must be 25MB or smaller.');
  }

  if (fileMessages.length > 0) {
    errors.files = fileMessages.join(' ');
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
