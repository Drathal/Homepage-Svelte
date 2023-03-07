<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null | false;
  let width = 150;
  let height = 150;
  let stars: Star[][] = [];
  let show = false;
  let animates = false;
  let frame: number;
  let showHandler: NodeJS.Timer;

  export let starsConfig = [
    {
      amount: 0.5,
      minRadius: 1,
      maxRadius: 1,
      minOpacity: 0.1,
      maxOpacity: 1,
      color: '#153066',
      speed: 0.25
    },
    {
      amount: 0.15,
      minRadius: 1,
      maxRadius: 2,
      minOpacity: 0.7,
      maxOpacity: 1,
      color: '#14409f',
      speed: 0.3
    },
    {
      amount: 0.05,
      minRadius: 1,
      maxRadius: 2,
      minOpacity: 0.6,
      maxOpacity: 1,
      color: '#0d55f2',
      speed: 0.5
    }
  ];

  $: sizeStyle = `width: ${width}px; height: ${height}px; `;

  interface Star {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    speed: number;
    color: string;
  }

  const random = (min: number, max: number): number => Math.random() * (max - min) + min;

  const stopStarAnimation = () => {
    cancelAnimationFrame(frame);
    show = false;
  };

  const createStarLayer = (
    numOfStars: number,
    minRadius: number,
    maxRadius: number,
    minOpacity: number,
    maxOpacity: number,
    color: string,
    speed: number
  ) => {
    const line = [];
    for (let i = 0; i < Math.ceil(numOfStars); i++) {
      line.push({
        x: random(0, width),
        y: random(0, height),
        radius: random(minRadius, maxRadius),
        opacity: random(minOpacity, maxOpacity),
        speed,
        color
      });
    }
    stars.push(line);
  };

  const createStars = () => {
    stars = [];
    starsConfig.forEach((conf) => {
      createStarLayer(
        conf.amount * width,
        conf.minRadius,
        conf.maxRadius,
        conf.minOpacity,
        conf.maxOpacity,
        conf.color,
        conf.speed
      );
    });
  };

  const animateStars = (): void => {
    if (!ctx) return;
    frame = requestAnimationFrame(animateStars);
    ctx.clearRect(0, 0, width, height);

    for (let k = 0; k < stars.length; k++) {
      for (let i = 0; i < stars[k].length; i++) {
        const s = stars[k][i];

        ctx.globalAlpha = s.opacity;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fillStyle = s.color;
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1;

        s.x -= s.speed;

        if (s.x < 0) {
          s.x = width;
        }
      }
    }
  };

  const startStarAnimation = () => {
    ctx = canvas && canvas.getContext('2d');
    width = Math.ceil(window.innerWidth);
    height = Math.ceil(window.innerHeight);
    createStars();
    frame = requestAnimationFrame(animateStars);
    show = true;
  };

  const handleResize = () => {
    if (!show) return;
    if (animates) return;
    clearTimeout(showHandler);
    stopStarAnimation();
    showHandler = setTimeout(startStarAnimation, 1000);
  };

  const animationStart = () => {
    animates = true;
  };

  const animationEnd = () => {
    animates = false;
    if (show === false) {
      canvas.style.opacity = '0';
    } else {
      canvas.style.opacity = '1';
    }
  };

  onMount(() => {
    startStarAnimation();
    return () => cancelAnimationFrame(frame);
  });
</script>

<canvas
  bind:this={canvas}
  on:animationstart={animationStart}
  on:animationend={animationEnd}
  {width}
  {height}
  class={show === true ? 'show' : 'hide'}
  style={sizeStyle}
/>

<svelte:window on:resize|passive={handleResize} />

<style lang="scss">
  :global(body, html) {
    overflow-x: hidden;
  }
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    object-fit: cover;
  }

  .show {
    animation: show 0.5s ease-in-out;
  }

  .hide {
    animation: hide 0.5s ease-in-out;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
