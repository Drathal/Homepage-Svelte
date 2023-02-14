<script>
  import { page } from '$app/stores';
  import '../app.scss';

  import { Starfield, Nav, ScrollToTop, GitHubCorner } from '@drathal/components';

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

<header>
  <Nav {leftNavItems} {rightNavItems} currentRoute={$page.route.id || ''} />
</header>

<GitHubCorner />

<main>
  <Starfield />
  <slot />
</main>

<footer>
  {#if $page.route.id !== '/'}
    <a href="./">back</a>
  {/if}
</footer>
<ScrollToTop />

<style lang="scss">
  footer {
    height: 3em;
  }
</style>
