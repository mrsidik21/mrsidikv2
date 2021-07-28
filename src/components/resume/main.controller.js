export default {
  name: 'SidikResume',
  data() {
    return {
      profiles: this.$store.getters.profiles,
      language: this.$store.getters.language,
      loading: this.$store.getters.loadedSection.resume ? false : true,
      loadingPage: this.$store.getters.loadedSection.page
    }
  },
  computed: {
    isTagMy() {
      return this.$route.hash === '#resume'
    },
    isMobile() {
      return this.$parent.$parent.$refs.navigation.activeMobile || window.innerWidth <= 768
    }
  },
  watch: {
    loadingPage: {
      handler() {},
      immediate: true
    },
    isTagMy: {
      async handler(val) {
        if (!this.$store.getters.loadedSection.resume) {
          if (val) {
            const data = { ...this.$store.getters.loadedSection, resume: true }
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
    async handleLoading() {
      if (!this.loadingPage && this.loading) {
        await this.delay(2000)
        const data = { ...this.$store.getters.loadedSection, resume: true }
        this.$store.dispatch('SET_LOADED_SECTION', data)
        this.loading = false
      }
    },
    delay (time) {
      return new Promise((resolve) => {
        setTimeout(resolve, time)
      })
    },
    countingMySkill(rate) {
      const oldRate = rate;
      const length = []
      for (var i = 1; i <= oldRate; i+=0.5) {
        length.push(i)
      }
      let newRate = 0;
      length.map(x => {
        if (newRate <= rate) {
          newRate += x
        }
      })
      if (!this.isTagMy) return 0
      return newRate
    }
  }
}
