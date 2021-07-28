import { Menus } from '@/utils/menus'
export default {
  name: 'NavigationLeft',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    active: {
      handler(val) {
        this.showMenu = val
      },
      immediate: true
    },
  },
  data() {
    return {
      showMenu: false,
      menus: Menus
    }
  },
  computed: {
    menuActive() {
      if (!this.$route.hash) return '#hero'
      return this.$route.hash
    }
  },
  methods: {
    changeMenu(e) {
      if (this.$route.hash === e) return;
      this.$router.push({
        hash: e
      })
    }
  }
}