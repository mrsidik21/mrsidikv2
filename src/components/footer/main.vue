<template>
  <transition name="slide-fade">
    <div v-if="!loading" class="text mb-lg">
      <div class="text-center mt-lg mb-md">
        <h3 class="font-2lg">{{ profiles.name }}</h3>
      </div>
      <div class="social-links">
        <a
          v-for="(social, n) in profiles.socials_media"
          :key="n"
          :href="social.link"
          :title="social.name"
          @click.stop.prevent="goTo(social.link)">
          <svg-icon :name="social.icon"/>
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
