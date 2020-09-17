<template>
  <div class="my-4">
    <Resumes />
    <Skills />
  </div>
</template>

<script>
import Resumes from '~/components/Resumes'
import Skills from '~/components/Skills'

export default {
  components: {
    Resumes,
    Skills,
  },
  head: {
    script: [
      { src: 'https://kit.fontawesome.com/c1913ea72f.js' }
    ],
  }
}

</script>
