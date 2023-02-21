<script lang="ts">
  import { page } from '$app/stores'
  import { Section } from '@drathal/components'
  import type { BlogPost } from '$lib/posts'

  export let data: { posts: BlogPost[] }
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

  {#each data.posts as post}
    <h4><a href="{$page.route.id || ''}/{post.slug}">{post.title}</a></h4>
  {/each}
</Section>
