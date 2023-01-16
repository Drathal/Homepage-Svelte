<script lang="ts">
  import Timeline from '$lib/components/Timeline.svelte';
  import vueform from '$lib/assets/projects/vue_form.png';
  import portfolio from '$lib/assets/projects/portfolio.png';

  const projects = [
    {
      name: 'Vue 3 Form',
      subtitle: 'Composition API',
      description: 'Learn Vue 3 and the Composition API by building a form',
      year: '2021',
      image: vueform,
      url: 'https://github.com/Drathal/formplayground-vue',
      tags: ['Vue', 'Typescript', 'Axios', 'Vite', 'Jest', 'testing-library/vue']
    },
    {
      name: 'Portfolio',
      subtitle: 'Portfolio Website in Next.js ',
      description:
        'My Portfolio Page on Github. This Project is... well still in progress :) At the moment you can just see old Stuff.',
      year: '2021',
      image: portfolio,
      url: 'https://github.com/Drathal/portfolio',
      tags: ['Next.js', 'typescript', 'netlify', 'react', 'react-markdown', 'material-ui']
    }
  ];
</script>

<svelte:head>
  <title>Timeline</title>
</svelte:head>

<h2 class="name">Timeline</h2>

<Timeline {projects} />
