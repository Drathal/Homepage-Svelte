<script context="module">
  import pathsByName from './icons/pathList';
  export const iconOptions = Object.keys(pathsByName);
  export const directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
</script>

<script>
  export let name = 'extern';
  export let direction = 'n';

  $: paths = pathsByName[name] || [];
  $: rotation = directions.indexOf(direction) * 45;
</script>

<svg
  class="c"
  viewBox="0 0 24 24"
  fill-rule="evenodd"
  clip-rule="evenodd"
  style={`transform: rotate(${rotation}deg) translateY(-0.15em)`}
>
  {#each paths as path}
    <path d={path} />
  {/each}
</svg>

<style>
  .c {
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
