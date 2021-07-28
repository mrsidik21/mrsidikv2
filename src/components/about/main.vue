<template>
  <div
    :class="[
      'container relative z-1 fade-animate-bottom',
      { 'is-active': !loading }
    ]">
    <div class="section-title mt-56">
      <h2 id="titleAbout">{{ $t('label.about') }}</h2>
      <p>{{ $t('about.title_description') }}</p>
    </div>

    <div class="row">
      <div class="col max-w-320">
        <!--<img src="/static/img/Web Projek Photo Resume.jpg" class="img-fluids" />-->
      </div>
      <div class="col text-left">
        <h3>{{ $t('degree.name') }}</h3>
        <div class="flex mt-56">
          <ul>
            <li>
              <i class="icon">
                <svg-icon icon-class="right-arrow"/>
              </i>
              <span class="title capitalize">
                {{ $t('label.birthday') }}:
              </span>
              <span>
                {{ formatDate(profiles.about.birthday) }}
              </span>
            </li>
            <li>
              <i class="icon">
                <svg-icon icon-class="right-arrow"/>
              </i>
              <span class="title capitalize">
                {{ $t('label.city') }}:
              </span>
              <span>
                {{ profiles.about.city[language] }}
              </span>
            </li>
            <li>
              <i class="icon">
                <svg-icon icon-class="right-arrow"/>
              </i>
              <span class="title capitalize">
                {{ $t('label.age') }}:
              </span>
              <span>
                {{ countingMyAge() }}
              </span>
            </li>
            <li>
              <i class="icon">
                <svg-icon icon-class="right-arrow"/>
              </i>
              <span class="title capitalize">
                {{ $t('label.degree') }}:
              </span>
              <span>
                {{ profiles.about.degree[language] }}
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <i class="icon">
                <svg-icon icon-class="right-arrow"/>
              </i>
              <span class="title capitalize">
                {{ $t('label.weight') }}:
              </span>
              <span>
                {{ profiles.about.weight }}
              </span>
            </li>
            <li>
              <i class="icon">
                <svg-icon icon-class="right-arrow"/>
              </i>
              <span class="title capitalize">
                {{ $t('label.height') }}:
              </span>
              <span>
                {{ profiles.about.height }}
              </span>
            </li>
            <li>
              <i class="icon">
                <svg-icon icon-class="right-arrow"/>
              </i>
              <span class="title capitalize">
                {{ $t('label.marital') }}:
              </span>
              <span>
                {{ profiles.about.marital[language] }}
              </span>
            </li>
            <li>
              <i class="icon">
                <svg-icon icon-class="right-arrow"/>
              </i>
              <span class="title capitalize">
                {{ $t('label.gender') }}:
              </span>
              <span class="capitalize">
                {{ profiles.about.gender[language] }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export { default } from './main.controller'
</script>
<style lang="scss" scoped src="./main.style.scss"/>
