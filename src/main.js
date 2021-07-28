import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import SidikComponents from './components/index'
import i18n from './lang'

Vue.config.productionTip = false
Vue.use(SidikComponents)
new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
