<script lang="ts">
  import Icon from '../Icon/Icon.svelte';

  export let path: string = '';
  export let name: string;
  export let currentRoute: string | null | undefined = '';

  let title: string;
  $: title = name.startsWith('$')
    ? name.substring(1)
    : path.startsWith('http')
    ? `External Link to ${name}`
    : name;
</script>

<a
  href={path}
  target={path.startsWith('http') ? '_blank' : undefined}
  rel={path.startsWith('http') ? 'noopener noreferrer' : undefined}
  role={path === currentRoute ? 'button' : undefined}
  aria-current={path === currentRoute ? 'page' : undefined}
  {title}
>
  {#if name.startsWith('$')}
    <Icon name={name.substring(1)} />
  {:else}
    {name}
  {/if}
  {#if path.startsWith('http')}
    <Icon name="extern" />
  {/if}
</a>

<style lang="scss">
  a {
    white-space: nowrap;
  }

  [role='button'][aria-current='page'] {
    border: none;
    background-color: var(--primary-focus);
    font-size: 1em;
  }
</style>
