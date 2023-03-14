import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svelte.md'],
  preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] })],
  kit: {
    adapter: adapter({ precompress: true }),
    alias: {
      $components: 'src/lib/components'
    }
  }
};

export default config;
