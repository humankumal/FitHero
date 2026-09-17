# Fit Hero — Project Intelligence Audit

**Date:** 2026-09-17 · **Audited at commit:** `181aebf` (branch `main`) · **Method:** full read-only source review + `npm ci` (lockfile-exact), `npm run lint`, `npm run build`, `npm audit`, and read-only Vercel API inspection. No application code was modified.

**Legend:** ✅ VERIFIED (observed directly) · 🔶 INFERENCE (reasoned, not executed/observed) · ❓ UNVERIFIED

---

## 1. Executive summary

Fit Hero is a **polished, fully static marketing prototype** for a fitness/wellness platform ("training, yoga, meditation, life skills"). It is a Next.js 16 App Router site where **every route prerenders to static HTML** (✅ verified by build: 29/29 routes static) and **all data is hardcoded mock data** in `src/lib/data/`. There is **no backend, no database, no authentication, no payments, no email, no analytics, and no persistence of any kind** — the booking and contact forms simulate success entirely in the browser and discard the user's input.

It is deployed to **Vercel (Hobby plan)**, project `fit-hero`, auto-deploying from `main` of the **public** GitHub repo `humankumal/FitHero` (✅ verified via Vercel API; latest production deployment is commit `181aebf`, state READY).

**As a demo/portfolio piece it is production-ready.** As a product it is a front-of-house with nothing behind the counter — and a few pieces of copy actively *promise* backend behavior that does not exist (confirmation emails, replies "within one business day"). The most important pre-launch facts are in §17 (prioritised findings).

Code quality is genuinely high for a vibe-coded project: strict TypeScript passes, ESLint passes, accessibility and reduced-motion support are unusually thorough, and the design system is clean. The main risks are *honesty of the UI vs. reality*, a **known-vulnerable Next.js version (16.2.10)**, and placeholder SEO domains baked into metadata.

---

## 2. Project purpose

**Plain English:** a beautiful website for a fictional-or-future fitness business. Visitors can browse 16 training/yoga/meditation/life programs, read about coaches and pricing, "book" a session, and view demo member/admin dashboards. Nothing they do is saved anywhere.

**Technically:** a statically prerendered Next.js 16 App Router site (TypeScript, Tailwind CSS v4, Framer Motion) with a small in-repo data layer acting as a stand-in for a future API/database. The README (✅) explicitly frames this as "V1 … mock-data-driven" with payments/auth/database as "first candidates for V2".

---

## 3. Architecture map

```
Browser
  │  (static HTML/CSS/JS from Vercel CDN — no runtime server logic)
  ▼
Next.js App Router (all routes ○ static / ● SSG)
  ├─ /            homepage (hero, pillars, featured, testimonials)
  ├─ /programs    client-side filterable catalog (ProgramsExplorer)
  ├─ /programs/[slug]  16 SSG detail pages (generateStaticParams)
  ├─ /booking     client-side booking simulator (BookingForm)
  ├─ /pricing     plans + monthly/yearly toggle + FAQ
  ├─ /dashboard   demo member dashboard (hardcoded "Alex Morgan")
  ├─ /admin       demo admin dashboard (labeled "Demo data")
  ├─ /about, /contact, /not-found
  └─ /robots.txt, /sitemap.xml, /icon.svg (generated)

Data source: src/lib/data/*.ts  (compile-time TypeScript constants)
  categories(4) · trainers(6) · sessions(16) · pricingPlans(3)
  faqs(6) · testimonials · userBookings/userStats · adminBookings/adminStats

Deployment: GitHub humankumal/FitHero (public) ──push to main──▶ Vercel fit-hero (Hobby)
```

**Data flow:** one-way, build-time only. `data/*.ts` → imported by server components → rendered to static HTML at `next build` → served from CDN. The only client-side "state" is ephemeral React state (filters, form fields, fake confirmation). ✅ No `fetch()`, no `process.env`, no API routes, no server actions, no cookies, no localStorage anywhere in `src/` (verified by grep).

---

## 4. Technology & integration inventory

| Layer | Technology | Status |
|---|---|---|
| Framework | Next.js **16.2.10** (App Router, Turbopack) | ✅ builds clean; ⚠ known CVEs, see §9 |
| Language | TypeScript 5, `strict: true` | ✅ passes in build |
| Styling | Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`) | ✅ |
| Animation | framer-motion ^12 | ✅ |
| Fonts | Geist + Sora via `next/font/google` (self-hosted at build; no runtime Google requests) | ✅ |
| Hosting | Vercel, project `fit-hero` (`prj_8nby6z4slOAoDJ6VDaIrPs23lHy4`), team "humankumal's projects", **Hobby plan** | ✅ via API |
| CI/CD | None in repo (no `.github/`); Vercel's GitHub integration builds every push | ✅ |
| Database / auth / payments / email / SMS / webhooks / n8n / AI APIs / analytics / monitoring | **None. Zero external integrations.** | ✅ |

Dependencies are minimal (4 runtime deps). No unexpected or unused packages. `sharp` appears only as Next's transitive image-optimization dependency.

---

## 5. Feature / capability inventory

- **Program catalog** — 16 fully-written programs with benefits, weekly structure, equipment, ratings (`src/lib/data/sessions.ts`, ~940 lines of curated content).
- **Filtering** — category (URL-synced via `router.replace`), difficulty, free-text search (`src/components/sessions/ProgramsExplorer.tsx`).
- **Booking simulator** — program/day/time selection, 7 rolling days computed client-side, animated confirmation with a deterministic fake reference `FH-xxxx` (`src/components/forms/BookingForm.tsx:75-83`).
- **Deep-linking** — `/booking?session=<slug>` preselects a program (✅ used by program detail sidebar).
- **Pricing** — 3 plans, monthly/yearly toggle with animated price swap.
- **Member dashboard** — streak, minutes, calm score, weekly goal progress bars, upcoming bookings, "recommended" programs computed by rating among un-booked programs (`src/app/dashboard/page.tsx:399-404`).
- **Admin dashboard** — KPI tiles with growth deltas, hand-built SVG-free revenue bar chart with tooltips and an `sr-only` data table (`src/components/admin/RevenueChart.tsx`), category breakdown bars, bookings table.
- **SEO plumbing** — per-page `metadata`, `sitemap.ts` (excludes /dashboard and /admin), `robots.ts` (disallows `/admin`), OpenGraph tags, SVG favicon.
- **Accessibility** — skip-link, `aria-pressed`/`aria-current`/`role="switch"`/`role="progressbar"`, focus-visible styling, breadcrumb nav, sr-only chart table.
- **Motion discipline** — every animation checks `useReducedMotion()` **and** a global `prefers-reduced-motion` CSS kill-switch exists (`globals.css:113-121`).

---

## 6. Hidden / overlooked discoveries (what you may not realise)

1. **Your forms promise things the system cannot do.** The booking confirmation says *"A confirmation with your session link and preparation notes is on its way to your inbox"* (`BookingForm.tsx:127-131`) and the contact form says *"we'll get back to you within one business day"* (`ContactForm.tsx:26-28`). **No message is ever sent and the input is discarded.** Harmless in a demo; deceptive the moment a real visitor uses it.
2. **`/booking?plan=<id>` is a dead parameter.** Pricing CTAs link to `/booking?plan=starter|hero|elite` (`PricingPlans.tsx` → `href={\`/booking?plan=${plan.id}\`}`), but `BookingForm` only reads the `session` param (`BookingForm.tsx:55`). The chosen plan is silently ignored — a half-finished funnel. 🔶
3. **The demo dashboards are dated to July 2026 — already in the past.** All bookings and the admin header ("July 2026") are hardcoded (`src/lib/data/bookings.ts`). The member dashboard shows "upcoming" sessions on 2026-07-03…07-06, which now read as stale. This mock data quietly ages.
4. **Your SEO points at a placeholder domain.** `metadataBase` is `https://fithero.example.com` (`layout.tsx:19`), and `sitemap.ts:4` / `robots.ts:10` hardcode the same. Live sitemap/OG/canonical URLs therefore reference a domain you don't own.
5. **The GitHub repo is public** (✅ Vercel metadata: `githubRepoVisibility: public`). Anyone can read the source and the fictional business data. Probably fine — but it should be a decision, not an accident.
6. **`/admin` is fully public and linked from the footer** (`Footer.tsx` platformLinks). It's demo data and labeled as such, but robots-disallow ≠ access control, and the footer link invites everyone in.
7. **Clever things worth keeping:** the hydration-safe date trick (`useHydrated` via `useSyncExternalStore`, `BookingForm.tsx:19-27`) that keeps prerendered HTML stable while rendering client-only dates; the deterministic booking reference so demos are reproducible; the sr-only chart data table; the URL-synced category filter.
8. **Every push to `main` deploys production automatically** (✅ two production deployments, both triggered by GitHub commits). There is no staging gate, no CI checks before deploy — Vercel's build is the only gate.
9. **`next.config.ts` is empty** — no security headers (CSP, HSTS, X-Frame-Options…), no redirects, no image config. Defaults only.
10. **Next.js anonymous telemetry is on** (build output mentions it). Cosmetic, but you should know your builds phone home metadata.

---

## 7. Production risks (tied to this codebase)

- **Trust/legal:** collecting name + email in forms that pretend to succeed (§6.1) is the single biggest "real customer" risk. Also note: no privacy policy or terms pages exist anywhere, yet the forms request personal data. 🔶
- **Framework CVEs:** Next 16.2.10 carries 11 published advisories including two **critical RCEs** fixed in 16.3.3+ (✅ `npm audit`; details §9). Exposure is *reduced* because the site is static, has no server actions/middleware, and Vercel serves it — but `/_next/image` exists by default on Vercel and one critical is in the image-optimization AVIF path. ❓ Whether Vercel's platform mitigations cover a Hobby deployment of this version was not verified. Upgrading is the only certain fix.
- **No monitoring of any kind:** no error tracking, no analytics, no uptime checks. If the site breaks, you find out from a human.
- **Single provider dependency:** GitHub + Vercel. Vercel Hobby has no SLA. Recovery story is fine though — the site is fully reproducible from the repo (`npm ci && npm run build`), so data-loss risk is effectively zero; the repo *is* the database.
- **Timezone edge (minor):** `buildNextDays` builds the ISO key with `toISOString()` (UTC) but labels with local `toLocaleDateString` (`BookingForm.tsx:38-46`). For users in negative-UTC evenings, the ISO date can be one day ahead of the label. Cosmetic today; a real bug the day bookings become real. 🔶
- **Stale-state edge (minor):** `ProgramsExplorer` seeds category from the URL only in `useState` initializer (`ProgramsExplorer.tsx:30-34`). Navigating from a footer category link *while already on* `/programs` likely won't update the active filter, since the component doesn't remount. 🔶 (not runtime-verified)
- **Chart ceiling:** `RevenueChart` hardcodes `AXIS_MAX = 150_000` (`RevenueChart.tsx:11`) — any month above 150k renders a bar taller than the chart area.
- **Concurrency, race conditions, rate limits, webhook/payment failures: not applicable** — there is nothing dynamic to race or fail. This is a genuine architectural strength of V1.

---

## 8. Security findings

See §9 for the classified list. Summary: no secrets exist in the repo (✅ no `.env*` files, no `process.env` usage), the attack surface is essentially "static files + default Next endpoints", and the only substantive issues are the outdated framework and the absent security headers. `/admin` and `/dashboard` being public is by design for a demo, but must be gated before any real data touches them.

---

## 9. Technical debt & security review (classified)

**CRITICAL**
- None that is exploitable *today* given the fully-static, no-secrets architecture. The nearest candidate is below.

**HIGH**
- **H1 — Vulnerable Next.js 16.2.10.** ✅ `npm audit`: 11 advisories on `next`, incl. critical RCEs GHSA-p293-qw3h-jr36 (Windows hosts — not your platform) and GHSA-2xp9-vwfh-vxw4 (image-optimization AVIF path — potentially reachable via `/_next/image` on Vercel), plus SSRF/DoS/cache-confusion issues mostly in features you don't use. Fix path: `next@16.3.5`. *Impact if ignored: unpatched publicly-known holes in the one server component you do run.*
- **H2 — UI promises undelivered backend behavior** (booking/contact success copy, §6.1). *Impact: real users lose bookings/messages silently; reputational and potentially legal (data collected under false pretense).*

**MEDIUM**
- **M1 — Placeholder domain in `metadataBase`/`sitemap`/`robots`** (§6.4). Wrong canonical/OG URLs and a sitemap pointing at `example.com` on the live deployment.
- **M2 — No security headers** (`next.config.ts` empty): no CSP, HSTS, frame-ancestors, etc. Low exploitability on a static site, but free hardening left on the table.
- **M3 — Dead `?plan=` funnel parameter** (§6.2): user's plan choice is dropped between pricing and booking.
- **M4 — No tests and no CI.** ✅ zero test files, no `.github/`. The only regression gate is "did the Vercel build compile".
- **M5 — Public repo + public `/admin` as an undeliberate default** (§6.5–6.6).

**LOW**
- **L1 —** Booking day ISO/label timezone mismatch (§7). **L2 —** ProgramsExplorer stale filter on same-route nav (§7). **L3 —** `RevenueChart` hardcoded axis max. **L4 —** Mock data hardcoded to July 2026, silently aging (§6.3). **L5 —** 7 transitive dev-toolchain vulnerabilities (`brace-expansion`, `browserslist`, `js-yaml`, `nanoid`, `postcss`, `sharp`, `baseline-browser-mapping`) — build-time only, not shipped to users.

**INFORMATIONAL**
- No LICENSE file (defaults to "all rights reserved" — fine if intentional). No privacy/terms pages despite forms. Next telemetry enabled. `AGENTS.md`/`CLAUDE.md` instruct AI agents to read Next 16 docs from `node_modules/next/dist/docs/` (✅ present) — a smart guard because Next 16 post-dates most models' training data; keep it.

---

## 10. Cost / billing exposure

**Current running cost: ~$0.** ✅ Vercel Hobby (free) + public GitHub (free) + zero external APIs, databases, AI calls, or paid services. Static prerendering means near-zero function invocations (`lambdaRuntimeStats: nodejs:1` — a single function, likely the 404/image handler 🔶).

Watch-outs:
- **Vercel Hobby is licensed for non-commercial use.** The moment Fit Hero (or a re-skin of it) is a paying client's site or takes real customers, you're expected on Pro (paid). This is the only realistic near-term bill.
- Bandwidth/image-optimization quotas on Hobby are generous but finite; a traffic spike degrades rather than bills (Hobby hard-caps instead of charging). 🔶
- Every push (any branch) triggers a Vercel build — free-tier build minutes are the only meterable resource today.

---

## 11. Incomplete / fragile areas

- Forms: no submission target, no validation beyond HTML `required`/`type=email`, no spam protection (irrelevant until they actually send).
- Booking: hardcoded 6 time slots, no availability model, no timezone concept, fake reference numbers, no persistence.
- The `?plan=` parameter dead-end (§6.2).
- Dashboards: single hardcoded member; "resets Monday", "up 6 pts this month", "Coach's note" are pure copy, not computed.
- Mock dates aging out (§6.3).
- Zero TODO/FIXME markers exist (✅ grep) — the incompleteness is *by design and documented in the README*, which is healthier than scattered TODOs, but means the gaps live in your head, not the code.

## 12. Testing gaps — highest-value real tests before customers

1. **Cross-device manual pass of `/booking`** around midnight and in a US timezone (exercises L1) and via every entry path (`?session=`, `?plan=`, direct).
2. **Footer category links while on `/programs`** (exercises L2).
3. **Lighthouse/a11y run on `/` and `/programs`** — heavy blur/gradient animation layers are the main mobile-performance suspect. ❓ Real-device performance unverified.
4. **`prefers-reduced-motion` pass** — plumbing is thorough, verify it end-to-end once on a real device.
5. When V2 adds a backend: booking double-submit, concurrent slot claims, and email failure paths become the critical suite. Today there is nothing server-side to test — don't build tests for mock data; build them with V2.

---

## 13. Owner knowledge guide (plain language)

- **How it works:** at build time, Next.js reads TypeScript files and bakes every page into plain HTML/CSS/JS. Vercel serves those files from a CDN. There is no server "running your app" and nothing that can crash at 3am.
- **Where the data lives:** `src/lib/data/` — that folder *is* your database. Program text, prices, coaches, testimonials, dashboard numbers: all there, versioned in git. Editing a `.ts` file and pushing to `main` **is** the CMS workflow, and every change auto-deploys to production.
- **External dependencies:** GitHub (source of truth) and Vercel (build + hosting). That's all. If Vercel is down, the site is down until Vercel recovers; if GitHub is down, the live site keeps working, you just can't publish changes.
- **What failure looks like:** realistically only (a) a build error after you push — Vercel keeps the previous version live and shows the failed build in its dashboard; or (b) Vercel outage. Diagnosis for (a): open the deployment in Vercel → read the build log → the error names the file/line.
- **What to monitor:** Vercel deployment emails/status; nothing else exists yet. Consider adding a free uptime pinger and analytics before real traffic.
- **Never change casually:** `package.json`/`package-lock.json` versions (Next 16 has breaking changes vs. what most tutorials/AI assistants know — hence `AGENTS.md`); `src/lib/types.ts` (every page depends on those shapes); `metadataBase`/sitemap/robots URLs (must match your real domain, once you have one); the `slug` values in `sessions.ts` (they are your URLs — changing one breaks inbound links).
- **Backups:** the git repo is a complete backup. There is no user data to lose. `git clone` + `npm ci` + `npm run build` reproduces the whole product anywhere.

---

## 14. Reusable / productisation opportunities

- **The design system** (`globals.css` `@theme` tokens + `components/ui/*` + `Reveal`) is a coherent, brand-swappable dark premium kit — directly reusable as a template for other UKDIGIHUB-style client sites (a re-skin is mostly a token + copy change).
- **`ProgramsExplorer`** is a generic "filterable catalog with URL-synced state" — reusable for any product/service listing.
- **`BookingForm`'s** slot-picker UX (day chips + time chips + sticky summary) is a reusable booking front-end awaiting any backend.
- **The admin chart components** (`RevenueChart`, `CategoryBreakdown`) are dependency-free (no chart library), accessible, themable — a lightweight dashboard kit.
- **The whole repo is a "fitness/wellness studio" vertical template**: same architecture as a sellable niche-site product (see the sibling `*-os` Vercel projects — this fits that portfolio pattern).
- **`AGENTS.md` + mock-data-first architecture** is itself a reusable *process* asset: a clean V1 pattern where AI agents can build UI safely with zero integration risk.

---

## 15. Project maturity assessment

- **Production-ready (as a static showcase):** design system, all 9 public pages, SEO plumbing structure, accessibility, motion discipline, build pipeline, hosting. Lint/typecheck/build all green. ✅
- **Beta-quality:** booking/contact UX (excellent front-end, no back-end truth); SEO content (structure right, domain wrong).
- **Experimental/demo:** dashboards (`/dashboard`, `/admin`) — deliberately fake, one labeled "Demo data".
- **Absent by design:** auth, payments, database, email, monitoring, tests — honestly documented in README as V2.
- **Unverified:** real-device performance, the two suspected runtime edge cases (L1, L2), Vercel-side mitigation status of the Next CVEs, and whether a custom domain is attached to the Vercel project.

## 16. Unknown / unverified items

1. ❓ Whether Vercel's platform mitigates the Next 16.2.10 image-optimization CVE for Hobby deployments (upgrade regardless).
2. ❓ Custom domain / production alias configuration on the Vercel project (only deployment-generated `*.vercel.app` URLs were observed).
3. ❓ Runtime confirmation of L1 (timezone) and L2 (stale filter) — code-level inference only.
4. ❓ Real-device mobile performance under the animated blur layers.
5. ❓ Owner intent on repo visibility (public) and on Hobby-plan commercial-use fit.

## 17. Prioritised findings (do-first order — findings only, nothing was changed)

1. **H2** — Before any real visitor uses the site: gate or reword the booking/contact success states so the UI stops claiming emails are sent.
2. **H1** — Upgrade `next` 16.2.10 → ≥16.3.5 (11 advisories, 2 critical).
3. **M1** — Replace `fithero.example.com` in `layout.tsx`, `sitemap.ts`, `robots.ts` with the real domain when one exists.
4. **M3** — Decide the fate of `/booking?plan=` (honor it or stop sending it).
5. **M5** — Make deliberate decisions on repo visibility and public `/admin`; **M2/M4** (headers, CI/tests) when V2 begins.
