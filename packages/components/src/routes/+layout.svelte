<script>
  import { page } from '$app/stores';
  import '../app.scss';
</script>

<!-- workaround to define head content from within a page -->
{#if $page.data.component}
  <header><svelte:component this={$page.data.component} {...$page.data.props} /></header>
{/if}

<main>
  <section>
    <aside>
      <h3>Menu</h3>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/nav">Nav</a>
        </li>
        <li>
          <a href="/icon">Icon</a>
        </li>
        <li>
          <a href="/effect">EffectRotate</a>
        </li>
      </ul>
    </aside>
    <slot />
  </section>
</main>

<style lang="scss">
  aside {
    width: 200px;
    padding: 1rem;
    padding: 0;
  }
  section {
    display: flex;
    flex-direction: row;
  }
</style>
