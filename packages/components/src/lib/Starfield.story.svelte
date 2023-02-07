<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import { isCollecting } from 'histoire/client';
  import { onMount } from 'svelte';
  // import Starfield from './Starfield.svelte';

  export let starsConfig = [
    {
      amount: 0.5,
      minRadius: 1,
      maxRadius: 1,
      minOpacity: 0.1,
      maxOpacity: 1,
      color: '#ff0000',
      speed: 0.5
    },
    {
      amount: 0.15,
      minRadius: 1,
      maxRadius: 2,
      minOpacity: 0.7,
      maxOpacity: 1,
      color: '#ff00ff',
      speed: 0.75
    },
    {
      amount: 0.05,
      minRadius: 1,
      maxRadius: 2,
      minOpacity: 0.6,
      maxOpacity: 1,
      color: '#0000ff',
      speed: 1
    }
  ];

  // Loading Component Dynamically because of Histoire dont know canvas on collecting stories
  let Starfield: any;
  onMount(async () => {
    if (isCollecting()) return;
    Starfield = (await import('./Starfield.svelte')).default;
  });

  export let Hst: Hst;
</script>

<Hst.Story>
  <svelte:component this={Starfield} {starsConfig} />
</Hst.Story>
