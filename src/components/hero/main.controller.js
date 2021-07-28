export default {
  name: 'SidikHero',
  data() {
    return {
      profiles: this.$store.getters.profiles,
      language: this.$store.getters.language,
      typer: '',
      timer: null,
      delayTimer: 500,
      activeBlink: false,
      loading: this.$store.getters.loadedSection.hero ? false : true
    }
  },
  computed: {
    idElement() {
      return 'muhammadrahmatsidik'
    },
    wordOne() {
      const text = this.$t('greeting.profession')
      if (!text) return ''
      let newText = ''
      if (this.language === 'en') {
        newText = text.substring(0, 6)
      } else {
        newText = text.substring(0, 12)
      }
      return newText
    },
    wordTwo() {
      const text = this.$t('greeting.profession')
      if (!text) return ''
      let newText = ''
      if (this.language === 'en') {
        newText = text.substring(6, text.length)
      } else {
        newText = text.substring(13, text.length)
      }
      return newText
    },
    isTagMy() {
      return this.$route.hash === '#hero' || this.$route.hash === ''
    },
    isMobile() {
      return this.$parent.$parent.$refs.navigation.activeMobile || window.innerWidth <= 768
    }
  },
  watch: {
    typer: {
      handler(val) {
        if (val === '') {
          this.activeBlink = false
          this.printer()
        }
      },
      immediate: true
    },
    isTagMy: {
      async handler(val) {
        if (!this.$store.getters.loadedSection.hero) {
          if (val) {
            const data = { ...this.$store.getters.loadedSection, hero: true }
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
    async printer() {
      this.stopper()
      let i = -1
      this.timer = setInterval(async () => {
        if (this.typer.length >= this.wordTwo.length) {
          this.activeBlink = true
          await this.delay(900)
          this.typer = ''
          i = -1
          return
        }
        i++
        const x = i % this.wordTwo.length
        this.typer += this.wordTwo[x]
      }, this.delayTimer)
    },
    stopper() {
      clearInterval(this.timer)
      this.typer = ''
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
