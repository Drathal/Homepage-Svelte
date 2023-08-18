<script lang="ts">
  import { Icon, iconOptionsString } from '../../lib';
</script>

<svelte:head>
  <title>Icon</title>
</svelte:head>

<div>
  <h1>Icon</h1>

  {#each Object.keys(iconOptionsString) as name}
    <Icon name={iconOptionsString[name]} />
  {/each}
</div>
