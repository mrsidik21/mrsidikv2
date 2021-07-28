export default {
  name: 'NavigationTop',
  data() {
    return {
      showMenuLang: false,
      showMenus: false
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    showDropdown() {
      if (!this.showMenuLang) {
        this.showMenuLang = true
        return
      }
      this.showMenuLang = false
    },
    showMenu() {
      if (!this.showMenus) {
        this.$emit('show', true)
        this.showMenus = true
        return
      }
      this.$emit('show', false)
      this.showMenus = false
    },
    changeLang(e) {
      if (!e && !e.target && !e.target.innerText) {
        return
      }
      this.showMenuLang = false
      const target = [ ...e.target.innerText ].join('')
      const text = target.toLowerCase().includes('bahasa')
      if (text) {
        this.$store.dispatch('setLanguage', 'id')
        return
      }
      this.$store.dispatch('setLanguage', 'en')
    }
  }
}