<template>
	<view>
		<view>联系我们</view>
		<view class="box1">
			测试文字
		</view>
		<view v-for="(item,index) in list" :key="index">
			{{ item }}
		</view>
		<!-- <button type="default" @click="startPull">点击刷新</button> -->
	</view>
</template>

<script>
	export default {
		data(){
			return{
				list:['html','css','js','html','css','js','html','css','js','html','css','js','html','css','js','html','css','js','html','css','js','html','css','js','html','css','js','html','css','js']
			}
		},
		methods:{
			startPull () {
				  uni.startPullDownRefresh()
				}
		},
		onPullDownRefresh(){
			console.log('触发下拉刷新了')
			this.list.push('vue')
			uni.stopPullDownRefresh()
		},
		onReachBottom(){
			console.log('触发上拉加载了')
			this.list.push('hhhhhh')
		}
	}
</script>

<style>
	.box1{
		width: 375rpx;
		height: 375rpx;
		background-color: red;
		font-size: 50rpx;
	}
</style>
