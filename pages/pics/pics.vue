<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view @click="leftClickHandle(index,item.cat_id)" v-for="(item,index) in cates" :key="item.cat_id" :class="active==index?'active':''">{{item.cat_name}}</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right">
			<view class="item">
				<image src="" mode=""></image>
				<text></text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				active:0,
				secondData:[]
			}
		},
		methods: {
		async getPicsCate(){
			const res =await this.$myRequest({
					url:'/categories'
				})
				this.cates=res.data.message
			},
		async	leftClickHandle(index,id){
				this.active=index
				// 获取右侧
			const res=await	this.$myRequest({
					url:`/goods/search/?cid=9`
				})
				this.secondData=res.data.message
			}
		},
		onLoad(){
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
		}
		view{
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.active{
			background: $shop-color;
			color: #fff;
		}
	}
</style>
