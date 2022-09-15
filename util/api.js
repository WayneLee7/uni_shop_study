const BASE_URL='https://api-hmugo-web.itheima.net/api/public/v1'
export const myRequest=(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method||'GET',
			data:options.data||{},
			success:(res)=>{
				if(res.data.meta.status!==200){
					return uni.showToast({
						title:'获取数据失败',
						icon:"error"
					})
				}
				resolve(res)
			},
			fail:(err)=>{
				uni.showToast({
					title:'获取数据失败',
					icon:"error"
				})
				reject(err)
			}
		})
	})
}