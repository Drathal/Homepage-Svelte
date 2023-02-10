<script lang="ts">
  import Icon from './Icon.svelte';
  import NavLink from './NavLink.svelte';

  export let leftNavItems = [
    {
      name: 'home',
      path: '/'
    }
  ];

  export let rightNavItems: typeof leftNavItems = [];
  export let currentRoute: string;
</script>

<div class="navbar">
  <div class="container">
    <nav>
      {#if leftNavItems.length > 0}
        <ul>
          {#each leftNavItems as navItem}
            <li>
              <NavLink path={navItem.path} name={navItem.name} {currentRoute} />
            </li>
          {/each}
        </ul>
      {/if}

      {#if rightNavItems.length > 0}
        <ul>
          {#each rightNavItems as navItem}
            <li>
              <NavLink path={navItem.path} name={navItem.name} {currentRoute} />
            </li>
          {/each}
        </ul>
      {/if}
    </nav>
  </div>
</div>

<style lang="scss">
  .navbar {
    background-color: rgba(0, 0, 0, 0.3);
  }

  a {
    white-space: nowrap;
  }

  [role='button'][aria-current='page'] {
    border: none;
    background-color: var(--primary-focus);
    font-size: 1em;
  }
</style>
