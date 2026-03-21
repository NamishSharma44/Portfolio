# Namish Sharma Portfolio

A robust dark-themed digital portfolio built with React.js via Next.js.

## Tech Stack

- Next.js (App Router)
- React.js
- TypeScript
- Tailwind CSS

## Included Sections

- Introduction and Summary
- About Me
- Skills and Technologies
- Projects
- Certifications and Courses
- Experience (Internships and Work)
- Research Publication or Patent
- Education
- Contact
- Resume Download (PDF)

## Resume Asset

The resume PDF is available at:

- public/resume-namish-sharma.pdf

## Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Run production server:

```bash
npm run start
```

## Direct Email Contact Setup

The contact form now sends email directly through a server API route (`/api/contact`) using Resend.

1. Copy `.env.example` to `.env.local`.
2. Set your values:

```bash
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO_EMAIL=namish907@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

Notes:

- `CONTACT_TO_EMAIL` is where all contact form submissions are delivered.
- `CONTACT_FROM_EMAIL` must be a sender allowed by your Resend account/domain.
- Without `RESEND_API_KEY`, the form will show a configuration error instead of sending.

## Notes

- The current content includes high-quality placeholders in some sections where full CV extraction was not machine-readable from the provided PDF.
- You can now instruct additional feature work, and the design system is ready for expansion.
