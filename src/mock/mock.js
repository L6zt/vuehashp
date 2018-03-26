	import Mock from 'mockjs'
	import config  from '../assert/js/config'
	import API from '../assert/js/api'
	config.isMock && Mock.mock(API.GET_RANK_LIST, {
		'flag': 1,
		 'data': {
			 'list|0-10': [
				 {
					 'name': function () {
						 return Mock.mock('@string')
					 },
					 'desc': function () {
						 return this.name
					 },
					 'score': function () {
						 return Mock.mock('@natural(30, 100)')
					 }
				 }
			 ],
			 total: 200
		 }
	})
	export default {}