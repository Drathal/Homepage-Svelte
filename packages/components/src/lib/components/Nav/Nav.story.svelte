<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';

  import Nav from './Nav.svelte';

  let leftNavItems = [
    {
      name: 'home',
      path: '#home'
    }
  ];

  let rightNavItems = [
    {
      name: 'about',
      path: '#about'
    },
    {
      name: 'timeline',
      path: '#timeline'
    },
    {
      name: 'impressum',
      path: '#impressum'
    }
  ];

  export let currentRoute: string = '#about';
  export let Hst: Hst;
</script>

<Hst.Story>
  <Nav {leftNavItems} {rightNavItems} {currentRoute} />

  <div class="spacer" />

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={currentRoute} title="currentRoute" />
    <Hst.Json bind:value={leftNavItems} title="leftNavItems" />
    <Hst.Json bind:value={rightNavItems} title="rightNavItems" />
  </svelte:fragment>
</Hst.Story>

<style lang="scss">
  .spacer {
    height: 100vh;
  }
</style>
