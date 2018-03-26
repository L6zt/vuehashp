import Vue from 'vue'
import router from './router/index'
import store from './store/index'
import App from './app.vue'
const app = new Vue({
	router,
	store,
	render (h) {
		return h('App')
	},
	components: {App}
})
app.$mount('#app')