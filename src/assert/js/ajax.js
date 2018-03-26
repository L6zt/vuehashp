	// application/x-www-form-urlencoded, multipart/form-data
	const contentType = 'application/x-www-form-urlencoded,multipart/form-data,application/json'.split(',')
	const post = ({ url, data = {}, headers = {}, special = false, isUpload = false}) => {
		return new Promise((r, j)=> {
			$.ajax({
				method: 'POST',
				url,
				data,
				headers,
				dataType: 'json',
				contentType: special ? contentType[2] : isUpload ? contentType[1] : contentType[0],
				success: function success (rp) {
					let {flag, data, errMsg} =  rp
					if (flag === 1) {
						r(data)
					} else {
						r({errMsg})
					}
				},
				error: function error (errMsg) {
					j({errMsg})
				}
			})
		})
	}
	export {post}
	