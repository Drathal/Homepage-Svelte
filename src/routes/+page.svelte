<script lang="ts">
  import planet1 from '$lib/assets/about/planet1.png';
  import planet2 from '$lib/assets/about/planet2.png';
  import planet3 from '$lib/assets/about/planet3.png';

  import Starfield from '../lib/components/Starfield.svelte';
</script>

<Starfield />
<section>
  <div class="gradient">
    <img class="p1" src={planet1} alt="Planet" />
    <img class="p2" src={planet2} alt="Planet" />
    <img class="p3" src={planet3} alt="Planet" />
    <div class="content">
      <h1>Markus Dethlefsen</h1>
      <p>Learn, Unlearn, Relearn. Just keep moving...</p>
    </div>
  </div>
</section>

<style lang="css">
  section {
    margin: 0;
    padding: 0;
    background: transparent;
    box-shadow: none;
    /* border: 5px solid pink; */
  }

  .content {
    text-align: center;
    padding-top: 15em;
    /* border: 5px solid red; */
    margin: 0 auto;
    width: 30em;
  }

  .gradient {
    /*  border: 5px solid yellow; */
    position: relative;
    display: block;
    border-radius: 50%;
    width: 35em;
    height: 35em;
    background: transparent
      radial-gradient(
        circle,
        #121863 0%,
        #1f1d55ee 9%,

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

  h1 {
    padding: 0;
    margin: 0;
    color: #d2b07e;
  }

  img {
    position: absolute;
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
</style>
