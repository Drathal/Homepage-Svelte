<script lang="ts">
  import { onMount } from 'svelte';

  let wrapperNode: HTMLElement;
  let clear: NodeJS.Timer;
  let line = 0;

  let textElements: Char[][] = [];

  type Char = {
    type: string;
    text: string;
    class: string;
  };

  function fadeIn(node: HTMLElement, { duration = animateDuration, index = 0 } = {}) {
    return {
      delay: index * charDelay,
      duration,
      css: (t: number) => `
        transform: rotateX(${90 - t * 90}deg) translateY(${-1 + t}em);
        opacity: ${t};
      `
    };
  }

  function fadeOut(node: HTMLElement, { duration = animateDuration, index = 0 } = {}) {
    return {
      delay: index * charDelay,
      duration,
      css: (t: number, tt: number) => `    
        transform:  translateY(${tt * 0.5}em) rotateX(${tt * -88}deg);
        opacity: ${t};
      `
    };
  }

  onMount(() => {
    if (!window || !wrapperNode) return;

    wrapperNode.style.display = 'none';

    for (let i = 0; i < wrapperNode.childNodes.length; i++) {
      if (wrapperNode.childNodes[i].nodeType == 1) {
        const lineNode = wrapperNode.childNodes[i] as HTMLElement;
        const lineElements: Char[] = [];
        for (var j = 0; j < lineNode.childNodes.length; j++) {
          const nodeType = lineNode.childNodes[j].nodeName;
          const text = lineNode.childNodes[j].textContent || '';
          const characters = text.split('');

          for (var k = 0; k < characters.length; k++) {
            lineElements.push({
              type: nodeType.replace('#', '').toLowerCase(),
              text: characters[k].replace(/\s/g, ' '),
              class: lineNode.className
            });
          }
        }

        textElements.push(lineElements);
      }
    }

    let maxLength = 0;
    for (let i = 0; i < textElements.length; i++) {
      if (textElements[i].length > maxLength) maxLength = textElements[i].length;
    }

    for (let i = 0; i < textElements.length; i++) {
      const lineElements = textElements[i];
      const diff = maxLength - lineElements.length;
      const left = Math.floor(diff / 2);
      const right = diff - left;

      for (let j = 0; j < left; j++) {
        lineElements.unshift({
          type: 'empty',
          text: ' ',
          class: ''
        });
      }

      for (let j = 0; j < right; j++) {
        lineElements.push({
          type: 'empty',
          text: ' ',
          class: ''
        });
      }
    }

    clear = setInterval(onInterval, duration);
    onInterval();

    return () => {
      clearInterval(clear);
    };
  });

  const onInterval = () => {
    line += 1;
    if (line >= textElements.length) line = 0;
  };

  export let duration = 4000;
  export let animateDuration = 500;
  export let charDelay = 50;
</script>

<div class="container">
  {#each textElements as chars, currentLine}
    <div class="line_container line_container{currentLine}">
      {#each chars as char, charIndex (charIndex)}
        <div class="text_wrapper {char.type}">
          {#if currentLine == line}
            <span class="char" in:fadeIn={{ index: charIndex }} out:fadeOut={{ index: charIndex }}>
              {char.text}
            </span>
          {/if}
          <span class="char_x">M</span>
        </div>
      {/each}
    </div>
  {/each}
</div>

<span class="original" bind:this={wrapperNode}>
  <slot />
</span>

<style lang="scss">
  .container {
    position: relative;
    perspective: 1000px;
    margin: 0;
    padding: 0;
  }
  .line_container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
  }

  .text_wrapper {
    display: inline-block;
    position: relative;
    margin: 0;
    padding: 0;
  }

  .char {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: inline-block;
  }

  .char_x {
    opacity: 0;
  }

  .original {
    display: none;
  }
</style>
