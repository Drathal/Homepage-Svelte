<script>
  import '../app.scss';
</script>

<main>
  <aside>
    <h3>Menu</h3>

    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/nav">Nav</a>
      </li>
    </ul>
  </aside>
  <section><slot /></section>
</main>

<style lang="scss">
  aside {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    padding: 1rem;
    overflow-y: auto;
  }

  section {
    margin-left: 200px;
    padding: 0.5rem;
  }
</style>
