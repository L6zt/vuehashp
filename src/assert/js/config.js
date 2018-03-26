	let baseUrl =   '/'
    let mockUrl =   '/'
	const isMock = true
	if (process.env.NODE_ENV !== 'development') {
	   baseUrl = mockUrl = 'http://special.cn/'
	}
	export default {
		baseUrl,
		mockUrl,
		isMock
	}