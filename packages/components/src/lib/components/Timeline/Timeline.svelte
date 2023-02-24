<script lang="ts">
  import Icon from '../Icon/Icon.svelte';
  interface project {
    name: string;
    subtitle: string;
    description?: string;
    url?: string;
    tags?: string[];
    year: string;
    image?: string;
  }

  $: cssVarStyles = Object.entries(colors)
    .map(([key, value]) => `--${key}:${value}`)
    .join(';');

  type projects = project[];

  export let colors = {};
  export let projects: projects = [];
</script>

<ul style={cssVarStyles}>
  {#each projects as project}
    <li>
      <article>
        <p class="year">{project.year}</p>
        {#if project.url}
          <a target="_blank" rel="noopener noreferrer" href={project.url}>
            <h3>{project.name}</h3>
            <h4>{project.subtitle}</h4>
            {#if project.description}
              <p>{project.description}</p>
            {/if}
          </a>
        {:else}
          <h3>{project.name}</h3>
          <h4>{project.subtitle}</h4>
          {#if project.description}
            <p>{project.description}</p>
          {/if}
        {/if}
        <p class="tags">
          {#if project.tags}
            {#each project.tags as tag}
              <span>{tag}</span>
            {/each}
          {/if}
        </p>
      </article>
      <div class="divider">
        <span class="icon">
          <Icon name="disc" />
        </span>
        <span class="connector" />
      </div>
      {#if project.image}
        <figure class="image">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt="project thumbnail" />
          </a>
        </figure>
      {:else}
        <div class="noimage" />
      {/if}
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    padding: 0 0.8rem 0 0;
    margin: 0;
    perspective: 500em;

    h3 {
      color: var(--primary);
      margin: 0;
      padding: 0;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
    }

    h4 {
      color: var(--secondary);
      font-size: 1em;
      margin: 0;
      padding: 0;
    }

    p {
      color: var(--color);
      margin: 2em 0;

      &.year {
        font-size: 0.8em;
        margin: 0.5em 0;
        color: var(--primary-inverse);
      }
    }

    li {
      list-style-image: initial;
      position: relative;
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      text-align: right;
      transition: transform 0.3s ease-in-out;
      transform: perspective(1200px) rotateY(0);

      &:hover {
        transform: perspective(1200px) rotateY(20deg);
      }

      &:nth-child(even):hover {
        transform: perspective(1200px) rotateY(20deg);
      }

      &:nth-child(even) {
        flex-direction: row-reverse;
        text-align: left;
      }
    }

    article {
      flex: 1;
      min-height: 9em;
      margin: 0 0 2em 0;
      padding: 0;
      background-color: transparent;
      box-shadow: none;

      a {
        text-decoration: none;
        cursor: pointer;
        --color: var(--color);
        color: var(--color);

        & > p {
          color: var(--color);
        }
      }
    }

    .divider {
      flex: 0;
      min-height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 0 1em;

      .icon {
        background-color: var(--highlight-color);
        color: var(--primary-inverse);
        flex: 0;
        margin: 0;
        padding: 0.2em 0.2em 0.1em 0.2em;
        border-radius: 50%;
        font-size: 23px;
        line-height: 1em;
      }

      .connector {
        width: 2px;
        flex-grow: 1;
        background-color: var(--form-element-border-color);
        display: block;
        flex: 1;
        margin: 0.5em 0;
        opacity: 0.5;
      }
    }

    .image {
      flex: 1;
      margin: 1em 0 2em 0;
      max-height: 13em;
      overflow: hidden;
      display: flex;
      border: 1px solid var(--form-element-border-color);
      border-radius: 0.5em;
      background-color: rgba(0, 0, 0, 0.2);
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.7);

      a {
        flex: 1;
        display: block;
        overflow: hidden;
        margin: 0.25em;
        border-radius: 0.25em;

        img {
          display: block;
          width: 100%;
        }
      }
    }

    .noimage {
      flex: 1;
    }

    .tags span {
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
  }

  @media (max-width: 768px) {
    figure.image {
      max-height: 9em;
    }
  }
  @media (max-width: 577px) {
    div.divider {
      display: none;
    }

    ul li {
      flex-direction: column-reverse !important;
      margin-bottom: 2em;
      text-align: left;
    }

    ul li:hover {
      transform: perspective(0) rotateY(0);
    }

    ul li:nth-child(even):hover {
      transform: perspective(0) rotateY(0);
    }

    figure.image {
      max-height: 14em;
    }
  }
</style>
