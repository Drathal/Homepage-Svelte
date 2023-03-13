<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import Typer from './Typer.svelte';

  export let Hst: Hst;
</script>

<Hst.Story>
  <Typer>Hi! <b>BOLD</b>./Type.svelte</Typer>
</Hst.Story>
