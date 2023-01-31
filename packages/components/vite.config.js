import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },

  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@use "./src/lib/variables.scss" as *;'
      }
    }
  }
};

export default config;
