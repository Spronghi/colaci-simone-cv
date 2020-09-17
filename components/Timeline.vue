<template>
  <div class="timeline is-centered">
    <header class="timeline-header">
      <span class="tag is-medium is-primary">2013</span>
    </header>
    
    <div v-for="(info, index) in infos" :key="index" class="timeline-item is-primary">
      <div v-if="info.src" class="timeline-marker is-primary is-image is-64x64">
        <img :src="info.src" />
      </div>
      <div v-else-if="info.icon" class="timeline-marker is-danger is-icon">
        <i class="fa" :class="info.icon"></i>
      </div>
      <div v-else class="timeline-marker is-primary"></div>

      <div class="timeline-content mx-2 pt-0">
        <p class="heading mb-0">{{ info.date }}</p>
        <p class="is-size-5">{{ info.title }}</p>
        <p class="is-size-7">{{ info.subtitle }}</p>
        <p v-if="info.company" class="is-size-7">Company: {{ info.company }}</p>
        <p class="is-size-7">{{ info.technologies }}</p>
      </div>
    </div>
    <header class="timeline-header">
      <span class="tag is-medium is-primary">Present</span>
    </header>
  </div>
</template>
<script>
export default {
  name: 'Timeline',
  data: () => ({
    infos: [
      {
        date: 'Sept. 2013 - Apr. 2018',
        title: 'Computer Science Bachelor\'s Degree',
        subtitle: 'University of Bari Aldo Moro',
        src: '/imgs/university.jpg',
      },
      {
        date: 'Sept. 2017 - Feb. 2018',
        title: 'Apprentice',
        src: '/imgs/hash.jpg',
        company: 'Hash',
        technologies: 'Java OSGi, MongoDB, Apache Camel, Maven',
      },
      {
        date: 'Oct. 2017 - Jun. 2018',
        title: 'Java Developer',
        company: 'Easy Marine',
        technologies: 'Java OSGi, Java Spring, Eclipse RCP, Hibernate e JavaFX, Maven',
        src: '/imgs/easy_marine.jpg',
      },
      {
        date: 'Jun. 2018 - Present',
        title: 'Full Stack Developer',
        company: 'Fincons Group',
        technologies: 'NodeJS, VueJS, NPM, Jest, Express, MongoDB, Docker and more..',
        src: '/imgs/fincons.jpg',
      },
    ]
  }),
}
</script>