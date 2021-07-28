<template>
  <div class="text-center text">
    <div class="section-title mb-xl">
      <h2 class="font-2lg text uppercase">{{ $t('label.contact') }}</h2>
      <div class="line-title" />
    </div>

    
    <div class="row flex-start justify-start flex-wrap">
      <div class="col lg-3">
        <div
          v-for="(contact, n) in profiles.contact"
          :key="n"
          class="row keep-flex justify-start align-items py-md">
          <div class="contact-icon">
            <a
              :href="contact.link"
              :oncontextmenu="contact.link === '' ? false : true"
              :title="contact.name[language]"
              @click.stop.prevent="goTo(contact)">
              <svg-icon :name="contact.icon"/>
            </a>
          </div>
          <div class="text-left">
            <h4 class="capitalize font-lg">
              {{ contact.name[language] }}
            </h4>
            <p class="font-md">
              {{ contact.desc[language] }}
            </p>
          </div>
        </div>
      </div>
      <div class="col flex-1 row keep-flex justify-center items-center">
        <div class="py-2md">
          <img src="/img/sidik about.jpeg" width="320" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export { default } from './main.controller'
</script>
<style lang="scss" scoped src="./main.style.scss"/>
