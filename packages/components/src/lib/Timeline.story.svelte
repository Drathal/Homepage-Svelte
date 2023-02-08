<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import Timeline from './Timeline.svelte';

  const full = [
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
  const noimage = [
    {
      name: 'Title',
      subtitle: 'Subtitle',
      description: 'This is a description text',
      year: '2023'
    }
  ];
  const small = [
    {
      name: 'Title',
      subtitle: 'Subtitle',
      year: '2023'
    }
  ];
  export let Hst: Hst;
</script>

<div style="padding: 2em 0">
  <Hst.Story title="Timeline">
    <Hst.Variant title="full"><Timeline projects={full} /></Hst.Variant>
    <Hst.Variant title="no image"><Timeline projects={noimage} /></Hst.Variant>
    <Hst.Variant title="small"><Timeline projects={small} /></Hst.Variant>
  </Hst.Story>
</div>
