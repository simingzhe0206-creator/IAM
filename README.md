# IAM Surveyors Local Prototype

Local React/Vite prototype for the IAM Surveyors website refresh.

## Stack

- React + Vite + TypeScript
- Tailwind v4 via `@tailwindcss/vite`
- Express API for quote enquiries
- Multer file uploads
- Nodemailer SMTP email with direct attachments

## Run

```powershell
npm install
copy .env.example .env
npm run dev
```

Open the client URL printed by Vite. The API runs on `http://127.0.0.1:5174`.

## Quote Form Email

Set these values in `.env`:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `ENQUIRY_TO_EMAIL`
- `ENQUIRY_FROM_EMAIL`

Without valid SMTP settings, the form still validates but email sending returns a configuration error.

## Skill Usage

The design skill was installed with:

```powershell
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

Restart Codex to pick up new skills automatically. After restart, ask:

```text
使用 design-taste-frontend skill，根�?IAM Surveyors 文档、原站和 Pinterest 参考继续优化前端审美设计�?```
