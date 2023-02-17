<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';

  import Section from './Section.svelte';

  export let Hst: Hst;
</script>

<Hst.Story>
  <Section>
    <h1>Section Title</h1>
  </Section>
</Hst.Story>
