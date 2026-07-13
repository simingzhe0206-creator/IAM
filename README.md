# IAM Surveyors Website

React/Vite frontend and same-origin Express API for IAM Surveyors.

## Official Contact Details

- Email: `office@iamsurveyor.com.au`
- Phone: `+61 452 666 691`
- Address: `Shop 2/30-32 Herbert Street, West Ryde, NSW 2114`

## Stack

- React 19, React Router, Vite and TypeScript
- Tailwind CSS v4
- Express, Multer memory uploads and Nodemailer SMTP
- Vitest, Testing Library and Supertest

## Local Development

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Vite serves the frontend and proxies `/api` to the Express development server on `127.0.0.1:5174`.

## Environment Variables

```env
PORT=5174
STATIC_DIR=dist
VITE_QUOTE_ENABLED=true
VITE_QUOTE_API_BASE_URL=
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=office@iamsurveyor.com.au
SMTP_PASS=your-smtp-password
ENQUIRY_TO_EMAIL=office@iamsurveyor.com.au
ENQUIRY_FROM_EMAIL=office@iamsurveyor.com.au
```

- Leave `VITE_QUOTE_API_BASE_URL` blank for the recommended same-origin `/api` deployment.
- Set `VITE_QUOTE_ENABLED=false` for static previews that do not have the Express API.
- cPanel normally injects `PORT`; do not override it unless the host requires a fixed port.
- If the SMTP provider requires a separate authenticated sender, change `SMTP_USER` and `ENQUIRY_FROM_EMAIL`. Keep `ENQUIRY_TO_EMAIL=office@iamsurveyor.com.au`.

## Quote Delivery Behaviour

- Endpoint: `POST /api/enquiries` using `multipart/form-data`.
- Health check: `GET /api/health` returns `{ "ok": true, "mailReady": true|false }`.
- Files: `pdf`, `doc`, `docx`, `jpg`, `png`, `dwg`, `dxf`, `zip`.
- Limits: 8 files, 10MB per file, 18MB total.
- Attachments stay in memory and are sent directly by SMTP; they are not stored on disk.
- Spam protection: hidden honeypot, field validation and 5 valid submissions per IP per 15 minutes.
- The API is same-origin and does not enable open CORS.
- SMTP errors return generic `502/503` responses. Logs contain a request ID and error type, not credentials or attachment contents.

## Test And Build

```powershell
npm test
npm run build
```

The production build creates:

- `dist/` for the frontend.
- `server-dist/index.js` for the Node.js server.

Run the production build locally:

```powershell
npm start
```

## GitHub Pages Preview

The workflow at `.github/workflows/pages.yml` builds with:

```env
VITE_QUOTE_ENABLED=false
VITE_QUOTE_API_BASE_URL=
```

GitHub Pages is a frontend-only preview. The Quote form is displayed but submission is disabled because GitHub Pages cannot run the Express SMTP API. The workflow also builds with `--base=/IAM/` and creates `dist/404.html` for client routes.

## cPanel Production Deployment

Use one cPanel Node.js App to serve both the frontend and API from the same domain.

### 1. Build

```powershell
npm install
$env:VITE_QUOTE_ENABLED='true'
$env:VITE_QUOTE_API_BASE_URL=''
npm run build
```

### 2. Upload

Upload these files and folders to the cPanel application root:

- `dist/`
- `server-dist/`
- `package.json`
- `package-lock.json`

Do not upload `node_modules`, local logs, Word documents or SMTP credentials stored outside cPanel.

### 3. Configure Setup Node.js App

- Node.js: version 18 or newer.
- Application mode: `production`.
- Application root: the uploaded folder.
- Startup file: `server-dist/index.js`.
- Application URL: the production domain or subdomain.

Run the cPanel install command:

```bash
npm install --omit=dev
```

### 4. Add cPanel Environment Variables

Add the values shown in the Environment Variables section. Enter the real SMTP password in cPanel only. Set `STATIC_DIR=dist`, `VITE_QUOTE_ENABLED=true` and leave `VITE_QUOTE_API_BASE_URL` blank.

### 5. Restart And Verify

1. Restart the Node.js App.
2. Open `/api/health` and confirm `mailReady` is `true`.
3. Open `/quote` and confirm the submit button becomes available after the health check.
4. Submit one request without attachments.
5. Submit one request with a small PDF or image.
6. Confirm both messages arrive at `office@iamsurveyor.com.au`.
7. Confirm the attachment is present and Reply-To is the visitor email.
8. Confirm invalid files, more than 8 files, files over 10MB and totals over 18MB are rejected.

Production acceptance is not complete until the real IAM inbox receives the form body and test attachment.

## Design Skill

The installed skill is `design-taste-frontend`. Invoke it with:

```text
Use the design-taste-frontend skill to refine the IAM Surveyors frontend design.
```
