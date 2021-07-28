<template>
  <transition name="slide-fade">
    <div
      v-if="!loading"
      class="container relative z-1 mt-56">
      <div class="text-center">
        <h3>{{ profiles.name }}</h3>
      </div>
      <div class="social-links">
        <a
          v-for="(social, n) in profiles.socials_media"
          :key="n"
          :href="social.link"
          :title="social.name"
          @click.stop.prevent="goTo(social.link)">
          <svg-icon :icon-class="social.icon"/>
        </a>
      </div>
      <div class="copyright text-center">
        © 2021 Copyright <strong><span>MRSidik</span></strong>. All Rights Reserved
      </div>
      <div class="credits text-center">
        Designed by <a href="https://www.linkedin.com/in/rizki-khair-0b5a67186/">Rizki Khair</a>
      </div>
    </div>
  </transition>
</template>
<script>
export { default } from './main.controller'
</script>
<style lang="scss" scoped src="./main.style.scss"/>
