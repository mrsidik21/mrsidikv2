<template>
  <div>
    A
  </div>
  <!--
  <div
    :class="[
      'container fade-animate',
      { 'is-active': !loading }
    ]">
    <h1 :id="idElement">
      {{ profiles.name }}
    </h1>
    <p>
      {{ wordOne }}
      <span>{{ typer }}</span><span
      :class="['typed-cursor', { 'typed-cursor--blink': activeBlink }]">|</span>
    </p>

    <div class="social-media relative z-1">
      <a
        v-for="(social, n) in profiles.socials_media"
        :key="n"
        :href="social.link"
        @click.stop.prevent="goTo(social.link)">
        <svg-icon :name="social.icon"/>
      </a>
    </div>
  </div>
  -->
</template>
<script>
export { default } from './main.controller'
</script>
<style lang="scss" scoped src="./main.style.scss"/>
