<template>
  <div class="text-center text">
    <h2 class="section-title text font-2lg uppercase">
      {{ $t('label.resume') }}
      <div class="line-title" />
    </h2>
    <p class="text font-md my-lg">
      {{ $t('resume.summary') }}
    </p>


    <h2 class="section-title text font-2lg uppercase mt-xl mb-lg">
      {{ $t('label.skills') }}
      <div class="line-title" />
    </h2>

    <div class="row text-left mb-lg">
      <div
        v-for="(skill, n) in profiles.skills"
        :key="'sk' + n"
        class="col lg-2">
        <div class="item-skill">
          <div class="label">
            {{ skill.name[language] }}
            <span class="rate">
              {{ skill.rate }}%
            </span>
          </div>
          <div class="bar">
            <div
              :style="{ width: 'calc(' + countingMySkill(skill.rate) + '% - 30px)' }"
              class="bar-indicator"
            />
          </div>
        </div>
      </div>
    </div>

    <h3 class="text uppercase text-left pt-md mb-lg">
      {{ $t('label.experience') }}
    </h3>
    <div class="row text-left">
      <div
        v-for="(experience, n) in profiles.experience"
        :key="'ex' + n"
        class="col lg-2">
        <div class="item">
          <h4 class="uppercase"> {{ experience.name }} </h4>
          <h5 class="capitalize"> {{ experience.date[language] }} </h5>
          <p class="capitalize mb-8">
            <em>
              {{ experience.position[language] }}
            </em>
          </p>
          <ul>
            <li
              v-for="(job, x) in experience.job_desk[language]"
              :key="'ex' + n + x">
              {{ job }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row text-left">
      <div class="col">
        <h3 class="text uppercase text-left pt-md mb-lg">
          {{ $t('label.experience') }}
        </h3>
        <div
          v-for="(education, n) in profiles.education"
          :key="n"
          class="item pb-0">
          <h4> {{ education.cluster[language] }} </h4>
          <h5> {{ education.year }} </h5>
          <p class="capitalize">
            <em>
              {{ education.name[language] }}
            </em>
          </p>
          <h3>{{ education.gpa[language] }}</h3>
        </div>
      </div>
      <div class="col">
        <a v-if="language === 'en'" href="https://drive.google.com/file/d/1DYYT-Q4Y3ihSH2Pkt3qGaKLU3AcULg1c/view?usp=sharing" class="btn-download" target="blank">
          {{ $t('label.download_resume') }}
        </a>
        <a v-if="language === 'id'" href="https://drive.google.com/file/d/1zrTMC1_o5u2CbHOLbRkmKJeopyrCb1x5/view?usp=sharing" class="btn-download" target="blank">
          {{ $t('label.download_resume') }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export { default } from './main.controller'
</script>
<style lang="scss" scoped src="./main.style.scss"/>
