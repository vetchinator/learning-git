import App from './App.vue';

import Vue from 'vue';


Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development';
Vue.config.devtools = true;

new Vue({
  render: h => h(App),
}).$mount('#app')