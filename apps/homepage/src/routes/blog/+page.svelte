<script lang="ts">
  import { Section, BlogCard } from '@drathal/components';
  import { page } from '$app/stores';
  import type { BlogPost } from '$lib/posts';

  export let data: { posts: BlogPost[] };
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Section>
  <h1>Blog</h1>

  <p>
    I would like to share here some things that are interesting or i would like to remember or both
    of them 😊.
  </p>

  <div class="blog-list">
    <BlogCard posts={data.posts} routeID={$page.route.id} />
  </div>
</Section>

<style lang="scss">
  :root {
    --blog-thumb-image1: url($lib/assets/blog/blog-thumb1.webp);
    --blog-thumb-image2: url($lib/assets/blog/blog-thumb2.webp);
  }
</style>
