<template>
  <transition name="fade">
    <div
      v-if="loading"
      class="loading">
      <div class="lds-ellipsis">
        <div v-for="n in 4" :key="n" />
      </div>
    </div>
  </transition>
</template>
<script>
export { default } from './main.controller'
</script>
<style lang="scss" scoped src="./main.style.scss"/>
