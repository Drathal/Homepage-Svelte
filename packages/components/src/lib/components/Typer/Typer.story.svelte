<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import { isCollecting } from 'histoire/client';
  import { onMount } from 'svelte';

  export let Hst: Hst;

  let Typer: any;
  onMount(async () => {
    if (isCollecting()) return;
    Typer = (await import('./Typer.svelte')).default;
  });
</script>

<Hst.Story>
  <svelte:component this={Typer}>Hi! <b>BOLD</b>./Type.svelte</svelte:component>
</Hst.Story>
