# DexLink Social Trading

A modern **social trading platform** UI built with Next.js 15, TypeScript, and Tailwind CSS. Showcases copy-trading workflows, trader leaderboards, and performance analytics — part of the [DexLink](https://dexlink.dev) portfolio.

**Live demo:** [dexlink-social-trading.vercel.app](https://dexlink-social-trading.vercel.app)

## Features

- Social trading landing page with trader leaderboard
- Performance stats dashboard (volume, ROI, latency)
- Copy-trading & risk-control feature highlights
- Dark fintech UI with glassmorphism and responsive layout
- Deployed on Vercel with CI-ready Next.js App Router

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| UI | Radix UI, Lucide icons, Framer Motion |
| Deploy | Vercel |

## Getting started

```bash
git clone https://github.com/mtx9666/dexlink-social-trading.git
cd dexlink-social-trading
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |

## Project structure

```
src/app/
  layout.tsx    # Root layout & metadata
  page.tsx      # Landing page — hero, stats, leaderboard
  globals.css   # Theme tokens & glass styles
```

## What this demonstrates

- Full-stack frontend architecture with Next.js App Router
- Component-driven UI design for fintech products
- Production deployment pipeline (Vercel)
- Portfolio integration with [dexlink.dev](https://dexlink.dev)

## Author

**Ali** — [@mtx9666](https://github.com/mtx9666) · [dexlink.dev](https://dexlink.dev)

## License

MIT
