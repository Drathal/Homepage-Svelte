<script lang="ts">
  import Icon from '../Icon/Icon.svelte';

  export let path = '';
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
    border: none;
    white-space: nowrap;
    font-size: 1em;
    width: 100%;
    margin: 0rem;
    padding: 0.5rem 1rem;
    text-align: right;
  }

  [role='button'][aria-current='page'] {
    background-color: var(--primary-focus);
  }
</style>
