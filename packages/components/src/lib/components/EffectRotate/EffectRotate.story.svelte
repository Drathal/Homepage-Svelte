<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import EffectRotate from './EffectRotate.svelte';

  export let Hst: Hst;
</script>

<Hst.Story>
  <p class="test">
    <EffectRotate duration={5000} delay={25} animateDuration={250}>
      <p class="p1">Learn, Unlearn, Relearn. Just keep moving...</p>
      <p class="p2">Fullstack Software Engineer and Computer N3rD</p>
      <p class="p3">I ♥ Typescript, React, Svelte and more ;D</p>
    </EffectRotate>
  </p>
</Hst.Story>

<style lang="scss">
  .p1 {
    color: #ff0;
  }

  .p2 {
    color: #f00;
  }

  .p3 {
    color: #00f;
  }

  p {
    font-size: 1.2rem;
    font-family: monospace;
    text-shadow: 2px 0 10px hsl(0 0% 0% / 20%);
  }

  .test {
    font-size: 1.2rem;
  }
</style>
