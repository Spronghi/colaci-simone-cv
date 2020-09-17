<template>
<section class="hero is-primary is-bold">
  <div class="hero-body">
    <div id="skills" class="mx-6 columns">
      <div class="column" v-for="(skill, index) in skills" :key="index">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img :src="skill.src">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ skill.title }}</p>
                <p class="subtitle is-6 mb-2">{{ skill.subtitle }}</p>
                <p class="subtitle is-7">{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Skills',
  data: () => ({
    skills: [
      {
        title: 'Node.js',
        subtitle: 'Advanced knowledge',
        src: '/imgs/node.png',
        description: 'The a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      },
      {
        title: 'Vuejs',
        subtitle: 'Advanced knowledge',
        src: '/imgs/vue.png',
        description: 'The Progressive JavaScript Framework.',
      },
      {
        title: 'npm',
        subtitle: 'Advanced knowledge',
        src: '/imgs/npm.jpg',
        description: 'The node package manager.',
      },
      {
        title: 'Angular',
        subtitle: 'Good knowledge',
        src: '/imgs/angular.png',
        description: 'One framework. Mobile & desktop.',
      },
      {
        title: 'Vuetify',
        subtitle: 'Advanced knowledge',
        src: '/imgs/vuetify.png',
        description: 'The Vue Material Design component framework',
      },
    ]
  })
}
</script>
<style scoped>
.card {
  border-radius: 10px;
}

.card .title, .card .subtitle {
  color: #4a4a4a
}
</style>