import {post} from "../assert/js/ajax"
import API from '../assert/js/api'
export default {
	namespaced: true,
	state: {
		rankIndex: {
			list: [],
			total: 0
		}
	},
	mutations: {
		getRankList (state, playLoad) {
			const {list, total} = playLoad
			state.rankIndex['list'].push(...list)
			state.rankIndex['total'] = total
		},
		clearRankList (state) {
			state.rankIndex['list'] = []
			state.rankIndex['total'] = 0
		},
		addRankScore(state, playLoad) {
			const {index} = playLoad
			state.rankIndex['list'][index]['score']++
		}
	},
	actions: {
		getRankList ({commit, state}, playLoad) {
			const {pageSize, currentPage} = playLoad
				console.log(currentPage)
			if (currentPage === 1) {
				commit('clearRankList')
			}
			return post({
				url: API.GET_RANK_LIST,
				data: playLoad
			}).then(data => {
					commit('getRankList', data)
					return data
			})
		},
		addRankScore ({commit, state}, playLoad) {
			const {index} = playLoad
			commit('addRankScore', {index})
		}
	},
	getters: {
	}
}