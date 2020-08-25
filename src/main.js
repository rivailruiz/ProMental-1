import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './screens/Home'
import FormScreenData from './screens/FormScreenData'
import QuizScreen from './screens/QuizScreen'
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: '/home',
			name: 'Home',
			component: Home,
		},
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/formScreenData',
			name: 'FormScreenData',
			component: FormScreenData
		},
		{
			path: '/quizScreen',
			name: 'QuizScreen',
			component: QuizScreen
		}
	]
})

Vue.config.productionTip = false

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app')
