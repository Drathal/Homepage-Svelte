<script>
  import { page } from '$app/stores';
  import '@picocss/pico/css/pico.classless.css';
  import '../lib/assets/picofix.css';
  import Nav from '../lib/components/Nav.svelte';
  import Fonts from '../lib/components/Fonts.svelte';
  import Starfield from '../lib/components/Starfield.svelte';
  import Gradient from '../lib/components/Gradient.svelte';
</script>

<header>
  <Nav />
</header>
<main>
  <Starfield />
  <Gradient />
  <Fonts />
  <slot />
</main>
<footer>
  {#if $page.route.id !== '/'}
    <a href="/">back</a>
  {/if}
</footer>
