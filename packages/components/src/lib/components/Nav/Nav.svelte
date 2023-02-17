<script lang="ts">
  import { onMount } from 'svelte'

  import { clickOutside } from '../../actions/clickOutside'
  import Icon from '../Icon/Icon.svelte'
  import GitHubCorner from '../GitHubCorner/GitHubCorner.svelte'
  import NavLink from './NavLink.svelte'

  export let rightNavItems: typeof leftNavItems = []
  export let currentRoute: string | undefined | null = ''
  export let leftNavItems = [
    {
      name: '$home',
      path: ''
    }
  ]

  let showMobileMenu = false
  let isMobileSize = false

  let mobileRightNavItems = [
    ...rightNavItems,
    {
      name: 'gitHub',
      path: 'http://www.github.com/drathal'
    }
  ]

  const handleClickOutside = () => {
    showMobileMenu = false
  }

  const handleMobileIconClick = () => {
    showMobileMenu = !showMobileMenu
  }

  const matches = (query: string) => window.matchMedia(query).matches
  const handleResize = () => (isMobileSize = matches('(max-width: 767px)'))

  onMount(handleResize)
</script>

<svelte:window on:resize|passive={handleResize} />

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

      {#if !isMobileSize}
        {#if rightNavItems.length > 0}
          <ul>
            {#each rightNavItems as navItem}
              <li>
                <NavLink path={navItem.path} name={navItem.name} {currentRoute} />
              </li>
            {/each}
          </ul>
        {/if}
      {/if}
      {#if showMobileMenu && isMobileSize}
        <ul class="burger-menu">
          {#each mobileRightNavItems as navItem}
            <li>
              <NavLink path={navItem.path} name={navItem.name} {currentRoute} />
            </li>
          {/each}
        </ul>
      {/if}
      {#if isMobileSize}
        <ul class="burger-icon" use:clickOutside on:clickOutside={handleClickOutside}>
          <li
            on:click|preventDefault|stopPropagation={handleMobileIconClick}
            on:keydown={handleMobileIconClick}
          >
            <Icon name="burger" />
          </li>
        </ul>
      {/if}
    </nav>
  </div>
</div>

{#if !isMobileSize}
  <GitHubCorner />
{/if}

<style lang="scss">
  @use '../../theme/variables.scss' as *;

  .navbar {
    background-color: rgba(0, 0, 0, 0.3);

    .container {
      display: block;
      position: relative;
      overflow: inherit;
    }

    nav {
      position: relative;
      width: 100%;
    }

    ul.burger-menu {
      z-index: 1;

      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 3.5em;
      right: 0;
      background-color: rgba(0, 0, 0, 0.8);

      text-align: right;

      li {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        width: 100%;
        padding-left: 2em;
      }
    }
  }
</style>
