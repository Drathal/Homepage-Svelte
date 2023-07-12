<script lang="ts">
  import { EffectRotate } from '../../lib';
</script>

<svelte:head>
  <title>EffectRotate</title>
</svelte:head>

<div>
  <h1>EffectRotate</h1>

  <code>
    <EffectRotate>
      <div>before <strong>inside</strong> after</div>
      <div>aaaaaa before <strong>inside aaaaaaaa</strong> after aaaaaaa</div>
    </EffectRotate>
  </code>
</div>

<style lang="scss">
  div,
  code {
    width: 100%;
    background-color: transparent;
    overflow: visible !important;
  }

  code {
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }
</style>
