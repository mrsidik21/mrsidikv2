export default {
  name: 'SidikLoading',
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: true
    }
  },
  watch: {
    loading: {
      handler(val) {
        this.show = val
      },
      immediate: true
    }
  },
}
