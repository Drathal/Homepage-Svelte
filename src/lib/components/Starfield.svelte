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
  let stars: Array<Array<Star>> = [[], [], []];

  function init() {
    canvas = <HTMLCanvasElement>document.getElementById('starfield');
    ctx = canvas.getContext('2d');

    // Set the canvas dimensions to match the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight + 200;

    createStars();
    animateStars();
  }

  function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function createStars(): void {
    createStarLayer(120, 1, 1, 1, 1, '#1f2f3e', 0.5, 0);
    createStarLayer(80, 1, 2, 0.3, 0.8, '#282578', 1, 1);
    createStarLayer(40, 1, 2, 0.2, 1, '#866c44', 1.5, 2);
  }

  function createStarLayer(
    numOfStars: number,
    minRadius: number,
    maxRadius: number,
    minOpacity: number,
    maxOpacity: number,
    color: string,
    speed: number,
    layer: number
  ) {
    for (let i = 0; i < numOfStars; i++) {
      stars[layer].push({
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        radius: random(minRadius, maxRadius),
        opacity: random(minOpacity, maxOpacity),
        speed: speed,
        color: color
      });
    }
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
    const interval = setInterval(() => {
      requestAnimationFrame(animateStars);
    }, 50);
    return () => clearInterval(interval);
  });
</script>

<canvas id="starfield" />

<style lang="css">
  canvas {
    position: absolute;
    top: 0;
    left: 0;

    right: 0;
    z-index: -1;
  }

  test {
    color: #282578;
  }
</style>
