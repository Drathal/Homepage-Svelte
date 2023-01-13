<script>
  import '@picocss/pico/css/pico.classless.css';
  import '../global.css';
  import Nav from '../lib/components/Nav.svelte';
</script>

<header>
  <Nav />
</header>
<main><slot /></main>
<header />
