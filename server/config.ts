import 'dotenv/config';

export type ServerConfig = {
  port: number;
  smtpHost?: string;
  smtpPort: number;
  smtpUser?: string;
  smtpPass?: string;
  enquiryToEmail?: string;
  enquiryFromEmail?: string;
};

export function getServerConfig(): ServerConfig {
  return {
    port: Number(process.env.PORT ?? 5174),
    smtpHost: process.env.SMTP_HOST,
    smtpPort: Number(process.env.SMTP_PORT ?? 587),
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    enquiryToEmail: process.env.ENQUIRY_TO_EMAIL,
    enquiryFromEmail: process.env.ENQUIRY_FROM_EMAIL
  };
}
