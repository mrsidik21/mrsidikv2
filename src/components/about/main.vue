<template>
  <div class="text-center">
    <h2 class="section-title text font-2lg uppercase">
      {{ $t('label.about') }}
      <div class="line-title" />
    </h2>
    <p class="text font-md my-lg">
      {{ $t('about.title_description') }}
    </p>

    <div class="flex pt-md">
      <div class="p-md">
        <img src="@/assets/img/Web Projek Photo Resume.jpg" />
      </div>
      <div>
        <h3 class="mb-sm text-left p-md">{{ $t('degree.name') }}</h3>
        <div class="flex text-left">
          <ul class="p-md">
            <li>
              <i class="icon">
                <svg-icon name="right-arrow"/>
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
                <svg-icon name="right-arrow"/>
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
                <svg-icon name="right-arrow"/>
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
                <svg-icon name="right-arrow"/>
              </i>
              <span class="title capitalize">
                {{ $t('label.degree') }}:
              </span>
              <span>
                {{ profiles.about.degree[language] }}
              </span>
            </li>
          </ul>

          <ul class="p-md">
            <li>
              <i class="icon">
                <svg-icon name="right-arrow"/>
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
                <svg-icon name="right-arrow"/>
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
                <svg-icon name="right-arrow"/>
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
                <svg-icon name="right-arrow"/>
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
