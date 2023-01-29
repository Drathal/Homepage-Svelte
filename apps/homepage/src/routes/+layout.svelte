<script>
  import { page } from '$app/stores';
  import '@picocss/pico/css/pico.classless.css';
  import '../lib/assets/picofix.css';
  import '../lib/assets/global.css';
  import '../lib/assets/gradient.css';
  import Nav from '../lib/components/Nav.svelte';
  import { Starfield } from '@drathal/components';
</script>

<header>
  <Nav />
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
