import request from 'supertest';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createEnquiryApp } from './enquiryApp';

const mailer = {
  mailReady: true,
  sendQuoteEnquiry: vi.fn(async () => undefined)
};

const validRequest = (app: ReturnType<typeof createEnquiryApp>) =>
  request(app)
    .post('/api/enquiries')
    .field('name', 'Alex Chen')
    .field('email', 'alex@example.com')
    .field('phone', '0426 668 800')
    .field('siteAddress', '47/8 Avenue of the Americas, Newington NSW')
    .field('councilArea', 'City of Parramatta')
    .field('serviceRequired', 'Detail and Level Survey')
    .field('projectType', 'Residential renovation')
    .field('projectStage', 'Design')
    .field('message', 'Please quote this survey.');

describe('quote enquiry API', () => {
  beforeEach(() => {
    mailer.sendQuoteEnquiry.mockClear();
    mailer.sendQuoteEnquiry.mockResolvedValue(undefined);
  });

  it('reports whether SMTP delivery is ready without exposing configuration', async () => {
    const app = createEnquiryApp({ mailer });

    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ ok: true, mailReady: true });
    expect(JSON.stringify(response.body)).not.toContain('smtp');
  });

  it('rejects invalid payloads before sending email', async () => {
    const app = createEnquiryApp({ mailer });

    const response = await request(app)
      .post('/api/enquiries')
      .field('name', '')
      .field('email', 'bad-email')
      .field('siteAddress', '');

    expect(response.status).toBe(400);
    expect(response.body.errors.email).toBe('Enter a valid email address.');
    expect(mailer.sendQuoteEnquiry).not.toHaveBeenCalled();
  });

  it('sends a valid enquiry with uploaded files to the mailer', async () => {
    const app = createEnquiryApp({ mailer });

    const response = await validRequest(app)
      .attach('files', Buffer.from('PDF content'), {
        filename: 'plans.pdf',
        contentType: 'application/pdf'
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Thank you. Your enquiry has been sent to IAM Surveyors.'
    });
    expect(mailer.sendQuoteEnquiry).toHaveBeenCalledWith(
      expect.objectContaining({
        fields: expect.objectContaining({ email: 'alex@example.com' }),
        files: [expect.objectContaining({ originalname: 'plans.pdf' })]
      })
    );
  });

  it('silently accepts honeypot submissions without sending email', async () => {
    const app = createEnquiryApp({ mailer });

    const response = await validRequest(app).field('website', 'https://spam.example');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Thank you. Your enquiry has been sent to IAM Surveyors.' });
    expect(mailer.sendQuoteEnquiry).not.toHaveBeenCalled();
  });

  it('limits valid submissions to five per IP in fifteen minutes', async () => {
    const app = createEnquiryApp({ mailer });

    for (let attempt = 0; attempt < 5; attempt += 1) {
      const response = await validRequest(app);
      expect(response.status).toBe(200);
    }

    const limited = await validRequest(app);
    expect(limited.status).toBe(429);
    expect(mailer.sendQuoteEnquiry).toHaveBeenCalledTimes(5);
  });

  it('rejects a file when its MIME type does not match its extension', async () => {
    const app = createEnquiryApp({ mailer });

    const response = await validRequest(app).attach('files', Buffer.from('not a PDF'), {
      filename: 'renamed.pdf',
      contentType: 'application/x-msdownload'
    });

    expect(response.status).toBe(400);
    expect(response.body.errors.files).toContain('does not match its file type');
    expect(mailer.sendQuoteEnquiry).not.toHaveBeenCalled();
  });

  it('returns 503 when mail delivery is not configured', async () => {
    const unavailableMailer = {
      mailReady: false,
      sendQuoteEnquiry: vi.fn(async () => undefined)
    };
    const app = createEnquiryApp({ mailer: unavailableMailer });

    const response = await validRequest(app);

    expect(response.status).toBe(503);
    expect(response.body.message).toBe('Quote delivery is temporarily unavailable. Please contact IAM Surveyors directly.');
    expect(unavailableMailer.sendQuoteEnquiry).not.toHaveBeenCalled();
  });

  it('returns a generic 502 response when SMTP delivery fails', async () => {
    const app = createEnquiryApp({ mailer });
    mailer.sendQuoteEnquiry.mockRejectedValueOnce(new Error('secret SMTP host rejected credentials'));

    const response = await validRequest(app);

    expect(response.status).toBe(502);
    expect(response.body.message).toBe('The enquiry could not be delivered. Please try again or contact IAM Surveyors directly.');
    expect(JSON.stringify(response.body)).not.toContain('secret SMTP');
  });
});
