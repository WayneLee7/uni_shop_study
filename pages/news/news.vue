<template>
	<view>
		<view class="news">
			<view @click="navigator(item.id)" class="news_item" v-for="item in news" :key="item.id">
				<image :src="item.img_url"></image>
				<view class="right">
					<view class="tit">
						{{item.title}}
					</view>
					<view class="info">
						<text>发表时间：{{item.add_time}}</text>
						<text>浏览次数：{{item.count}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news:[
					{
						id:1,
						title:'进度飞快，恒驰6量产版无伪谍照曝光',
						add_time:'2021-03-02 03:50:28',
						img_url:'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2022%2F0804%2Fce28a7c4p00rg2kz50083c0009c0070c.png&thumbnail=234x146&quality=85&type=png',
						count:1213
					},
					{
						id:2,
						title:'AMD暴雷了，但为何华尔街还是热捧？',
						add_time:'2021-03-02 03:50:28',
						img_url:'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2022%2F0804%2Fe634353dj00rg2j080044c0009c0070c.jpg&thumbnail=234x146&quality=85&type=jpg',
						count:345453
					},
					{
						id:3,
						title:'iPhone 14/Pro细节曝光：不再提供粉色、远峰蓝配色',
						add_time:'2021-03-02 03:50:28',
						img_url:'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2022%2F0804%2Ff21f64c1p00rg2kur003jc0009c0070c.png&thumbnail=234x146&quality=85&type=png',
						count:43243
					},
					{
						id:4,
						title:'i韦伯捕捉到车轮星系惊人奇观：5亿光年外的绝美宇宙涟漪',
						add_time:'2021-03-02 03:50:28',
						img_url:'https://nimg.ws.126.net/?url=http%3A%2F%2Fcms-bucket.ws.126.net%2F2022%2F0804%2F2a78e9aep00rg2lfl006oc0009c0070c.png&thumbnail=234x146&quality=85&type=png',
						count:123
					},
				]
			}
		},
		methods: {
			navigator(id){
				uni.navigateTo({
					url:'/pages/news-detail/news-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.news{
		.news_item{
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid $shop-color;
			image{
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}
			.right{
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.tit{
					font-size: 30rpx;
				}
				.info{
					font-size: 24rpx;
					text:nth-child(2){
						margin-left: 30rpx;
					}
				}
			}
			
		}
	}
</style>
