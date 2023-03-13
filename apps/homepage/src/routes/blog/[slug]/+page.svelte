<script lang="ts">
  import { Section } from '@drathal/components';
  import type { BlogPost } from '$lib/posts';
  import 'prismjs/themes/prism-tomorrow.css';

  export let data: BlogPost;
</script>

<svelte:head>
  <title>Blog | {data.title}</title>
</svelte:head>

<main>
  <Section>
    <svelte:component this={data.content} />
  </Section>
</main>
