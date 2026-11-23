# Rollbard Studios — Tech Stack

The tools rollbard.com is built with, and the reasons for each choice. The site's needs come from [`sitemap.md`](sitemap.md). It is mostly content pages, with a Markdown devlog, a few interactive pieces and a browser game. It has no accounts and no checkout.

## Summary

| Area | Choice |
|---|---|
| Framework | **React Router v7** (framework mode) on **Vite**, with **prerendering** |
| Language | **TypeScript**, strict mode |
| Routing | File-based routes in `app/routes/` |
| Content | Markdown in `content/` with front matter, parsed at build time |
| Styling | Plain CSS with custom-property design tokens + CSS Modules |
| Package manager | **npm** |
| Lint / format | ESLint (flat config) + Prettier |
| Hosting | **Cloudflare** static hosting, auto-deploy from `master` |
| Domain | Registered at **Hover**; DNS moves to Cloudflare |

## Framework: React Router v7 + prerender

- Fully React and built on Vite.
- With `prerender` set in `react-router.config.ts`, every route is built to static HTML. Search engines and share cards (Open Graph) see the full page. Once loaded, the page runs as a normal React app.
- Route loaders run at build time, so Markdown parsing never ships to visitors.
- The pages to prerender are listed from the content folders (each game and devlog slug).
- The build output is plain static files, so changing hosts later is easy.

**Rejected:** Astro (the owner chose not to use it), a Vite + React SPA without prerendering (weak SEO and share cards), and Next.js static export (more framework than a static site needs).

## Content

```
content/
  games/       one .md per game (front matter: title, slug, type, status, formats, store links, media)
  devlog/      one .md per post (front matter: title, date, summary, tags, cover)
  downloads/   one .md/.yaml entry per free download (title, game, file, kind)
```

- Front matter is parsed with `gray-matter` and checked with **Zod** schemas. A missing or invalid field fails the build.
- Markdown bodies are rendered to HTML with `unified` / `remark` / `rehype`.
- Download files (PDFs, sheets) are stored in `public/downloads/` until the Free downloads item decides on hosting.

## Styling

- `app/styles/tokens.css` defines colour, type, spacing and radius as CSS custom properties. Light and dark themes override the same tokens.
- Components use CSS Modules (`*.module.css`), so styles stay scoped.
- No CSS framework. Visual identity sets the actual token values.

## Tooling

- **npm** (Node 24 / npm 11). The old `.npmrc` and `pnpm-lock.yaml` are removed in Clean slate.
- **ESLint** flat config with `typescript-eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks` and `eslint-plugin-jsx-a11y`.
- **Prettier** for formatting.
- Scripts: `dev`, `build`, `preview`, `lint`, `format`, `typecheck`.

## Hosting & domain

- **Cloudflare** static hosting (Workers static assets / Pages) connected to the GitHub repo. Every push to `master` deploys to production, and other branches get preview URLs.
- Free tier, global CDN and no bandwidth cap. That matters once SuperSphere is served from the site.
- **rollbard.com stays registered at Hover.** Its nameservers will point to Cloudflare, so Cloudflare can serve the bare domain (`rollbard.com`). Hover can't point the bare domain at a CNAME. If Hover email or other services use the domain, copy their DNS records (MX, TXT) into Cloudflare before switching nameservers.

## SuperSphere

SuperSphere (Phaser + TypeScript) is built separately. Its static output will be served at `/games/supersphere/play` from the site's static files. The SuperSphere play page item decides how the build gets there: a copy step, a submodule, or a separate deploy.
