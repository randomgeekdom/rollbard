# Rollbard Studios — TODO

rollbard.com is being rebuilt from scratch as the home of **Rollbard Studios**, a studio making tabletop RPGs and video games.

Work this list with `/next`. Each item is designed first, presented for approval, and only built after a "proceed".

Status markers: `[ ]` todo · `[~]` in progress (design presented, awaiting decision) · `[x]` done · `[-]` dropped

## Phase 1 — Foundation

- [x] **Studio identity brief** — Define who Rollbard Studios is: mission line, tone/voice, audience, what makes it distinct. Output: `docs/brand.md`.
- [x] **Fill brand brief TBDs** — Answer the open items in `docs/brand.md`: studio size and "I" vs "we", current/planned projects, genre leaning, distinctness statements, promises to players, name origin.
- [x] **Site goals & sitemap** — Decide what the site must do (showcase games, build a mailing list, sell, host rules/downloads, devlog) and the page structure that serves it.
- [x] **Tech stack decision** — React is decided. Choose the React setup (e.g. Vite + React SPA, Next.js, Astro with React islands), TypeScript or not, styling approach, and hosting/deploy target for rollbard.com.
- [x] **Clean slate** — Delete everything from the old Vue scaffold (src, public, configs, package.json, lockfile, node_modules) and set up the chosen React stack, linting/formatting, and a working dev/build.
- [~] **Deployment pipeline** — Get a placeholder page live on rollbard.com with automatic deploys from `master`. Deploy `build/client`; run `npm run lint`, `typecheck` and `format:check` before the build.
- [ ] **Move DNS to Cloudflare** — Add rollbard.com to Cloudflare, copy over any existing Hover DNS records (MX/TXT for email), then switch the nameservers at Hover to Cloudflare. Needed before the domain can point at the site.

## Phase 2 — Look & feel

- [ ] **Visual identity** — Logo direction, color palette, typography, favicon. Must work for both tabletop and digital games.
- [ ] **Design system basics** — Layout, header/footer, buttons, cards, light/dark theme as reusable components.

## Phase 3 — Core pages

- [ ] **Home page** — Studio intro, featured projects, call to action.
- [ ] **Games index** — One place listing all projects, filterable by tabletop vs. video game and by status (in development / released).
- [ ] **Game detail page template** — Pitch, media, status, platforms/formats, where to get it.
- [ ] **About page** — The studio, the people, the story.
- [ ] **Contact** — Contact method(s) and press/business inquiries.
- [ ] **Press kit** — `/press` page: boilerplate, logos, screenshots, fact sheet, contact.
- [ ] **SuperSphere play page** — `/games/supersphere/play`: full-screen page for the Phaser game, and how the game's build gets into the site's deploy.

## Phase 4 — Community & content

- [ ] **Mailing list signup** — Pick a provider and add signup to the site.
- [ ] **Devlog / news** — Simple content-driven blog for updates (markdown-based).
- [ ] **Free downloads / resources** — Hosting for PDFs, character sheets, quickstart rules, demo builds, plus the `/free` page that gathers them.
- [ ] **Social links & sharing** — Social profiles, Open Graph/Twitter card images.

## Phase 5 — Polish & launch

- [ ] **SEO & metadata** — Titles, descriptions, sitemap.xml, robots.txt, structured data.
- [ ] **Accessibility & performance pass** — Lighthouse audit, keyboard navigation, contrast, image optimization.
- [ ] **Dependency audit** — `npm audit` reports a moderate minimatch advisory pulled in by `@react-router/fs-routes` (no fix as of 2026-11-23; build-time only). Re-check and upgrade; also move to ESLint 10 / TypeScript 7 once the lint plugins support them.
- [ ] **Analytics** — Privacy-respecting analytics choice and setup.
- [ ] **Launch** — Final checks and announce.

## Decisions log

Record the outcome of each approved design here (date, item, decision) so later items build on it.

- 2026-11-19 — Starting over — None of the existing repo contents need to be kept. The site will be built with React.
- 2026-11-20 — Studio identity brief — Wrote `docs/brand.md`. Mission line: "We make games worth retelling." Name read as roll (dice) + bard (storyteller). Audience: TTRPG players/GMs first, indie video game players second, press third. Voice: warm and wry, plain over purple, confident not hype, defaults to "we". Studio-specific facts are left as TBDs (follow-up item added).
- 2026-11-20 — Fill brand brief TBDs — Solo studio that writes as "we". Name confirmed as roll + bard. Leaning: retro-inspired science-fantasy. Current projects: Terra Machina (tabletop RPG inspired by 32-bit JRPGs, in development) and SuperSphere (arcade browser/mobile game about a sci-fi prisoner escaping, in development). Distinct: "Mechanics first" and "Designed, then refined". Promises-to-players section dropped.
- 2026-11-20 — Site goals & sitemap — Wrote `docs/sitemap.md`. Goals in order: show the games, grow the mailing list, free downloads, devlog, link out to stores (no on-site checkout), press. Routes: `/`, `/games`, `/games/:slug`, `/games/supersphere/play`, `/devlog`, `/devlog/:slug`, `/free`, `/about`, `/press`, `/contact`, `/404`. Header: Games · Devlog · Free · About. SuperSphere will be built with Phaser + TypeScript and be playable on rollbard.com. Added Press kit and SuperSphere play page items.
- 2026-11-22 — Tech stack decision — Wrote `docs/stack.md`. Astro rejected. React Router v7 (framework mode, Vite) with prerendering to static HTML; TypeScript strict; Markdown content in `content/` parsed at build time (gray-matter + remark/rehype, Zod-validated front matter); plain CSS with design tokens + CSS Modules; npm (pnpm dropped); ESLint flat config + Prettier; hosted on Cloudflare with auto-deploy from `master`. rollbard.com stays registered at Hover with DNS moved to Cloudflare (follow-up item added).
- 2026-11-23 — Clean slate — Removed the Vue scaffold. Set up React Router **v8** (current major, replacing the v7 named in the stack decision; same framework mode) on Vite 8 with `ssr: false` + `prerender: true`, `flatRoutes()` file routing (routes with their own CSS use folders: `app/routes/<name>/route.tsx`), strict TypeScript 6.0, ESLint 9 flat config (React, hooks, jsx-a11y, Prettier), Prettier (printWidth 100), `.gitattributes` forcing LF. Placeholder tokens in `app/styles/tokens.css`. Placeholder home page ("We make games worth retelling. New site coming soon.") prerenders to `build/client/index.html`. `docs/stack.md` updated to match.
