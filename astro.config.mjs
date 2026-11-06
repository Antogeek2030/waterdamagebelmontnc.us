import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://waterdamagerestorationbelmontnc.us',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
    }),
    mdx(),
  ],
  build: {
    format: 'directory',
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
