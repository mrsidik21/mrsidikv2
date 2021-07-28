<template>
  <div
    :class="[
      'navigation-left',
      { 'is-active': showMenu }
    ]">
    <div class="menu">
      <a
        v-for="(menu, n) in menus"
        :key="n"
        class="menu-item">
        <div class="icon">
          {{ n }}
        </div>
        <div class="text">
          {{ menu.label }}
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export { default } from './navigation-left.controller.js'
</script>
<style lang="scss" scoped src="./navigation-left.style.scss"></style>
