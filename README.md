# rollbard.com

The website of **Rollbard Studios**: tabletop RPGs and video games.

Built with React Router (framework mode) on Vite, prerendered to static HTML. See [`docs/`](docs/) for the brand brief, sitemap and tech stack, and [`TODO.md`](TODO.md) for the work list.

## Requirements

Node 24 and npm.

## Scripts

| Command                | What it does                                         |
| ---------------------- | ---------------------------------------------------- |
| `npm install`          | Install dependencies                                 |
| `npm run dev`          | Start the dev server with hot reload                 |
| `npm run build`        | Build the static site into `build/client`            |
| `npm run preview`      | Serve `build/client` locally, as it will be hosted   |
| `npm run lint`         | Run ESLint                                           |
| `npm run format`       | Format all files with Prettier                       |
| `npm run format:check` | Check formatting without changing files              |
| `npm run typecheck`    | Generate route types and run the TypeScript compiler |
| `npm run ci`           | All checks, then a build (what the deploy runs)      |

## Deployment

Cloudflare Workers Builds is connected to this repo. Every push to `master` runs `npm run ci` then `npx wrangler deploy`; if a check fails, nothing is published. Other branches get preview URLs through `npx wrangler versions upload`. Hosting settings are in `wrangler.jsonc`, response headers in `public/_headers`.
