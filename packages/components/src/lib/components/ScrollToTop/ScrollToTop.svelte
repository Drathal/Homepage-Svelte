<script>
  import Icon from '../Icon/Icon.svelte';

  export let showOnPx = 150;
  let hidden = true;

  function goTop() {
    document.body.scrollIntoView();
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div
  class="back-to-top"
  on:click={goTop}
  role="button"
  class:hidden
  tabindex="0"
  on:keypress={goTop}
>
  <Icon name="arrowUp" />
</div>

<style>
  .back-to-top {
    opacity: 0.8;
    transition: opacity 0.5s, visibility 0.5s;
    position: fixed;
    z-index: 99;
    right: 20px;
    user-select: none;
    bottom: 20px;
    color: white;
    background-color: var(--primary);
    border-radius: 50%;
    font-size: 1.5em;
    padding: 0.25em 0.4em;
    line-height: 1;
  }

  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>
