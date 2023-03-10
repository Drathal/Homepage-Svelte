import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $routes: path.resolve('./src/routes')
    }
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
};

export default defineConfig(config);
