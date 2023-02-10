<script>
  import { page } from '$app/stores';
  import '../app.scss';

  import { Starfield, Nav, ScrollToTop } from '@drathal/components';

  const leftNavItems = [
    {
      name: '$home',
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
      name: 'imprint',
      path: '/imprint'
    },
    {
      name: 'github',
      path: 'https://github.com/drathal'
    }
  ];
</script>

<header>
  <Nav {leftNavItems} {rightNavItems} currentRoute={$page.route.id || ''} />
</header>
<main>
  <Starfield />
  <slot />
</main>
<footer>
  {#if $page.route.id !== '/'}
    <a href="/">back</a>
  {/if}
</footer>
<ScrollToTop />
