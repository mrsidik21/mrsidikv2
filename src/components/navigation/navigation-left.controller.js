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
  }
}