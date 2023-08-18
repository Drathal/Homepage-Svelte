<script context="module" lang="ts">
  import { pathList, pathListOptions, directions, getDirectionDegree } from './icons/pathList';

  export const iconOptions = pathListOptions;
  export const iconDirections = directions;
</script>

<script lang="ts">
  import type { PathListKeys } from './icons/pathList';
  export let name: string = '';
  export let direction = 'n';

  $: rotation = getDirectionDegree(direction);
  $: typed_name = name as PathListKeys;
</script>

{#if name}
  <svg
    class="icon"
    viewBox="0 0 24 24"
    fill-rule="evenodd"
    clip-rule="evenodd"
    style={`transform: rotate(${rotation}deg) translateY(-0.15em)`}
  >
    {#each pathList[typed_name] as path}
      <path d={path} />
    {/each}
  </svg>
{/if}

<style lang="scss">
  .icon {
    width: 1em;
    height: 1em;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
    transition: all 0.3s ease-out;
    overflow: visible;
  }
</style>
