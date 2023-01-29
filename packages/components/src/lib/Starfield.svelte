<script lang="ts">
  import { onMount } from 'svelte';

  interface Star {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    speed: number;
    color: string;
  }

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null;
  let stars: Star[][] = [];
  export let weight = [0.2, 0.1, 0.03];

  function debounce<F extends (...args: any[]) => void>(func: F, wait: number): F {
    let timeout: any;
    return <F>function (this: any, ...args: any[]) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  function init() {
    if (!ctx) {
      canvas = <HTMLCanvasElement>document.getElementById('starfield');
      ctx = canvas.getContext('2d');
      canvas.style.opacity = '0';
    }

    canvas.style.opacity = '0';
    setTimeout(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);

      createStars();
      animateStars();

      setTimeout(() => {
        canvas.style.opacity = '1';
      }, 300);
    }, 300);
  }

  let debouncedInit = debounce(init, 250);

  function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function createStars(): void {
    stars = [];
    createStarLayer(canvas.width * weight[0], 1, 1, 1, 1, '#1f2f3e', 0.5);
    createStarLayer(canvas.width * weight[1], 1, 2, 0.3, 0.8, '#282578', 1);
    createStarLayer(canvas.width * weight[2], 1, 2, 0.2, 1, '#866c44', 1.5);
  }

  function createStarLayer(
    numOfStars: number,
    minRadius: number,
    maxRadius: number,
    minOpacity: number,
    maxOpacity: number,
    color: string,
    speed: number
  ) {
    const line = [];
    for (let i = 0; i < numOfStars; i++) {
      line.push({
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        radius: random(minRadius, maxRadius),
        opacity: random(minOpacity, maxOpacity),
        speed: speed,
        color: color
      });
    }
    stars.push(line);
  }

  function animateStars(): void {
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let k = 0; k < stars.length; k++) {
      for (let i = 0; i < stars[k].length; i++) {
        let s = stars[k][i];

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fillStyle = s.color;
        ctx.fill();

        s.x -= s.speed;

        if (s.x < 0) {
          s.x = canvas.width;
        }
      }
    }
  }

  onMount(() => {
    init();

    window.addEventListener('resize', debouncedInit);

    const interval = setInterval(() => {
      requestAnimationFrame(animateStars);
    }, 50);
    return () => {
      window.removeEventListener('resize', debouncedInit);
      clearInterval(interval);
    };
  });
</script>

<canvas id="starfield" />

<style lang="css">
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    object-fit: cover;
    transition: opacity 0.25s;
  }

  :global(body, html) {
    overflow-x: hidden;
  }
</style>
