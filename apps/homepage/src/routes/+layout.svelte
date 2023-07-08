<script>
  import { page } from '$app/stores';
  import '../app.scss';

  import { Starfield, Nav, ScrollToTop } from '@drathal/components';

  const github = 'https://github.com/Drathal';

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
      name: 'blog',
      path: '/blog'
    },
    {
      name: 'timeline',
      path: '/timeline'
    },
    {
      name: 'imprint',
      path: '/imprint'
    }
  ];
</script>

<Starfield />

<header>
  <Nav {leftNavItems} {rightNavItems} currentRoute={$page.route.id} {github} />
</header>

<main>
  <slot />
</main>

<footer>
  {#if $page.route.id !== '/'}
    <a href="./">back</a>
  {/if}
</footer>

<ScrollToTop />
