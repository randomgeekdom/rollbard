import type { Config } from "@react-router/dev/config";

export default {
  // Static site: no server at runtime. Every route is prerendered to HTML at build time.
  ssr: false,
  prerender: true,
} satisfies Config;
