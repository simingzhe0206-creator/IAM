import request from 'supertest';
import { describe, expect, it, vi } from 'vitest';
import { createEnquiryApp } from './enquiryApp';

const mailer = {
  sendQuoteEnquiry: vi.fn(async () => undefined)
};

describe('quote enquiry API', () => {
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

    const response = await request(app)
      .post('/api/enquiries')
      .field('name', 'Alex Chen')
      .field('email', 'alex@example.com')
      .field('phone', '0426 668 800')
      .field('siteAddress', '47/8 Avenue of the Americas, Newington NSW')
      .field('councilArea', 'City of Parramatta')
      .field('serviceRequired', 'Detail and Level Survey')
      .field('projectType', 'Residential renovation')
      .field('projectStage', 'Design')
      .field('message', 'Please quote this survey.')
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
});
