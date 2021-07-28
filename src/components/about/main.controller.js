import { dateMonths } from '@/utils/date'
export default {
  name: 'SidikAbout',
  data() {
    return {
      profiles: this.$store.getters.profiles,
      language: this.$store.getters.language,
      loading: true,
    }
  },
  computed: {
    isLoaded() {
      return this.$store.getters.loadedSection.hero
    },
    isTagMy() {
      return this.$route.hash === '#about'
    },
    isMobile() {
      return this.$parent.$parent.$refs.navigation.activeMobile || window.innerWidth <= 768
    }
  },
  watch: {
    language: {
      handler(val) {
        this.language = val
      },
      immediate: true
    },
    isTagMy: {
      async handler(val) {
        if (!this.$store.getters.loadedSection.about) {
          if (val) {
            const data = { ...this.$store.getters.loadedSection, about: true }
            this.$store.dispatch('setLoadedSection', data)
            this.loading = true
            await this.delay(300)
            this.loading = false
          } else {
            this.loading = true
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    delay (time) {
      return new Promise((resolve) => {
        setTimeout(resolve, time)
      })
    },
    formatDate(date) {
      const newDate = new Date(date)
      let dates = newDate.getDate()
      const month = dateMonths.month[this.language][newDate.getMonth()]

      if (!month) return 'Unknown Date'

      if (date < 10) date = '0' + date

      let result = ''
      if (this.language === 'en') {
        result = month + ' ' + dates + ', ' + newDate.getFullYear()
        return result
      }
      result = dates + ' ' + month + ' ' + newDate.getFullYear()
      return result
    },
    countingMyAge() {
      const birthDay = new Date(this.profiles.about.birthday).getTime()
      const diff = new Date(Date.now()).getTime() - birthDay
      const myAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
      return myAge
    }
  }
}
