<template>
  <div>
    <sidik-loading :loading="loading" />

    <sidik-gallery ref="gallery" />

    <section id="hero"><sidik-hero /></section>
    <section id="about"><sidik-about /></section>
    <section id="resume"><sidik-resume /></section>
    <section id="portofolio"><sidik-portofolio @view="showingGallery"/></section>
    <section id="contact"><sidik-contact /></section>
    <footer>
      <sidik-footer/>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Home',
  watch: {
    $route: {
      handler(to) {
        let text = 'hero'
        if (to.hash) text = to.hash.replace('#', '')
        let defaultTop = document.getElementById(text).offsetTop
        if (text === 'hero') defaultTop = 0
        document.getElementById('content').scrollTo(0, defaultTop)
      }
    }
  },
  data() {
    return {
      loading: false,
      timer: null
    }
  },
  methods: {
    async showingGallery(data) {
      this.$refs.gallery.showingModal(data)
    }
  }
}
</script>
