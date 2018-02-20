// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

const API = require('./api/api.js');
const plot = require('./applicationPlot/applicationPlot');

import VueNativeSock from 'vue-native-websocket'

Vue.use(VueNativeSock, API.constants.wsUri, {
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  // reconnectionAttempts: 10, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000 // (Number) how long to initially wait before attempting a new (1000)
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  sockets: {
    onmessage: (evt) => {
      let data = JSON.parse(evt.data);
      if (data && !API.pause) {
        API.addToData(data);
      }
    },
    onerror: (evt) => {
      plot.createPlot();
      console.error('websocket: cannot connect')

    }
  }

})
