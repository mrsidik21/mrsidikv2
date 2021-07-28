<template>
  <div id="app">
    <navigation-top @show="showingMenu"/>

    <navigation-left :active="menuActive"/>

    <div class="content in-one">
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
      menuActive: false
    }
  },
  methods: {
    showingMenu(active) {
      console.log(document.getElementsByClassName('navigation-top'))
      this.menuActive = active
    }
  }
}
</script>
<style lang="scss" src="./assets/index.scss" />
