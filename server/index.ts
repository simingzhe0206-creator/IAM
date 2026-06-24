import { getServerConfig } from './config';
import { createEnquiryApp } from './enquiryApp';
import { createMailer } from './mailer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const config = getServerConfig();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const staticDir = process.env.STATIC_DIR
  ? path.resolve(process.env.STATIC_DIR)
  : path.resolve(__dirname, '../dist');
const app = createEnquiryApp({ mailer: createMailer(config), staticDir });

app.listen(config.port, () => {
  console.log(`IAM Surveyors enquiry API listening on http://127.0.0.1:${config.port}`);
});
