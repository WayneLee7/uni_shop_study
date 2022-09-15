<template>
	<view class="contact">
		<image class="img" src="../../static/about.png" mode=""></image>
		<view class="info">
			<view @click="phone">联系电话:18513876166（点击拨打）</view>
			<view>联系地址：辽宁省本溪市明山区国盛建筑工程有限公司</view>
		</view>
		<map class="map" :scale="scale" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:121.56701,
				latitude:38.880483,
				scale:11,
				markers:[
					{
						longitude:121.56701,
						latitude:38.880483,
						iconPath:'../../static/tips.png',
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'18513876166'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 60rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
