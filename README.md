# IAM Surveyors Website Prototype

React/Vite frontend prototype with a production-ready Express API for IAM Surveyors quote enquiries.

## Stack

- React + Vite + TypeScript
- Tailwind v4 via `@tailwindcss/vite`
- Express API for quote enquiries
- Multer file uploads
- Nodemailer SMTP email with direct attachments

## Local Development

```powershell
npm install
copy .env.example .env
npm run dev
```

Open the client URL printed by Vite. In development, Vite proxies `/api` to `http://127.0.0.1:5174`.

## Environment Variables

Create `.env` from `.env.example` and set:

```env
PORT=5174
STATIC_DIR=dist
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
ENQUIRY_TO_EMAIL=quotes@iamsurveyors.com.au
ENQUIRY_FROM_EMAIL=website@iamsurveyors.com.au
```

Notes:

- `PORT` is usually provided automatically by cPanel Node.js App.
- `STATIC_DIR=dist` tells the production API where to serve the built frontend.
- Without valid SMTP settings, the quote form validates locally but email sending returns a configuration error.

## Production Build

```powershell
npm run build
```

This creates:

- `dist/` for the static frontend
- `server-dist/index.js` for the production Node API

Start production locally:

```powershell
npm start
```

Production behavior:

- `/api/health` returns a health check JSON response.
- `/api/enquiries` handles quote form uploads and SMTP email.
- Static frontend files are served from `dist/`.
- React routes such as `/services`, `/projects`, and `/quote` fall back to `dist/index.html`.

## cPanel Deployment Strategy

Preferred strategy: run one cPanel Node.js App for both the website frontend and the quote API. This avoids cross-origin or proxy issues because the frontend can submit to same-origin `/api/enquiries`.

### 1. Build Locally

```powershell
cd /d D:\1sbmweb
npm install
npm run build
```

### 2. Upload Files

Upload the project to the cPanel application folder, for example:

```text
/home/ACCOUNT/iam-surveyors-app
```

Required folders and files:

- `dist/`
- `server-dist/`
- `public/`
- `package.json`
- `package-lock.json`
- `.env`

Do not upload:

- `node_modules/`
- local log files
- Word requirement documents

### 3. Configure cPanel Node.js App

In cPanel, open **Setup Node.js App** and configure:

- Node.js version: `18` or newer
- Application mode: `production`
- Application root: the uploaded app folder, for example `iam-surveyors-app`
- Application startup file: `server-dist/index.js`
- Application URL: the live domain or subdomain

Then run the cPanel install command:

```bash
npm install --omit=dev
```

If you prefer building on the server instead of uploading `dist/` and `server-dist/`, install dev dependencies first and run:

```bash
npm install
npm run build
npm prune --omit=dev
```

### 4. Add Environment Variables in cPanel

Set these in the Node.js App environment variable panel:

```env
STATIC_DIR=dist
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
ENQUIRY_TO_EMAIL=company-inbox@example.com
ENQUIRY_FROM_EMAIL=website@example.com
```

Do not manually set `PORT` unless your host instructs you to. cPanel usually injects it.

### 5. Restart and Test

Restart the Node.js App in cPanel, then test:

```text
https://your-domain.com/api/health
https://your-domain.com/quote
```

Quote form checks:

- Submit with missing required fields and confirm validation errors.
- Submit with no attachment and confirm the email arrives.
- Submit with allowed attachments: `pdf`, `doc`, `docx`, `jpg`, `png`, `dwg`, `dxf`, `zip`.
- Confirm oversized uploads are rejected.
- Confirm the email arrives at `ENQUIRY_TO_EMAIL` with attachments.

## Static-Only Fallback

If the hosting plan cannot run Node.js, upload only the contents of `dist/` to `public_html`. The frontend pages will work, but the Quote form email upload API will not work until a backend is deployed elsewhere.

For static-only React routing, add this `.htaccess` inside `public_html`:

```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>
```

## Design Skill Usage

The frontend design skill was installed as:

```powershell
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

After restarting Codex, call it with a request such as:

```text
Use the design-taste-frontend skill to refine the IAM Surveyors frontend design.
```
