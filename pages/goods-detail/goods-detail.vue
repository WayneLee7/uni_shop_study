<template>
	<view class="goods_detail">
		<image :src="imageUrl"></image>
		<view class="box1">
			<view class="price">
				<text>￥{{detail.goods_price}}</text>
				<text>￥8788</text>
			</view>
			<view class="goods_name">
				{{detail.goods_name}}
			</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view class="">货号：{{detail.goods_number}}</view>
			<view class="">库存：{{detail.goods_weight}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">
				详情介绍
			</view>
			<view class="content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				detail: {},
				imageUrl: '',
				content:'',
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 0,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 0
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
					 text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/goods/detail?goods_id=' + this.id
				})
				this.detail = res.data.message
				this.imageUrl = res.data.message.pics[0].pics_big
				this.content = res.data.message.goods_introduce
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getSwipers()
		},
		
	}
</script>

<style lang="scss">
	.goods_detail {
		image {
			height: 700rpx;
			display: block;
			margin: 0 auto;
		}

		.box1 {
			padding: 10px;

			.price {
				font-size: 35rpx;
				color: $shop-color;
				line-height: 80rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}

			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}

		.box2 {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}

		.box3 {
			padding-bottom: 50px;
			.tit {
				font-size: 32rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}

			.content {
				padding: 10px;
				font-size: 28rpx;
				color: #333;
				line-height: 50rpx;
			}
		}
	}

	.line {
		height: 10rpx;
		width: 750rpx;
		background: #eee;
	}
	.goods_nav{
		position: fixed;
		bottom: 0;
		width: 100%; 
	}
</style>
