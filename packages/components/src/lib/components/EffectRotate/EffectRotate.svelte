<script lang="ts">
  import { onMount } from 'svelte';

  let wrapperNode: HTMLElement;
  let inputNodes: HTMLCollectionOf<HTMLParagraphElement>;
  let splitedTexts: string[][] = [];
  let classNames: string[] = [];
  let clear: NodeJS.Timer;
  let line = 0;

  function fadeIn(node: HTMLElement, { delay = 0, duration = animateDuration } = {}) {
    return {
      delay,
      duration,
      css: (t: number) => `
        transform: rotateX(${90 - t * 90}deg) translateY(${-1 + t}em);
        opacity: ${t};
      `
    };
  }

  function fadeOut(node: HTMLElement, { delay = 0, duration = animateDuration } = {}) {
    return {
      delay,
      duration,
      css: (t: number, tt: number) => `    
        transform:  translateY(${tt * 0.5}em) rotateX(${tt * -88}deg);
        opacity: ${t};
      `
    };
  }

  onMount(async () => {
    if (!window || !wrapperNode) return;

    inputNodes = wrapperNode.getElementsByTagName('p');
    const nodesArray = Array.from(inputNodes);

    nodesArray.forEach((node) => {
      const { className } = node;
      classNames = [...classNames, className];
      const text = node.textContent || '';
      const characters = text.split('');
      splitedTexts = [...splitedTexts, characters];
    });

    clear = setInterval(onInterval, duration);

    return () => {
      clearInterval(clear);
    };
  });

  const onInterval = () => {
    line += 1;
    if (line >= splitedTexts.length) line = 0;
  };

  export let duration = 4000;
  export let animateDuration = 500;
  export let delay = 50;
</script>

<span bind:this={wrapperNode} class="input">
  <slot />
</span>

{#if splitedTexts.length > 0}
  <div class="container {classNames[0]} ">
    &nbsp;
    {#each splitedTexts as chars, i (i)}
      {#if i === line}
        <div class="text_wrapper">
          <p class={classNames[i]}>
            {#each chars as char, ii (ii)}
              <span in:fadeIn={{ delay: delay * ii }} out:fadeOut={{ delay: delay * ii }}>
                {char}
              </span>
            {/each}
          </p>
        </div>
      {/if}
    {/each}
  </div>
{/if}

<style lang="scss">
  .input {
    display: none;
  }

  p {
    margin: 0;
    perspective: 1000px;

    span {
      display: inline-block;
      min-width: 0.5em;
    }
  }

  .container {
    position: relative;
    display: inline-block;
    overflow: hidden;
  }

  .text_wrapper {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
</style>
