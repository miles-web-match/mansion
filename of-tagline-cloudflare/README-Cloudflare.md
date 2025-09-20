# of-tagline – Cloudflare Pages edition

This package is prepared for **Cloudflare Pages**.

## What changed
- Added **/functions/api/describe.ts** (Pages Functions)
- Added **/index.html** so the root path doesn't 404 on Pages

## Deploy steps
1. Create a new **Cloudflare Pages** project and upload the repo/ZIP.
2. Set **Environment Variable**: `OPENAI_API_KEY` (Production & Preview).
3. No build command is required if this is API + static only.
4. Visit:
   - Root: `https://<your>.pages.dev/`
   - API:  `POST https://<your>.pages.dev/api/describe`

> Port your Vercel `route.ts` logic into `/functions/api/describe.ts`. Cloudflare Pages uses the Workers runtime (not Node).
