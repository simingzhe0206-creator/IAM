export const ALLOWED_FILE_EXTENSIONS = ['pdf', 'doc', 'docx', 'jpg', 'png', 'dwg', 'dxf', 'zip'];
export const MAX_FILE_BYTES = 10 * 1024 * 1024;
export const MAX_TOTAL_FILE_BYTES = 18 * 1024 * 1024;
export const MAX_FILES = 8;

const ALLOWED_MIME_TYPES: Record<string, string[]> = {
  pdf: ['application/pdf'],
  doc: ['application/msword'],
  docx: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/zip'],
  jpg: ['image/jpeg'],
  png: ['image/png'],
  dwg: ['application/acad', 'application/x-acad', 'application/autocad_dwg', 'image/vnd.dwg'],
  dxf: ['application/dxf', 'image/vnd.dxf'],
  zip: ['application/zip', 'application/x-zip-compressed']
};

export const FIELD_MAX_LENGTHS = {
  name: 120,
  email: 254,
  phone: 40,
  siteAddress: 300,
  councilArea: 160,
  serviceRequired: 160,
  projectType: 160,
  projectStage: 120,
  message: 5000,
  website: 200
} as const;

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
  website?: string;
};

export type QuoteErrors = Partial<Record<keyof QuotePayload | 'files', string>>;

export type QuoteFile = {
  name?: string;
  originalname?: string;
  size: number;
  type?: string;
  mimetype?: string;
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

function mimeTypeFor(file: QuoteFile) {
  return (file.type ?? file.mimetype ?? '').toLowerCase();
}

export function isAllowedFileType(file: QuoteFile) {
  const extension = extensionFor(file);
  const mimeType = mimeTypeFor(file);

  if (!ALLOWED_FILE_EXTENSIONS.includes(extension)) {
    return false;
  }

  if (!mimeType || mimeType === 'application/octet-stream') {
    return true;
  }

  return ALLOWED_MIME_TYPES[extension]?.includes(mimeType) ?? false;
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

  for (const [field, maxLength] of Object.entries(FIELD_MAX_LENGTHS) as Array<
    [keyof typeof FIELD_MAX_LENGTHS, number]
  >) {
    if (valueOf(_payload[field]).length > maxLength) {
      const label = field === 'siteAddress'
        ? 'Site address'
        : field === 'serviceRequired'
          ? 'Service required'
          : field === 'projectType'
            ? 'Project type'
            : field === 'projectStage'
              ? 'Project stage'
              : field === 'councilArea'
                ? 'Council area'
                : field.charAt(0).toUpperCase() + field.slice(1);
      errors[field] = `${label} must be ${maxLength} characters or fewer.`;
    }
  }

  const fileMessages: string[] = [];
  const hasDisallowed = _files.some(
    (file) => !ALLOWED_FILE_EXTENSIONS.includes(extensionFor(file))
  );
  const hasOversize = _files.some((file) => file.size > MAX_FILE_BYTES);
  const hasMismatchedMime = _files.some(
    (file) => ALLOWED_FILE_EXTENSIONS.includes(extensionFor(file)) && !isAllowedFileType(file)
  );
  const totalBytes = _files.reduce((sum, file) => sum + file.size, 0);

  if (hasDisallowed) {
    fileMessages.push(`Allowed file types: ${ALLOWED_FILE_EXTENSIONS.join(', ')}.`);
  }
  if (hasOversize) {
    fileMessages.push('Each file must be 10MB or smaller.');
  }
  if (_files.length > MAX_FILES) {
    fileMessages.push(`A maximum of ${MAX_FILES} files can be uploaded.`);
  }
  if (hasMismatchedMime) {
    fileMessages.push('One or more attachments does not match its file type.');
  }
  if (totalBytes > MAX_TOTAL_FILE_BYTES) {
    fileMessages.push('Total attachments must be 18MB or smaller.');
  }

  if (fileMessages.length > 0) {
    errors.files = fileMessages.join(' ');
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
