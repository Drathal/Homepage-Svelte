<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';

  import ScrollToTop from './ScrollToTop.svelte';

  export let Hst: Hst;
</script>

<Hst.Story>
  <h1>Content</h1>
  <div>please scroll down...</div>

  <ScrollToTop />
</Hst.Story>

<style>
  div {
    height: 2000px;
  }
</style>
