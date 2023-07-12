<script lang="ts">
  import { EffectRotate } from '@drathal/components';
  import planet1 from '$lib/assets/about/planet1.png';
  import planet2 from '$lib/assets/about/planet2.png';
  import planet3 from '$lib/assets/about/planet3.png';
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <div class="bgWrapper">
    <div class="bgContainer">
      <div class="gradient">
        <img class="pl1" src={planet1} alt="Planet" />
        <img class="pl2" src={planet2} alt="Planet" />
        <img class="pl3" src={planet3} alt="Planet" />
      </div>
    </div>
  </div>
  <div class="content">
    <h1>Markus Dethlefsen</h1>
    <code>
      <EffectRotate>
        <div>
          <b>Learn</b>, <s>Unlearn</s>, <b>Relearn</b>. Just keep moving...
        </div>
        <div>My personal <b>Homepage</b></div>
        <div>Showing some of the Things i do.</div>
      </EffectRotate>
    </code>
  </div>
</section>

<style lang="scss">
  section {
    min-height: 40em;
    font-size: 16px;

    h1 {
      margin-bottom: 0 !important;
    }
    .content {
      margin: 15em auto;
      text-align: center;

      code {
        overflow: visible !important;
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 32em;
        background-color: transparent;
        color: #ccc;
        text-shadow: rgba(0, 0, 0, 0.75) 2.4px 2.4px 3.2px;

        font-size: 1.25rem;
        @media (max-width: 768px) {
          font-size: 1rem;
        }

        @media (max-width: 485px) {
          font-size: 0.85rem;
          max-width: 100%;
        }

        @media (max-width: 400px) {
          display: none;
        }
      }
    }

    .bgWrapper {
      position: relative;
      margin: 0;
      padding: 0;

      height: 1px;
      z-index: -1;

      .bgContainer {
        position: relative;
        width: 1px;
        margin: 0 auto;
      }
    }
  }

  .pl1 {
    position: absolute;
    top: 7em;
    left: 10em;
    width: 7em;
    height: 7em;
    animation: float1 10s ease-in-out infinite;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 30px 4px;
  }

  .pl2 {
    position: absolute;
    top: 23em;
    left: 7em;
    width: 5em;
    height: 5em;
    animation: float2 10s ease-in-out infinite;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 30px 4px;
  }

  .pl3 {
    position: absolute;
    top: 22em;
    left: 25em;
    width: 9em;
    height: 9em;
    animation: float3 10s ease-in-out infinite;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 30px 4px;
  }

  h1 {
    padding: 0;
    margin: 0;
    color: var(--primary);
    font-weight: 700;
    font-size: 2.5em;
    text-shadow: rgba(0, 0, 0, 0.75) 2.4px 2.4px 3.2px;
  }

  .gradient {
    position: absolute;
    top: 0;
    left: -20em;
    min-height: 40em;
    min-width: 40em;

    border-radius: 50%;
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

  @keyframes float1 {
    0% {
      transform: translate(0%, 3%) rotate(0deg);
    }
    25% {
      transform: translate(0%, 5%) rotate(-3deg);
    }
    50% {
      transform: translate(-3%, 0%) rotate(0deg);
    }
    75% {
      transform: translate(0%, -4%) rotate(-3deg);
    }
    100% {
      transform: translate(0%, 3%) rotate(0deg);
    }
  }

  @keyframes float2 {
    0% {
      transform: translate(3%, 0%) rotate(0deg);
    }
    25% {
      transform: translate(0%, 5%) rotate(-4deg);
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

  @keyframes float3 {
    0% {
      transform: translate(2%, 0%) rotate(0deg);
    }
    25% {
      transform: translate(1%, 5%) rotate(4deg);
    }
    50% {
      transform: translate(0%, -2%) rotate(0deg);
    }
    75% {
      transform: translate(1%, -2%) rotate(-3deg);
    }
    100% {
      transform: translate(2%, 0%) rotate(0deg);
    }
  }
</style>
