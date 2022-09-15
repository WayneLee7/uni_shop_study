<template>
	<view class="home">
		<swiper indicator-dots="true" circular="true">
			<swiper-item v-for="item in swipets" :key="item.goods_id">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<uni-icons :type="item.icon" size="35" color="#fff"></uni-icons>
				<text>{{item.title}}</text>
			</view>
			
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list :goods="goods" @goodsItemClick='goGoodsDetail'></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/good-list/goods-list.vue'
	export default {
		components:{
			"goods-list":goodsList
		},
		data() {
			return {
				swipets: [],
				goods:[],
				navs:[
					{
						icon:'shop',
						title:'超市精选',
						path:'/pages/goods/goods'
					},
					{
						icon:'info',
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						icon:'image',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon:'videocam',
						title:'视频学习',
						path:'/pages/videos/videos'
					},
				]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		methods: {
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/home/swiperdata'
				})
				this.swipets = res.data.message
			},
		async getHotGoods(){
			const res=await	this.$myRequest({
					url:'/goods/search?pagenum=1'
				})
				this.goods=res.data.message.goods
			},
			navItemClick(url){
				uni.navigateTo({
					url
				})
			},
			// 导航到商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			display: flex;
			.nav_item {
				width: 25%;
				text-align: center;
				.uni-icons {
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
				}
				text {
					display: block;
					font-size: 30rpx;
				}
			}
		}
		.hot_goods{
			background: #eee;
			overflow: hidden;
			margin-top: 10px;
		.tit{
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20px;
			background: #fff;
			margin: 7rpx 0;
		}
		
		}
	}
</style>
