import { describe, expect, it } from 'vitest';
import {
  ALLOWED_FILE_EXTENSIONS,
  MAX_FILE_BYTES,
  MAX_TOTAL_FILE_BYTES,
  validateQuotePayload
} from './quoteValidation';

const file = (name: string, size: number) =>
  new File([new Uint8Array(size)], name, { type: 'application/octet-stream' });

const validPayload = {
  name: 'Alex Chen',
  email: 'alex@example.com',
  phone: '0426 668 800',
  siteAddress: '47/8 Avenue of the Americas, Newington NSW',
  councilArea: 'City of Parramatta',
  serviceRequired: 'Detail and Level Survey',
  projectType: 'Residential renovation',
  projectStage: 'Design',
  message: 'Please quote a detail survey for this site.'
};

describe('quote form validation', () => {
  it('accepts a complete quote payload with allowed files', () => {
    const result = validateQuotePayload(validPayload, [
      file('architectural-plans.pdf', 1024),
      file('survey-reference.dwg', 2048)
    ]);

    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
    expect(ALLOWED_FILE_EXTENSIONS).toContain('dwg');
  });

  it('rejects missing required fields and invalid email addresses', () => {
    const result = validateQuotePayload(
      { ...validPayload, name: '', email: 'not-an-email', siteAddress: '' },
      []
    );

    expect(result.valid).toBe(false);
    expect(result.errors.name).toBe('Name is required.');
    expect(result.errors.email).toBe('Enter a valid email address.');
    expect(result.errors.siteAddress).toBe('Site address is required.');
  });

  it('rejects disallowed file types and attachment limits', () => {
    const result = validateQuotePayload(validPayload, [
      file('unsafe.exe', 100),
      file('large.pdf', MAX_FILE_BYTES + 1),
      file('bundle.zip', MAX_TOTAL_FILE_BYTES)
    ]);

    expect(result.valid).toBe(false);
    expect(result.errors.files).toContain('Allowed file types');
    expect(result.errors.files).toContain('Each file must be 10MB or smaller');
    expect(result.errors.files).toContain('Total attachments must be 25MB or smaller');
  });
});
