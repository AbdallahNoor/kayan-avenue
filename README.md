# Kayan Avenue Properties

A premium, bilingual (EN / عربي) marketing site for **Kayan Avenue Properties**, a luxury real-estate brokerage in Dubai.

Built with a modern stack and a dark-luxe editorial aesthetic.

## Tech stack

- **Next.js 15** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS v4**
- **Motion** (Framer Motion) — scroll reveals, parallax, staggered entrances
- **Lenis** — buttery smooth scrolling
- **lucide-react** — icons
- **next/font** — Cormorant Garamond, Cinzel, Jost, Tajawal (Arabic)
- **next/image** — optimized imagery

## Features

- Cinematic parallax hero with animated stat counters
- Bilingual EN/AR with full RTL mirroring (preference saved to `localStorage`)
- Scroll-triggered reveal animations and layered image parallax
- Featured property listings, services, partner logo wall, contact form
- Fully responsive, SEO metadata + Open Graph, accessibility-minded

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars required.
4. Click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

## Customize

- **Content / translations:** `src/lib/content.ts`
- **Colors & fonts:** `@theme` block in `src/app/globals.css`
- **Images:** `public/images` and `public/partners`
- **Contact details:** `contactInfo` in `src/lib/content.ts`

### To replace before launch
- Hero stat figures, the 4 sample property listings
- Social URLs (Instagram / LinkedIn / YouTube handles — WhatsApp is wired to the real number)
- Wire the contact form to a backend (e.g. Formspree, Resend, or a route handler) — it is currently front-end only.
