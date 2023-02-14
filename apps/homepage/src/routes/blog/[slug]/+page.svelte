<script lang="ts">
  import { Section } from '@drathal/components';
  import 'prismjs/themes/prism-tomorrow.css';

  export let data: any;
</script>

<main>
  <Section>
    <svelte:component this={data.content} />
  </Section>
</main>
