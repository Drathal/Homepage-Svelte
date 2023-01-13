<script>
  import '@picocss/pico/css/pico.classless.css';
  import '../global.css';
  import Nav from '../lib/components/Nav.svelte';
  import Starfield from '../lib/components/Starfield.svelte';
</script>

<header>
  <Nav />
</header>
<main><Starfield /><slot /></main>
<header />

<style lang="css">
</style>
