import { copyFileSync } from "node:fs";

// Cloudflare serves 404.html (with a 404 status) for unknown URLs. The SPA fallback
// boots the app there, and the router then shows the "Page not found" screen.
copyFileSync("build/client/__spa-fallback.html", "build/client/404.html");
