import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Cookies from 'js-cookie'
import 'babel-polyfill'
import axios from './api/fetch'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

import Element from 'element-ui'
import './assets/styles/element-variables.scss'

Vue.use(Element)



//css
import './assets/css/custom-global.css'
//styles
import './assets/styles/custom-common.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
