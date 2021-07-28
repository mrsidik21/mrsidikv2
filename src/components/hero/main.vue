<template>
  <div class="flex flex-column justify-center hfit text">
    <h1 class="font-xl">
      {{ profiles.name }}
    </h1>

    <p class="font-lg">
      {{ wordOne }}
      <span class="primary ml-sm">{{ typer }}</span>
      <span
        :class="[
          'primary',
          'typed-cursor',
          { 'typed-cursor--blink': activeBlink }]">
          |
      </span>
    </p>

    <div class="my-lg">
      <a
        v-for="(social, n) in profiles.socials_media"
        :key="n"
        :href="social.link"
        class="font-lg"
        @click.stop.prevent="goTo(social.link)">
        <svg-icon :name="social.icon"/>
      </a>
    </div>
  </div>
</template>
<script>
export { default } from './main.controller'
</script>
<style lang="scss" scoped src="./main.style.scss"/>
