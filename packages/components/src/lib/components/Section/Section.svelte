<script lang="ts">
</script>

<div class="section_wrapper">
  <section>
    <slot />
  </section>
</div>

<style lang="scss">
  section::after {
    content: '';
    display: block;
    position: absolute;
    top: 2.1em;
    left: -40%;
    width: 90%;
    height: 2px;
    z-index: -1;
    background-image: linear-gradient(90deg, var(--primary), #c471ed, var(--highlight-color));
    transform: skewY(0deg);
  }

  section {
    position: relative;
    transition: ease all 0.5s;
  }
</style>
