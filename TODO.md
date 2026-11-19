# Rollbard Studios — TODO

rollbard.com is being rebuilt from scratch as the home of **Rollbard Studios**, a studio making tabletop RPGs and video games.

Work this list with `/next`. Each item is designed first, presented for approval, and only built after a "proceed".

Status markers: `[ ]` todo · `[~]` in progress (design presented, awaiting decision) · `[x]` done · `[-]` dropped

## Phase 1 — Foundation

- [ ] **Studio identity brief** — Define who Rollbard Studios is: mission line, tone/voice, audience, what makes it distinct. Output: `docs/brand.md`.
- [ ] **Site goals & sitemap** — Decide what the site must do (showcase games, build a mailing list, sell, host rules/downloads, devlog) and the page structure that serves it.
- [ ] **Tech stack decision** — React is decided. Choose the React setup (e.g. Vite + React SPA, Next.js, Astro with React islands), TypeScript or not, styling approach, and hosting/deploy target for rollbard.com.
- [ ] **Clean slate** — Delete everything from the old Vue scaffold (src, public, configs, package.json, lockfile, node_modules) and set up the chosen React stack, linting/formatting, and a working dev/build.
- [ ] **Deployment pipeline** — Get a placeholder page live on rollbard.com with automatic deploys from `master`.

## Phase 2 — Look & feel

- [ ] **Visual identity** — Logo direction, color palette, typography, favicon. Must work for both tabletop and digital games.
- [ ] **Design system basics** — Layout, header/footer, buttons, cards, light/dark theme as reusable components.

## Phase 3 — Core pages

- [ ] **Home page** — Studio intro, featured projects, call to action.
- [ ] **Games index** — One place listing all projects, filterable by tabletop vs. video game and by status (in development / released).
- [ ] **Game detail page template** — Pitch, media, status, platforms/formats, where to get it.
- [ ] **About page** — The studio, the people, the story.
- [ ] **Contact** — Contact method(s) and press/business inquiries.

## Phase 4 — Community & content

- [ ] **Mailing list signup** — Pick a provider and add signup to the site.
- [ ] **Devlog / news** — Simple content-driven blog for updates (markdown-based).
- [ ] **Free downloads / resources** — Hosting for PDFs, character sheets, quickstart rules, demo builds.
- [ ] **Social links & sharing** — Social profiles, Open Graph/Twitter card images.

## Phase 5 — Polish & launch

- [ ] **SEO & metadata** — Titles, descriptions, sitemap.xml, robots.txt, structured data.
- [ ] **Accessibility & performance pass** — Lighthouse audit, keyboard navigation, contrast, image optimization.
- [ ] **Analytics** — Privacy-respecting analytics choice and setup.
- [ ] **Launch** — Final checks and announce.

## Decisions log

Record the outcome of each approved design here (date, item, decision) so later items build on it.

- 2026-11-19 — Starting over — None of the existing repo contents need to be kept. The site will be built with React.
