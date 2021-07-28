<template>
  <transition name="fade">
    <div
      v-if="show"
      class="modal">
      <div class="modal-header">Portofolio Detail</div>
      <div class="modal-closer">
        <button @click="closingModal">
          <svg-icon name="close"/>
        </button>
      </div>

      <div class="modal-container" @click.self="closingModal">
        <div class="modal-content" @click.self="closingModal">
          <div
            v-if="isAnyToPrev"
            class="modal-trigger-slide prev"
            @click="prevSlide">
            <svg-icon name="right-arrow"/>
          </div>

          <div
            v-if="isAnyToNext"
            class="modal-trigger-slide next"
            @click="nextSlide">
            <svg-icon name="right-arrow"/>
          </div>

          <transition name="slide-fade">
            <div
              v-if="!loading"
              class="modal-content--main text-left">
              <div class="title">
                <h3>{{ detail.name }}</h3>
              </div>
              <img v-for="(photo, n) in detail.photos" :key="n" :src="'/img/' + photo">
            </div>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export { default } from './main.controller'
</script>
<style lang="scss" scoped src="./main.style.scss"/>
