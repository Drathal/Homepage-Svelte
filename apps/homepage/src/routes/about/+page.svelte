<script lang="ts">
  import { Section } from '@drathal/components';

  const startDate: Date = new Date(1997, 2, 20);
  const ageInMilliseconds = Date.now() - startDate.getTime();
  const inYears = Math.round(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
</script>

<svelte:head>
  <title>About me</title>
</svelte:head>

<Section>
  <h1>About Me</h1>

  <p>
    I am a seasoned web engineer with a passion for creating beautiful and intuitive web
    experiences. With over <b>{inYears} years</b> of experience, I have developed a wide range of
    skills and expertise in web development, including proficiency in <b>JavaScript/Typescript</b>,
    <b>HTML</b>, <b>CSS</b>, <b>Node</b>, <b>Docker</b>, <b>Kubernetes</b>, and
    <b>microservices</b>.
  </p>
  <p>
    My strong background in <b>Typescript</b> development has allowed me to work with some of the
    most popular libraries and frameworks in the industry, such as <b>jQuery</b>, <b>jAngularJS</b>
    <b>React</b>, <b>Vue.js</b>and <b>Svelte</b>. I have also gained experience in using
    <b>CSS pre-processors</b> like <b>Less</b> and <b>Sass</b>, as well as frameworks like
    <b>Bootstrap</b> and <b>Tailwind</b>.
  </p>
  <p>
    I am dedicated to creating responsive and mobile-friendly web applications that look great on
    any device. My understanding of Microservices architecture and its principles helps me to create
    scalable and maintainable web applications. I am always eager to learn new technologies and stay
    up-to-date with the latest trends in web development, such as the latest javascript frameworks.
  </p>
  <p>
    In addition to my technical skills, I pride myself on my ability to communicate effectively and
    work collaboratively with clients and team members.
  </p>
</Section>
