import { getServerConfig } from './config';
import { createEnquiryApp } from './enquiryApp';
import { createMailer } from './mailer';

const config = getServerConfig();
const app = createEnquiryApp({ mailer: createMailer(config) });

app.listen(config.port, () => {
  console.log(`IAM Surveyors enquiry API listening on http://127.0.0.1:${config.port}`);
});
