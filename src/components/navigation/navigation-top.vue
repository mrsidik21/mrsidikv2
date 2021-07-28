<template>
  <div class="navigation-top">
    <div class="navigation-language">
      <button class="pointer bg-none no-border font-lg" @click="showDropdown">
        <svg-icon :name="language"/>
      </button>

      <div
        :class="[
          'navigation-dropdown',
          { 'is-active': showMenuLang }
        ]">
        <a
          :class="[
            'navigation-dropdown-item',
            'text',
            { 'is-active': language === 'id' }
          ]"
          @click.stop.prevent="changeLang">
          <div class="icon font-lg">
            <svg-icon name="id"/>
          </div>
          Bahasa
        </a>
        <a
          :class="[
            'navigation-dropdown-item',
            'text',
            { 'is-active': language === 'en' }
          ]"
          @click.stop.prevent="changeLang">
          <div class="icon font-lg">
            <svg-icon name="en"/>
          </div>
          English
        </a>
      </div>
    </div>

    <div class="navigation-toggle">
      <button
        :class="[
          'bg-none font-lg hsm wsm',
          'border radius-xs',
          { 'text border-secondary': !showMenus },
          { 'primary border-primary circle': showMenus }
        ]"
        @click="showMenu">
        <svg-icon :name="showMenus ? 'close' : 'humburger'"/>
      </button>
    </div>
  </div>
</template>
<script>
export { default } from './navigation-top.controller.js'
</script>
<style lang="scss" scoped src="./navigation-top.style.scss"></style>
