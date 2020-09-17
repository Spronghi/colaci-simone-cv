<template>
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
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
            <a class="navbar-item">
              Home
            </a>
            <a class="navbar-item">
              Skills
            </a>
            <a class="navbar-item">
              Resumes
            </a>
            <span class="navbar-item">
              <a class="button is-success is-inverted">
                <span class="icon">
                  <i class="fa fa-address-card"></i>
                </span>
                <span>Request my CV</span>
              </a>
            </span>
            <span class="navbar-item">
              <a class="has-text-white">
                <span class="icon">
                  <i class="fab fa-lg fa-github"></i>
                </span>
              </a>
            </span>

            <span class="navbar-item">
              <a class="has-text-white">
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
  name: 'Header'
}
</script>
<style scoped>
.email-text {
  position: relative;
  bottom: 2px;
}
</style>