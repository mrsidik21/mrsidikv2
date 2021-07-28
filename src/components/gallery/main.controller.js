export default {
  name: 'SidikGallery',
  data() {
    return {
      show: false,
      detail: null,
      loading: false
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    },
    portofolios() {
      return this.$store.getters.profiles.portofolio
    },
    isAnyToNext() {
      const source = [...this.portofolios]
      const key = source.indexOf(this.detail)
      if (source[key + 1]) return true
      return false
    },
    isAnyToPrev() {
      const source = [...this.portofolios]
      const key = source.indexOf(this.detail)
      if (source[key - 1]) return true
      return false
    }
  },
  methods: {
    closingModal() {
      this.show = false
      this.detail = null
      this.$parent.$parent.$el.style.overflowY = ''
    },
    showingModal(data) {
      this.detail = data
      this.show = true
      this.$parent.$parent.$el.style.overflowY = 'hidden'
    },
    delay (time) {
      return new Promise((resolve) => {
        setTimeout(resolve, time)
      })
    },
    async nextSlide() {
      this.loading = true
      const source = [...this.portofolios]
      const key = source.indexOf(this.detail)
      this.detail = source[key + 1]
      await this.delay(250)
      this.loading = false
    },
    async prevSlide() {
      this.loading = true
      const source = [...this.portofolios]
      const key = source.indexOf(this.detail)
      this.detail = source[key - 1]
      await this.delay(250)
      this.loading = false
    }
  }
}
