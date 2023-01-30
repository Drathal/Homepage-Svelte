<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import Timeline from './Timeline.svelte';

  const projects = [
    {
      name: 'Title',
      subtitle: 'Subtitle',
      description: 'This is a description text',
      year: '2023',
      image: 'https://via.placeholder.com/728x700.png?text=Test',
      url: 'https://github.com/Drathal/Homepage-Svelte',
      tags: ['svelte', 'typescript', 'vercel', 'picocss', 'pnpm']
    }
  ];
  export let Hst: Hst;
</script>

<Hst.Story>
  <Timeline {projects} />
</Hst.Story>

<style lang="css">
  :root {
    --primary: #b94a2c;
    --secondary: #1e90ff;
    --ins-color: #015703;
    --color: #bdbdbd;
    --background-color: #090a0f;
    --form-element-border-color: #ff00ff;
  }
</style>
