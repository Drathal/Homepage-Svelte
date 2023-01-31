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
</Hst.Story>
