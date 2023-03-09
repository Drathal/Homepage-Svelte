<script lang="ts">
  export let id = '';
  export let checked = false;
  export let label = '';
  export let name = '';
</script>

<div class="checkbox">
  <input type="checkbox" id="checkbox_{id}" {checked} {name} />
  <slot />
  <label for="checkbox_{id}">{label}</label>
  <button type="submit" />
</div>

<style lang="scss">
  .checkbox {
    position: relative;

    label {
      display: none;
    }

    button[type='submit'] {
      position: absolute;
      top: 0;
      left: 0;
      width: 1.3em;
      height: 1.4em;
      opacity: 1;
      overflow: hidden;
      padding: 0;
      margin: 0;
      border: none;
      background-color: transparent;
      color: transparent;
    }
  }
</style>
