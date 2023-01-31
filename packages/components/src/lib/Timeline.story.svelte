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
    },
    {
      name: 'Title',
      subtitle: 'Subtitle',
      description: 'This is a description text',
      year: '2023'
    },
    {
      name: 'Title',
      subtitle: 'Subtitle',
      year: '2023'
    }
  ];
  export let Hst: Hst;
</script>

<Hst.Story>
  <Timeline {projects} />
  <div class="test">Test</div>
</Hst.Story>

<style lang="css">
  :global(:root) {
    --primary: #b94a2c;
    --secondary: #1e90ff;
    --ins-color: #015703;
    --color: #bdbdbd;
    --background-color: #090a0f;
    --form-element-border-color: #ff00ff;
  }
  .test {
    color: red;
    display: none;
  }
</style>
