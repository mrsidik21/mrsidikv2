export default {
  name: 'SidikPortofolio',
  data() {
    return {
      profiles: this.$store.getters.profiles,
      language: this.$store.getters.language,
      loading: this.$store.getters.loadedSection.resume ? false : true,
      loadingPage: this.$store.getters.loadedSection.page,
      nextNum: 0
    }
  },
  computed: {
    activeFilter() {
      const source = [...this.profiles.filters]
      const filtered = source.filter(x => x.active)
      if (filtered.length) {
        return filtered[0]
      }
      return {}
    },
    randomIndex () {
      return Math.floor(Math.random() * this.profiles.portofolio.length)
    },
    portofolioFiltered() {
      const source = [...this.profiles.portofolio].map(x => {
        this.$set(x, 'active', true)
        return x
      })
      this.profiles.portofolio = source
      this.$store.dispatch('setProfiles', { ...this.profiles, portofolio: this.profiles.portofolio })
      if (this.activeFilter.type === 0) {
        return source
      }
      for(let i = source.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        
        let temp = source[i];
        this.$set(source, i, source[randomIndex]);
        this.$set(source, randomIndex, temp);
      }
      return source.map(x => {
        if (x.type !== this.activeFilter.type) {
          this.$set(x, 'active', false)
        }
        return x
      })
    },
    isTagMy() {
      return this.$route.hash === '#portofolio'
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
        if (!this.$store.getters.loadedSection.portofolio) {
          if (val) {
            const data = { ...this.$store.getters.loadedSection, portofolio: true }
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
        this.$store.dispatch('setLoadedSection', data)
        this.loading = false
      }
    },
    delay(time) {
      return new Promise((resolve) => {
        setTimeout(resolve, time)
      })
    },
    handleFilter(e) {
      const text = e.target.innerText.toLowerCase()
      const source = [...this.profiles.filters].map(x => {
        this.$set(x, 'active', false)
        return x
      })
      const filtered = source.filter(x => x.id === text || x.en === text)
      let key = 0

      if (!filtered.length) return

      key = source.indexOf(filtered[0])
      source[key].active = true
      const data = { ...this.$store.getters.profiles, filters: source }
      this.$store.dispatch('setProfiles', data)
    },
    showDetail(data) {
      this.$emit('view', data)
    }
  }
}
