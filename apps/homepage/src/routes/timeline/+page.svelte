<script lang="ts">
  import Timeline from '$lib/components/Timeline.svelte';
  import vueform from '$lib/assets/projects/vue_form.png';
  import portfolio from '$lib/assets/projects/portfolio.png';
  import efsredesign from '$lib/assets/projects/efs_redesign.jpg';
  import adaptivesurvey from '$lib/assets/projects/adaptive_survey_questback.jpg';

  const projects = [
    {
      name: 'SMAVA',
      subtitle: 'Senior Fullstack Engineer',
      year: '2021',
      description: 'FFG FINANZCHECK bought by SMAVA'
    },
    {
      name: 'Vue 3 Form',
      subtitle: 'Composition API',
      description: 'Learn Vue 3 and the Composition API by building a form',
      year: '2021',
      image: vueform,
      url: 'https://github.com/Drathal/formplayground-vue',
      tags: ['vve', 'typescript', 'axios', 'vite', 'jest', 'testing-library/vue']
    },
    {
      name: 'Portfolio',
      subtitle: 'Portfolio Website in Next.js ',
      description:
        'My Portfolio Page on Github. This Project is... well still in progress :) At the moment you can just see old Stuff.',
      year: '2021',
      image: portfolio,
      url: 'https://github.com/Drathal/portfolio',
      tags: ['next.js', 'typescript', 'netlify', 'react', 'react-markdown', 'material-ui']
    },
    {
      name: 'FFG FINANZCHECK',
      subtitle: 'Senior Software Developer',
      year: '2019'
    },
    {
      name: 'Lokalportal',
      subtitle: 'Senior Software Developer',
      year: '2018'
    },
    {
      name: 'Stylelounge',
      subtitle: 'Senior Software Architect',
      year: '2017'
    },
    {
      name: 'Cleverbridge AG',
      subtitle: 'Senior System Engineer',
      year: '2014'
    },
    {
      name: 'EFS Redesign - Questback',
      subtitle: 'Pure CSS Redesign',
      description:
        'In the Days where Frontend was not a Big part of development, i often redesigned new Layouts by just replacing the CSS Part of an Application. Well ... good that this times are over :D',
      year: '2013',
      image: efsredesign,
      url: 'https://projects.markus-dethlefsen.dev/efs_redesign/',
      tags: ['html', 'css']
    },
    {
      name: '360 Feedback - Questback',
      subtitle: 'An adaptive Questionnaire with CSS only',
      description:
        'In this Project i build a responsive Layout for the Questback EFS System that adapts, all Question types, to all Screen sizes.',
      year: '2013',
      image: adaptivesurvey,
      url: 'https://projects.markus-dethlefsen.dev/adaptive_survey_questback/',
      tags: ['html', 'css']
    }
  ];
</script>

<svelte:head>
  <title>Timeline</title>
</svelte:head>

<h2 class="name">Timeline</h2>

<Timeline {projects} />
