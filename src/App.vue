<template>
  <div id="app">
    <navigation-top @show="showingMenu"/>

    <navigation-left :active="menuActive"/>

    <div
      id="content"
      :class="[
        { 'in-one': isOne }
      ]">
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
    </div>
  </div>
</template>

<script>
import NavigationTop from './components/navigation/navigation-top'
import NavigationLeft from './components/navigation/navigation-left'
export default {
  name: 'App',
  components: {
    NavigationTop,
    NavigationLeft
  },
  data() {
    return {
      menuActive: false,
      timer: null,
      loading: false
    }
  },
  computed: {
    isOne() {
      return this.$route.hash === '#hero' || this.$route.hash === ''
    },
    offsetTopSection() {
      return this.offsets
    }
  },
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
  destroyed() {
    document.querySelector('#content').removeEventListener('scroll', this.handleScroll)
  },
  async mounted() {
    document.querySelector('#content').addEventListener('scroll', this.handleScroll)
  },
  methods: {
    showingMenu(active) {
      this.menuActive = active
    },
    handleScroll() {
    },
    async showingGallery(data) {
      this.$refs.gallery.showingModal(data)
    }
  }
}
</script>
<style lang="scss" src="./assets/index.scss" />
