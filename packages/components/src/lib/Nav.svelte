<script lang="ts">
  export let leftNavItems = [
    {
      name: 'home',
      path: '/'
    }
  ];

  export let rightNavItems: typeof leftNavItems = [];
  export let currentRoute: string | null;
</script>

<div class="navbar">
  <div class="container">
    <nav>
      {#if leftNavItems.length > 0}
        <ul>
          {#each leftNavItems as navItem}
            <li>
              <a
                href={navItem.path}
                target={navItem.path.startsWith('http') ? '_blank' : undefined}
                rel={navItem.path.startsWith('http') ? 'noopener noreferrer' : undefined}
                role={navItem.path === currentRoute ? 'button' : undefined}
                >{navItem.name}
              </a>
            </li>
          {/each}
        </ul>
      {/if}

      {#if rightNavItems.length > 0}
        <ul>
          {#each rightNavItems as navItem}
            <li>
              <a
                href={navItem.path}
                target={navItem.path.startsWith('http') ? '_blank' : undefined}
                rel={navItem.path.startsWith('http') ? 'noopener noreferrer' : undefined}
                role={navItem.path === currentRoute ? 'button' : undefined}
                >{navItem.name}
              </a>
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
</style>
