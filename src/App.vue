<template>
  <div id="app">
    <navigation-top @show="showingMenu"/>

    <navigation-left :active="menuActive"/>

    <div
      id="content"
      :class="[
        { 'in-one': isOne }
      ]">
      <router-view/>
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
      timer: null
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
    }
  }
}
</script>
<style lang="scss" src="./assets/index.scss" />
