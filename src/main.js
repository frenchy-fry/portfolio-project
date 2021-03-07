import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTilt from 'vue-tilt.js'

Vue.config.productionTip = false

Vue.use(VueTilt)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
