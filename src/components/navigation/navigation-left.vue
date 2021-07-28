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
        :href="menu.link"
        :class="[
          'menu-item',
          { 'is-active white': menu.link === menuActive }
        ]"
        @click.stop.prevent="changeMenu(menu.link)">
        <div class="icon font-2md">
          <svg-icon :name="menu.icon"/>
        </div>
        <div class="text capitalize font-2md">
          {{ $t('label.' + menu.label) }}
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export { default } from './navigation-left.controller.js'
</script>
<style lang="scss" scoped src="./navigation-left.style.scss"></style>
