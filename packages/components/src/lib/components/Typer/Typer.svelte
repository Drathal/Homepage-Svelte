<script lang="ts">
  import { onMount } from 'svelte';

  let node: HTMLElement;

  onMount(async () => {
    if (!node) return;
    const TypeIt = (await import('typeit')).default;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ti = new (TypeIt as any)(node, {
      speed: 100,
      loop: true,
      loopDelay: 1000,
      html: true
    });
    ti.go();

    return () => ti.destroy();
  });
</script>

<span bind:this={node}><slot /></span>
