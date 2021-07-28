<template>
  <div
    :class="[
      'container relative z-1 fade-animate-bottom',
      { 'is-active': !loading }
    ]">
    <div class="section-title mb-56">
      <h2 :id="$t('label.portofolio')">{{ $t('label.portofolio') }}</h2>
    </div>

    <div class="row">
      <div class="col">
        <ul class="portofolio-filters">
          <li
            v-for="(filter, n) in profiles.filters"
            :key="n"
            :class="{'is-active': filter.active }"
            role="button"
            @click="handleFilter">
            {{ filter[language] }}
          </li>
        </ul>
      </div>
    </div>

    <transition-group name="fade" tag="div" class="row relative text-center">
      <template
        v-for="(portofolio, n) in portofolioFiltered">
        <div
          :key="'port' + n"
          :class="{ 'is-hidden': !portofolio.active }"
          class="col lg-3 portofolio my-8">
          <img :src="'/static/img/' + portofolio.img" class="img-fluid" alt="">
          <div class="portofolio-wrap">
            <div class="portofolio-info">
              <div class="portofolio-name">
                <h4> {{ portofolio.name }} </h4>
                <p class="my-8 font-sm">{{ portofolio.publisher }}</p>
                <a class="link-view" @click.stop.prevent="showDetail(portofolio)">
                  view
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </transition-group>
  </div>
</template>
<script>
export { default } from './main.controller'
</script>
<style lang="scss" scoped src="./main.style.scss"/>
