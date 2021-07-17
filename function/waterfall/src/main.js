// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import waterfall from 'vue-waterfall2';
Vue.use(waterfall);

Vue.use(waterfall,VirtualCollection);
import VirtualCollection from 'vue-virtual-collection'
Vue.use(VirtualCollection);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
