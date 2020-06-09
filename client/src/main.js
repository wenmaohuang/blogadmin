import Vue from 'vue'
import App from './App.vue'
import router from '../router/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

console.log(app);
