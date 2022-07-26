import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://buigbportfolio.ddns.net",
  integrations: [
    react(),
    tailwind(),
    sitemap(),
    prefetch(),
  ],
});
