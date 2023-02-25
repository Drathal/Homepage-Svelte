<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import BlogCard from './BlogCard.svelte';

  let posts = [
    {
      slug: 'first-post',
      datePublished: '2021-01-01',
      dateUpdated: '2021-01-01',
      title: 'First post',
      description: 'This is my first post',
      published: true,
      tags: ['svelte', 'typescript']
    },
    {
      slug: 'second-post',
      datePublished: '2021-01-01',
      dateUpdated: '2021-01-01',
      title: 'Second post',
      description: 'This is my second post',
      published: true,
      tags: ['svelte', 'typescript']
    },
    {
      slug: 'third-post',
      datePublished: '2021-01-01',
      dateUpdated: '2021-01-01',
      title: 'Third post',
      description: 'This is my third post',
      published: true,
      tags: ['svelte', 'typescript']
    }
  ];

  export let Hst: Hst;
</script>

<Hst.Story>
  <div data-theme="dark"><BlogCard {posts} /></div>
</Hst.Story>

<style lang="scss">
  @use '../../theme/variables.scss' as *;

  div {
    --blog-thumb-image1: url(./blog-thumb2.webp);
    --blog-thumb-image2: url(./blog-thumb2.webp);
  }
</style>
