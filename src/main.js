import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
import VueGeolocation from 'vue-browser-geolocation';


Vue.use(VueGeolocation);

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyCVlduYYF5P6zACdg1D16gg4G_yZn36o3w'
	},
	installComponents: true,
})

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: '/home',
			name: 'Home',
			component: () => 
					import(/* webpackChunkName: home */ './screens/Home')
		},
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/formScreenData',
			name: 'FormScreenData',
			component: () => 
					import(/* webpackChunkName: formScreenData */ './screens/FormScreenData')
		},
		{
			path: '/quizScreen',
			name: 'QuizScreen',
			component: () => 
					import(/* webpackChunkName: quizScreen */ './screens/QuizScreen')
		},
		{
			path:'/mapScreen',
			name: 'MapScreen',
			component: () => 
					import(/* webpackChunkName: mapScreen */ './screens/MapScreen')
		}
	]
})

Vue.config.productionTip = false

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app')
