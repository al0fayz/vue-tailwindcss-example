import Vue from 'vue'
import App from './App.vue'
import './index.css';
import VueRouter from 'vue-router'
import { myRoutes } from './routes.js';

Vue.config.productionTip = false
Vue.use(VueRouter)

//routes
let router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: myRoutes
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
