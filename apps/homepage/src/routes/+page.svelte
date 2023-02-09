<script lang="ts">
  import { Typer } from '@drathal/components';
  import planet1 from '$lib/assets/about/planet1.png';
  import planet2 from '$lib/assets/about/planet2.png';
  import planet3 from '$lib/assets/about/planet3.png';
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <div class="gradient">
    <img class="p1" src={planet1} alt="Planet" />
    <img class="p2" src={planet2} alt="Planet" />
    <img class="p3" src={planet3} alt="Planet" />
    <div class="content">
      <h1>Markus Dethlefsen</h1>
      <p><Typer>&nbsp;Learn, <b><u>Unlearn</u></b>, Relearn. Just keep moving...</Typer></p>
    </div>
  </div>
</section>

<style lang="css">
  section {
    margin: 0;
    padding: 0;
    background: transparent;
    box-shadow: none;
  }

  h1 {
    padding: 0;
    margin: 0;
    color: var(--primary);
    font-weight: 700;
    font-size: 2.5em;
    text-shadow: rgba(0, 0, 0, 0.75) 2.4px 2.4px 3.2px;
  }

  p {
    padding-top: 0.1 em;
    padding-left: 1.5em;
    color: var(--highlight-color);
    display: block;
    font-family: 'Courier New', Courier, monospace;
    text-shadow: rgba(0, 0, 0, 0.75) 2.4px 2.4px 3.2px;
    text-align: left;
  }

  .content {
    text-align: center;
    padding-top: 14em;
    margin: 0 auto;
    width: 30em;
  }

  .gradient {
    position: relative;
    margin: 0 auto;
    display: block;
    border-radius: 50%;
    width: 35em;
    height: 35em;

    background: transparent
      radial-gradient(
        circle,
        #143851 0%,
        #112c40 9%,

        transparent 30%,
        #36221c 30.1%,
        transparent 30.2%,

        transparent 31%,
        #36221c 31.1%,
        #36221c 31.19%,
        transparent 31.2%,

        transparent 32%,
        #36221c 32.2%,
        #36221c 32.3%,
        transparent 32.4%,

        transparent 33.5%,
        #36221c 33.6%,
        #36221c 33.8%,
        transparent 33.9%,

        transparent 35%,
        #36221c 35.1%,
        #36221c 35.3%,
        transparent 35.4%,

        transparent 36.6%,
        #36221c 36.7%,
        #36221c 37%,
        transparent 37.1%,

        transparent 38.5%,
        #36221c 38.6%,
        #36221c 39.1%,
        transparent 39.2%,

        transparent 40.5%,
        #b8905466 40.6%,
        #b8905466 41.3%,
        transparent 41.4%,

        transparent 45.5%,
        #b89054aa 45.6%,
        #b89054aa 46.2%,
        transparent 46.3%,

        transparent 48.5%,
        #b8905488 48.6%,
        #b8905488 49.2%,
        transparent 49.3%,

        transparent 51.5%,
        #63636344 51.6%,
        #63636344 52.2%,
        transparent 52.3%,

        transparent 55.5%,
        #b8905444 55.6%,
        #b8905444 56.2%,
        transparent 56.3%,

        transparent 70%
      );
  }

  img {
    position: absolute;
  }

  .p1,
  .p2,
  .p3 {
    animation: float 10s ease-in-out infinite;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 30px 4px;
  }

  .p1 {
    width: 7em;
    height: 7em;
  }

  .p2 {
    width: 5em;
    height: 5em;
  }

  .p3 {
    width: 9em;
    height: 9em;
  }

  @keyframes float {
    0% {
      transform: translate(3%, 0%) rotate(0deg);
    }
    25% {
      transform: translate(0%, 5%) rotate(2deg);
    }
    50% {
      transform: translate(-2%, 0%) rotate(0deg);
    }
    75% {
      transform: translate(0%, -5%) rotate(-2deg);
    }
    100% {
      transform: translate(3%, 0%) rotate(0deg);
    }
  }

  .p1 {
    top: 5em;
    left: 6em;
  }

  .p2 {
    top: 22em;
    left: 5em;
  }

  .p3 {
    top: 20em;
    left: 23em;
  }

  @media (max-width: 577px) {
    .gradient {
      max-width: 400px;
      font-size: 13px;
    }

    .content > p {
      max-width: 250px;
      margin: 0 auto;
    }

    .p3 {
      top: 20em;
      left: 21em;
    }
  }
</style>
