<script>
  import { page } from '$app/stores';
  import '../app.scss';
</script>

<header>header</header>

<main>
  <slot />
</main>

<footer>
  {#if $page.route.id !== '/'}
    <a href="./">back</a>
  {/if}
</footer>
