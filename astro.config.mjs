// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://personal-portfolio-pink-alpha-31.vercel.app',

  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark:  'one-dark-pro',
      },
      wrap: true,
    },
  },

  integrations: [mdx()],

  vite: {
    plugins: [tailwindcss()]
  },
});