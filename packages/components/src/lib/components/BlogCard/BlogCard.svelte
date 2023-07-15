<script lang="ts">
  interface BlogPost {
    slug: string | undefined;
    datePublished: string;
    dateUpdated: string;
    title: string;
    description: string;
    published: boolean;
    content?: unknown;
    tags: string[];
  }

  const evenOdd = (i: number) => (i % 2 ? `even` : `odd`);

  export let posts: BlogPost[] = [];
  export let routeID: string | null = '';
</script>

<div class="wrapper">
  {#each posts as post, i}
    <article>
      <header class={evenOdd(i)}>
        <a href="{routeID}/{post.slug}">
          <h2>{post.title}</h2>
        </a>
      </header>

      <p>
        {post.description} &nbsp;&nbsp;
      </p>

      <footer>
        {#each post.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </footer>
    </article>
  {/each}
</div>

<style lang="scss">
  @use '../../theme/variables.scss' as *;

  :root {
    --blog-thumb-image1: url(./blog-thumb1.webp);
    --blog-thumb-image2: url(./blog-thumb2.webp);
  }

  .wrapper {
    article {
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
      border-radius: 0.5em;
      overflow: hidden;

      header {
        background-size: cover;
        height: 200px;
        display: flex;

        &.even {
          background-image: var(--blog-thumb-image1);
        }

        &.odd {
          background-image: var(--blog-thumb-image2);
        }

        h2 {
          display: block;
          font-size: 1.5em;
          text-shadow:
            -1px -1px 1px #000,
            -1px 1px 1px #000,
            1px -1px 1px #000,
            1px 1px 1px #000,
            0 0 3px #000,
            0 0 10px #000,
            0 0 20px #000,
            0 0 30px #000,
            0 0 40px #000,
            0 0 50px #000,
            0 0 70px #000,
            0 0 100px #000,
            0 0 200px #000;
        }
      }
    }
  }

  @media (min-width: breakpoint('md')) {
    .wrapper {
      display: flex;
      align-items: left;
      justify-content: space-between;

      flex-wrap: wrap;
      gap: 2em;

      article {
        flex: 1 1 48%;
        margin: 0;

        display: block;
        height: 24em;
        position: relative;

        header {
          text-align: right;
          justify-content: right;

          h2 {
            font-size: 1.5em;
          }
        }

        footer {
          position: absolute;
          bottom: 2em;
          left: 0;
          right: 0;
          padding: 0.5em 1.5em;
          overflow: hidden;
        }

        &:last-child {
          max-width: 48.7%;
        }
      }
    }
  }

  @media (min-width: breakpoint('sm')) {
    .wrapper {
      article {
        &:last-child {
          max-width: none;
        }
      }
    }
  }

  a {
    text-decoration: none;
  }

  p {
    margin-bottom: 0;
  }

  .tag {
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
</style>
