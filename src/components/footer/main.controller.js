export default {
  name: 'SidikFooter',
  data() {
    return {
      profiles: this.$store.getters.profiles,
      language: this.$store.getters.language,
      loading: false,
      loadingPage: this.$store.getters.loadedSection.page
    }
  },
  watch: {
    loadingPage: {
      handler() {},
      immediate: true
    }
  },
  methods: {
    async handleLoading() {
      if (!this.loadingPage && this.loading) {
        await this.delay(2000)
        const data = { ...this.$store.getters.loadedSection, about: true }
        this.$store.dispatch('SET_LOADED_SECTION', data)
        this.loading = false
      }
    },
    delay (time) {
      return new Promise((resolve) => {
        setTimeout(resolve, time)
      })
    },
    goTo(path) {
      window.open(path, '_blank')
    }
  }
}
