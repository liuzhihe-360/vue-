import Vue from 'vue'
import App from './App.vue'
import router from './router'
import UI from '../packages/index'
Vue.use(UI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
