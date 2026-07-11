# Rahul Sai Boddapati — AI Platform Portfolio

A single-page portfolio for AI Platform, Data & AI Product, and AI evaluation roles. It presents Rahul's work in agent validation, auditability, governance, and finance-grade controls without pretending that a gradient is a strategy.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production check:

```bash
npm run build
npm start
```

## Update content

- Edit project details and role-fit cards in `components/portfolio-data.ts`.
- Edit page sections in `app/page.tsx` and presentational components in `components/`.
- Global colours, type scale, and responsive styles are in `app/globals.css`.

## Replace links and artifacts

The resume button points to `/RahulSai_Resume.pdf`; add the real PDF at `public/RahulSai_Resume.pdf` before publishing. Project artifact buttons intentionally use `#` until their files or repositories are available. Search for `TODO` to replace them.

## Deploy on Vercel

Push this folder to a Git repository, import it in [Vercel](https://vercel.com/new), and accept the detected Next.js settings. Add the resume PDF under `public/` before the deployment. No environment variables or external APIs are required.
