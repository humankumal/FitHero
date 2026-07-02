# Fit Hero

**Train your body. Calm your mind. Upgrade your life.**

Fit Hero is a wellness and transformation platform that brings training, yoga, meditation,
and life-enhancement skills into one guided experience. This repository contains the V1
web application: a fully responsive, mock-data-driven product built with the Next.js
App Router.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, static prerendering)
- TypeScript
- Tailwind CSS v4 (design tokens via `@theme` in `src/app/globals.css`)
- Framer Motion (scroll reveals, hero animation, mobile menu)

## Getting started

```bash
npm install
npm run dev       # start the dev server at http://localhost:3000
npm run build     # production build (all routes prerender statically)
npm run start     # serve the production build
npm run lint      # eslint
```

## Pages

| Route | Description |
| --- | --- |
| `/` | Premium marketing homepage: hero, four pillars, featured programs, testimonials |
| `/programs` | All 16 programs with category, difficulty, and text filters |
| `/programs/[slug]` | Program detail: benefits, weekly structure, coach, booking sidebar |
| `/booking` | Booking flow with program, day, and time-slot selection (`?session=<slug>` preselects) |
| `/pricing` | Membership plans with monthly/yearly toggle and FAQ |
| `/dashboard` | Member dashboard: streaks, weekly goals, upcoming sessions, recommendations |
| `/admin` | Admin dashboard: revenue chart, bookings by category, recent bookings, top programs |
| `/about` | Story, values, four pillars, coach team |
| `/contact` | Contact channels and consultation form |

## Architecture

- `src/lib/types.ts` — shared domain types (sessions, trainers, plans, bookings, stats)
- `src/lib/data/` — structured mock data for all entities; swap for a real API/database in V2
- `src/components/ui/` — design-system primitives (Button, Card, Badge, Rating, SectionHeading)
- `src/components/motion/Reveal.tsx` — scroll-reveal wrapper that respects `prefers-reduced-motion`
- `src/components/sessions|forms|dashboard|admin|home/` — feature components

## V1 scope notes

Bookings, forms, and dashboards run entirely on mock data — there is no payment
processing, authentication, or database yet. Those are the first candidates for V2.
