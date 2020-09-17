<template>
  <div>
    <section class="hero is-success is-bold is-fullheight">
      <Header />
      <!-- <HeaderFixed /> -->
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
</style>