import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://todayonline.nl",
  trailingSlash: "ignore",
  build: { format: "directory" }
});
