<script lang="ts">
  export let leftNavItems = [
    {
      name: 'home',
      path: '/'
    }
  ];

  export let rightNavItems: typeof leftNavItems = [];
</script>

<div class="navbar">
  <div class="container">
    <nav>
      {#if leftNavItems.length > 0}
        <ul>
          {#each leftNavItems as navItem}
            <li><a href={navItem.path}>{navItem.name}</a></li>
          {/each}
        </ul>
      {/if}

      {#if rightNavItems.length > 0}
        <ul>
          {#each rightNavItems as navItem}
            <li>
              {#if navItem.path.startsWith('http')}
                <a href={navItem.path} target="_blank" rel="noopener noreferrer">{navItem.name}</a>
              {:else}
                <a href={navItem.path}>{navItem.name}</a>
              {/if}
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
