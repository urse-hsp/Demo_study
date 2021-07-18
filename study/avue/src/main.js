import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import request from './utils/request'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
import crudCommon from '@/mixins/crud'
window.$crudCommon = crudCommon
Vue.use(Avue, { axios })

Vue.prototype.$request = request

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
