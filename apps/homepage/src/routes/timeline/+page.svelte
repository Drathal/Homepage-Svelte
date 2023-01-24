<script lang="ts">
  import Timeline from '$lib/components/Timeline.svelte';
  import vueform from '$lib/assets/projects/vue_form.png';
  import portfolio from '$lib/assets/projects/portfolio.png';
  import efsredesign from '$lib/assets/projects/efs_redesign.jpg';
  import adaptivesurvey from '$lib/assets/projects/adaptive_survey_questback.jpg';
  import aboutme from '$lib/assets/projects/about_me.jpg';
  import slime from '$lib/assets/projects/beslimed.jpg';
  import jobtro from '$lib/assets/projects/jobtro.jpg';

  const projects = [
    {
      name: 'Portfolio rewrite',
      subtitle: 'Portfolio Website in SveltKit',
      description: 'My Portfolio Page on Github. Still WIP, have to add more Projects and Content',
      year: '2023',
      image: portfolio,
      url: 'https://github.com/Drathal/Homepage-Svelte',
      tags: ['svelte', 'typescript', 'vercel', 'picocss', 'pnpm']
    },
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
    },
    {
      name: 'Html Presenter - Questback',
      subtitle: 'Markdown 2 Html Presentation in PHP',
      description:
        "I build a presentation Engine that converts markdown files to HTML Presentations. At this time i held many Techtalks and wanted something 'nice' to present my Slides.",
      year: '2011',
      image: aboutme,
      url: 'https://projects.markus-dethlefsen.dev/about_me/',
      tags: ['html', 'css', 'php', 'javascript', 'markdown']
    },
    {
      name: 'BeSlimed - MooTools Game',
      subtitle: 'Fun private Project',
      description:
        'Private Project to see if i can build a simple Game thats fast enough, without using Canvas',
      year: '2008',
      image: slime,
      url: 'https://projects.markus-dethlefsen.dev/beslimed/',
      tags: ['html', 'css', 'php', 'markdown']
    },
    {
      name: 'Canvas Demo - Globalpark',
      subtitle: '3D and 2D Canvas',
      description: 'A little Demo to learn more about Canvas Programming.',
      year: '2007',
      image: jobtro,
      url: 'https://projects.markus-dethlefsen.dev/jobtro/',
      tags: ['html', 'css', 'canvas', 'javascript']
    },
    {
      name: 'Globalpark / Questback',
      subtitle: 'Senior Software Developer',
      year: '2002'
    },
    {
      name: 'CPM-O',
      subtitle: 'Lotus Notes Entwickler',
      year: '2001'
    },
    {
      name: 'Via One GmbH',
      subtitle: 'PHP Entwickler',
      year: '2000'
    },
    {
      name: 'Druckerei Enger',
      subtitle: 'Satz Layout Druckvorstufe',
      year: '1999'
    },
    {
      name: 'Reemers EDV',
      subtitle: 'Buchsetzer',
      year: '1997'
    },
    {
      name: 'Reemers EDV',
      subtitle: 'Buchsetzer',
      year: '1997'
    },
    {
      name: 'CopyService',
      subtitle: 'Satz / Layout',
      year: '1994'
    }
  ];
</script>

<svelte:head>
  <title>Timeline</title>
</svelte:head>

<h2 class="name">Timeline</h2>

<Timeline {projects} />
