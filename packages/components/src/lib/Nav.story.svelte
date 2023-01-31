<script lang="ts">
  import './layout.scss';
  import type { Hst } from '@histoire/plugin-svelte';

  import Nav from './Nav.svelte';

  const leftNavItems = [
    {
      name: 'home',
      path: '/'
    }
  ];

  const rightNavItems = [
    {
      name: 'about',
      path: '/about'
    },
    {
      name: 'timeline',
      path: '/timeline'
    },
    {
      name: 'impressum',
      path: '/impressum'
    }
  ];

  export let Hst: Hst;
</script>

<Hst.Story>
  <Nav {leftNavItems} {rightNavItems} />
</Hst.Story>
