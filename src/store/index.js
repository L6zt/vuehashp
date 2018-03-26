import Vue from 'vue'
import Vuex from 'vuex'
import rank from './rank'
Vue.use(Vuex)
const store = new Vuex.Store({
	modules: {
		rank
	},
	state: {
		pageLoad: false
	},
	mutations: {
		pageLoad (state, flag) {
			this.state.pageLoad = flag
		},
		clearAllState (state, flag) {
			state.auth.user = null
			state.event.eventList =  {}
			state.user.userList =[]
		}
	},
	actions: {
	
	}
})
export default store