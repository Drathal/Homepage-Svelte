<script lang="ts">
  import { page } from '$app/stores';
  import { Section } from '@drathal/components';
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

  {#each data.posts as post}
    <article>
      <header>
        <a href="{$page.route.id || ''}/{post.slug}">
          <h2>{post.title}</h2>
        </a>
      </header>

      <p>
        {post.description} &nbsp;&nbsp;
        {#each post.tags as tag}
          <span>{tag}</span>
        {/each}
      </p>
    </article>
  {/each}
</Section>

<style lang="scss">
  span {
    background-color: var(--ins-color);
    font-size: 0.9em;
    color: var(--primary-inverse);
    padding: 0.5em;
    border-radius: 0.6em;
    margin: 0.25em;
    display: inline-block;
    line-height: 0.6em;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  }

  header {
    background-size: cover;
    background-image: url('$lib/assets/blog/blog-thumb1.webp');
    height: 200px;
    display: flex;

    h2 {
      display: block;
      font-size: 1.5em;
      text-shadow: -1px -1px 1px #000, -1px 1px 1px #000, 1px -1px 1px #000, 1px 1px 1px #000,
        0 0 3px #000, 0 0 10px #000, 0 0 20px #000, 0 0 30px #000, 0 0 40px #000, 0 0 50px #000,
        0 0 70px #000, 0 0 100px #000, 0 0 200px #000;
    }
  }
  a {
    text-decoration: none;
  }

  p {
    margin-bottom: 0;
  }

  article {
    border-radius: 0.5em;
    overflow: hidden;
  }

  //    justify-content: right;
  //      flex: 0.5;
  // text-align: left;
  // font-size: 1.5em;
</style>
