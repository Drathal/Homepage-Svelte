<script lang="ts">
  import { page } from '$app/stores';
  import { Nav } from '../../lib';

  const leftNavItems = [
    {
      name: '$home',
      path: '/'
    }
  ];

  const rightNavItems = [
    {
      name: 'about',
      path: '/nav#1'
    },
    {
      name: 'blog',
      path: '/nav#1'
    },
    {
      name: 'nav',
      path: '/nav'
    },
    {
      name: 'imprint',
      path: '/nav#1'
    }
  ];
</script>

<svelte:head>
  <title>Navbar</title>
</svelte:head>

<section>
  <h1>Navbar</h1>

  <header>
    <Nav {leftNavItems} {rightNavItems} currentRoute={$page.route.id} github={'/nav'} />
  </header>
</section>
