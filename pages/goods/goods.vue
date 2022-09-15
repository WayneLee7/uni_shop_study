<template>
	<view class="goodsList">
		<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		<view class="isOver" v-if="flag">------我是有底线的------</view>
	</view>
</template>

<script>
	import goodsList from '../../components/good-list/goods-list.vue'
	export default {
		components: {
			"goods-list": goodsList
		},
		data() {
			return {
				pageIndex: 1,
				goods: [],
				flag: false
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			if (this.goods.length < this.pageIndex * 10) return this.flag = true
			this.pageIndex++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.pageIndex = 1
			this.goods = []
			this.flag = false
			setTimeout(() => {
				this.getGoodsList(() => {
					uni.stopPullDownRefresh()
				})
			}, 1000)
		},
		methods: {
			async getGoodsList(callback) {
				const res = await this.$myRequest({
					url: `/goods/search?pagenum=${this.pageIndex}`
				})
				this.goods = [...this.goods, ...res.data.message.goods]
				callback && callback()
			},
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.goodsList {
		background: #eee;
	}

	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50;
		text-align: center;
		font-size: 28rpx;
	}
</style>
