// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

var API = require('./api/api.js');

import VueNativeSock from 'vue-native-websocket'
Vue.use(VueNativeSock, API.constants.wsUri, {
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  // reconnectionAttempts: 10, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000 // (Number) how long to initially wait before attempting a new (1000)
})

//require('./api/api.js').init();

Vue.config.productionTip = false

console.log(API)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  sockets: {
    onmessage: function(evt) {
      let data = JSON.parse(evt.data);
      // console.log(evt.data);
      if (evt.data && !API.pause) {
         API.addToData(data.test);
        //API.data.push([new Date(), data["val0"]]);
      }
    }
  }

})
