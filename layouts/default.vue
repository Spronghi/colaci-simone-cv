<template>
  <div>
    <section class="hero is-success is-bold is-fullheight bg-img">
      <Header />
      <Presentation />
    </section>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/Header.vue'
import Presentation from '~/components/Presentation.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
    Presentation,
  }
}
</script>
<style  scoped>
.bg-img { 
    background-image: url(/wallpaper.png) !important;
    background-position: center center;
    background-repeat:  no-repeat;
    background-attachment: fixed;
    background-size:  cover;
    background-color: #999;
 }
</style>