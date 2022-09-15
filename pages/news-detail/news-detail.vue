<template>
	<view>
		<!-- <rich-text :nodes="<p>312312</p>"></rich-text> -->
{{id}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:''
			}
		},
		methods: {
			
		},
		onLoad(options) {
			this.id=options.id
		}
	}
</script>

<style>

</style>
