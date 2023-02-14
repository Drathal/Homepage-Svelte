<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';

  import GitHubCorner from './GitHubCorner.svelte';

  export let Hst: Hst;
</script>

<Hst.Story>
  <GitHubCorner />
</Hst.Story>
