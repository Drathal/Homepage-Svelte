<script>
  import { page } from '$app/stores';
  import '../app.scss';
</script>

<main>
  <slot />
</main>

<footer>
  {#if $page.route.id !== '/'}
    <a href="./">back</a>
  {/if}
</footer>
