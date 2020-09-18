<template>
<section class="hero" id="resumes" v-observe-visibility="visibilityChanged">
  <div class="hero-body columns is-vcentered">
    <div class="column is-half ml-5 is-size-5">
      Passionate in all aspect of Web Development, both frontend through to the backend, I am a hard worker who is extremely focused on delivery of products to the business both on time, and within cost. <br /><br />
      Possessing a strong interest in efficient algorithms and high-performance coding, able to work in Agile context, in love with SCRUM methodologies. <br /><br />
      I am keen to find a challenging development position in a dynamic company that will allow me to further develop my technical skills, with the possibility for advancement. <br />
    </div>
    <div class="column is-half">
      <Timeline />
    </div>
  </div>
</section>
  
</template>

<script>
import Timeline from '~/components/Timeline'
export default {
  name: 'Resumes',
  components: {
    Timeline
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      console.log(isVisible)
      console.log(entry)
    }
  }
}
</script>
<style scoped>
.image.is-250x250 {
    height: 250px;
    width: 250px;
}
</style>