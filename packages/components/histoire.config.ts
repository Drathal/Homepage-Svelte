import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
  plugins: [HstSvelte()],
  storyIgnored: ['**/node_modules/**', '**/package/**', '**/.svelte-kit/**'],
  setupFile: './src/histoire-setup.ts'
});
