import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './screens/Home.vue'
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
