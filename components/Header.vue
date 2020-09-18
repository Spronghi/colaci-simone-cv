<template>
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io/">
            <b class="is-size-6">Made with Bulma</b>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" v-scroll-to="'#home'">
              Home
            </a>
            <a class="navbar-item" v-scroll-to="'#resumes'">
              Resumes
            </a>
            <a class="navbar-item" v-scroll-to="'#skills'">
              Skills
            </a>
            <span class="navbar-item">
              <a class="button is-light is-inverted" href="https://drive.google.com/uc?export=download&id=1A9L_wY4R4nz54S6JU2GgF6P6ygDICAnG" target="_blank" download>
                <span class="icon">
                  <i class="fa fa-address-card"></i>
                </span>
                <span>Download my CV</span>
              </a>
            </span>
            <span class="navbar-item">
              <a class="has-text-white" href="https://github.com/Spronghi">
                <span class="icon">
                  <i class="fab fa-lg fa-github"></i>
                </span>
              </a>
            </span>

            <span class="navbar-item">
              <a class="has-text-white" href="https://linkedin.com/in/simone-colaci">
                <span class="icon">
                  <i class="fab fa-lg fa-linkedin"></i>
                </span>
              </a>
            </span>

            <span class="navbar-item">
              <span class="has-text-white">
                <span class="icon">
                  <i class="fa fa-lg fa-envelope"></i>
                </span>
                <span class="email-text ml-2">sim.colaci@gmail.com</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    scrollTo: function(target) {
      const container = this.$el.querySelector(target);
      container.scrollTop = container.scrollHeight;
    }
  }
}
</script>
<style scoped>
.email-text {
  position: relative;
  bottom: 2px;
}
.hero.is-success a.navbar-item:hover {
  background-color: transparent;
}
</style>