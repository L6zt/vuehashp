import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const RankList = () => import('../pages/rank/index.vue')
const MainCon = () => import('../pages/index.vue')
const RankItem = () => import('../pages/rank/detail.vue')
const P404 = () => import('../pages/other/404.vue')
const routes = [
	{ path: '/', component: MainCon, name: 'MainCon',
		children: [
			{ path: '', component: RankList, name: 'RankList'},
			{ path: 'rank/:id', component: RankItem, name: 'RankItem'}
		]
	},
	{ path:  '*', component: P404, name: P404}
]
export default new VueRouter({
	routes,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})