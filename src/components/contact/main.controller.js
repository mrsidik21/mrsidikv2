export default {
  name: 'SidikContact',
  data() {
    return {
      profiles: this.$store.getters.profiles,
      language: this.$store.getters.language,
      loading: this.$store.getters.loadedSection.about ? false : true,
      loadingPage: this.$store.getters.loadedSection.page
    }
  },
  computed: {
    isTagMy() {
      return this.$route.hash === '#contact'
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
        if (!this.$store.getters.loadedSection.contact) {
          if (val) {
            const data = { ...this.$store.getters.loadedSection, contact: true }
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
      if (!path && path.link) return
      if (path.desc[this.language].includes('@')) {
        this.copyngToClip(path.desc[this.language])
        return
      }
      window.open(path.link, '_blank')
    },

    copyngToClip(text) {
      var TempText = document.createElement('input')
      TempText.value = text
      document.body.appendChild(TempText)
      TempText.select()
      
      document.execCommand('copy')
      document.body.removeChild(TempText)  
      alert('Copied the email: ' + TempText.value)
    }
  }
}
