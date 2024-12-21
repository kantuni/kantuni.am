import purgecss from "astro-purgecss"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss()],
})
