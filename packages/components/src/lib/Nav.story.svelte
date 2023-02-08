<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';

  import Nav from './Nav.svelte';

  const leftNavItems = [
    {
      name: 'home',
      path: '#home'
    }
  ];

  const rightNavItems = [
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
    },
    {
      name: 'external',
      path: 'http://example.com'
    }
  ];

  export let Hst: Hst;
</script>

<Hst.Story>
  <Nav {leftNavItems} {rightNavItems} currentRoute="#about" />
</Hst.Story>
