import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import jquery from 'jquery'
Vue.config.productionTip = false;
Vue.prototype.$ = jquery;
window.$ = jquery;


/* filters */
Vue.filter('dateFormate', (val) => {
  let type = Object.prototype.toString.call(val);
  if (type === "[object Date]") {
    let date = val.getDate();
    let month = (val.getMonth() + 1).toString();
    switch (month) {
      case '1': month = 'January';
        break;
      case '2': month = 'February';
        break;
      case '3': month = 'March';
        break;
      case '4': month = 'April';
        break;
      case '5': month = 'May';
        break;
      case '6': month = 'June';
        break;
      case '7': month = 'July';
        break;
      case '8': month = 'August';
        break;
      case '9': month = 'September';
        break;
      case '10': month = 'October';
        break;
      case '11': month = 'November';
        break;
      case '12': month = 'December';
        break;
    }
    return date + " " + month;
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


