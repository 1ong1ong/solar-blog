import Vue from 'vue'
import App from './LocalProvider'
import '@/components/antd/antd'
import store from './store'
import moment from 'moment';

Vue.prototype.$moment = moment;
import router from "./route/route"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
