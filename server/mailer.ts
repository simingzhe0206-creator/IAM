import nodemailer from 'nodemailer';
import type { QuotePayload } from '../src/utils/quoteValidation';
import type { ServerConfig } from './config';
import type { EnquiryMailer } from './enquiryApp';

function formatField(label: string, value?: string) {
  return `${label}: ${value?.trim() || 'Not provided'}`;
}

function enquiryText(fields: QuotePayload) {
  return [
    'New IAM Surveyors quote enquiry',
    '',
    formatField('Name', fields.name),
    formatField('Email', fields.email),
    formatField('Phone', fields.phone),
    formatField('Site address', fields.siteAddress),
    formatField('Council area', fields.councilArea),
    formatField('Service required', fields.serviceRequired),
    formatField('Project type', fields.projectType),
    formatField('Project stage', fields.projectStage),
    '',
    'Message:',
    fields.message?.trim() || 'Not provided',
    '',
    `Submitted: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}`
  ].join('\n');
}

export function createMailer(config: ServerConfig): EnquiryMailer {
  const mailReady = Boolean(
    config.smtpHost &&
      config.smtpUser &&
      config.smtpPass &&
      config.enquiryToEmail &&
      config.enquiryFromEmail
  );
  const transporter = mailReady
    ? nodemailer.createTransport({
        pool: true,
        maxConnections: 3,
        maxMessages: 100,
        host: config.smtpHost,
        port: config.smtpPort,
        secure: config.smtpPort === 465,
        connectionTimeout: 10_000,
        greetingTimeout: 10_000,
        socketTimeout: 20_000,
        auth: {
          user: config.smtpUser,
          pass: config.smtpPass
        }
      })
    : undefined;

  return {
    mailReady,
    async sendQuoteEnquiry({ fields, files }) {
      if (!transporter || !config.enquiryToEmail || !config.enquiryFromEmail) {
        throw new Error('SMTP is not configured. Check .env settings.');
      }

      await transporter.sendMail({
        to: config.enquiryToEmail,
        from: config.enquiryFromEmail,
        replyTo: fields.email,
        subject: `New IAM Surveyors quote enquiry from ${fields.name?.replace(/[\r\n]+/g, ' ')}`,
        text: enquiryText(fields),
        attachments: files.map((file) => ({
          filename: file.originalname,
          content: file.buffer,
          contentType: file.mimetype
        }))
      });
    }
  };
}
