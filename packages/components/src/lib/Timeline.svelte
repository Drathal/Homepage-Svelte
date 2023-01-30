<script lang="ts">
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

  export let colors = {
    // primary: '#f4ed2a',
    // secondary: '#FF5555',
    // color: '#AAAAAA',
    // 'background-color': '#ff00ff',
    // 'ins-color': '#00ffff'
  };
  export let projects: projects = [];
</script>

<ul class="timeline" style={cssVarStyles}>
  {#each projects as project}
    <li>
      <div class="article">
        <p class="year">{project.year}</p>
        {#if project.url}
          <a target="_blank" rel="noopener noreferrer" href={project.url}>
            <h3>{project.name}</h3>
            <h4>{project.subtitle}</h4>
            {#if project.description}
              <p class="description">{project.description}</p>
            {/if}
          </a>
        {:else}
          <h3>{project.name}</h3>
          <h4>{project.subtitle}</h4>
          {#if project.description}
            <p class="description">{project.description}</p>
          {/if}
        {/if}
        <p class="tags">
          {#if project.tags}
            {#each project.tags as tag}
              <span>{tag}</span>
            {/each}
          {/if}
        </p>
      </div>
      <div class="divider">
        <span class="icon">
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"
            ><path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
            /></svg
          >
        </span>
        <span class="connector" />
      </div>
      {#if project.image}
        <div class="image">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt="project thumbnail" />
          </a>
        </div>
      {:else}
        <div class="noimage" />
      {/if}
    </li>
  {/each}
</ul>

<style lang="css">
  .timeline .article a p {
    color: var(--color);
  }

  .timeline .article a {
    text-decoration: none;
    cursor: pointer;
  }

  .timeline {
    padding: 0;
    margin: 0;
    perspective: 500em;
  }

  .timeline > li {
    list-style-image: initial;
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    text-align: right;

    transition: transform 0.3s ease-in-out;
    transform: perspective(1200px) rotateY(0);
  }

  .timeline > li:hover {
    transform: perspective(1200px) rotateY(20deg);
  }

  .timeline > li:nth-child(even):hover {
    transform: perspective(1200px) rotateY(20deg);
  }

  .timeline > li:nth-child(even) {
    flex-direction: row-reverse;
    text-align: left;
  }

  .article {
    flex: 1;
    min-height: 9em;
    margin: 0 0 2em 0;
  }

  .divider {
    flex: 0;

    min-height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 1em;
  }

  .divider .icon {
    background-color: var(--primary);
    display: block;
    border-radius: 50%;
    flex: 0;
    width: 100%;
    height: 1.7em;
    width: 1.7em;
  }

  .divider .icon svg {
    margin: 0.2em;
  }

  .divider .connector {
    width: 2px;
    flex-grow: 1;
    background-color: var(--form-element-border-color);
    display: block;
    flex: 1;
    margin: 0.5em 0;
    opacity: 0.5;
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
  }

  .noimage {
    flex: 1;
  }

  .image a {
    flex: 1;
    display: block;
    overflow: hidden;
    margin: 0.25em;
    border-radius: 0.25em;
  }

  .image a img {
    display: block;
    width: 100%;
  }

  .article .year {
    font-size: 0.8em;
    color: #bdbdbd;
    margin: 0.5em 0;
  }

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

  .description {
    margin: 2em 0;
  }

  .tags span {
    background-color: var(--ins-color);
    font-size: 0.9em;
    color: white;
    padding: 0.5em;
    border-radius: 0.6em;
    margin: 0.25em;
    display: inline-block;
    line-height: 0.6em;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 577px) {
    .divider {
      display: none;
    }

    .timeline li {
      flex-direction: column-reverse !important;
      margin-bottom: 2em;
      text-align: left;
    }

    .timeline > li:hover {
      transform: perspective(0) rotateY(0);
    }

    .timeline > li:nth-child(even):hover {
      transform: perspective(0) rotateY(0);
    }
  }

  @media (max-width: 768px) {
    .image {
      max-height: 10em;
    }
  }
</style>
