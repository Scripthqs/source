<template>
	<view id="test">
		我是测试组件{{num}}
	</view>
</template>

<script>
	export default{
		data(){
			return {
				num:3
			}
		},
		beforeCreate(){
			console.log('实例初始化'+this.num)
		},
		created(){
			console.log('实例创建完成'+this.num)
		},
		beforeMount(){
			// console.log('beforeMount',document.getElementById('test'))
			console.log(111)
		},
		mounted(){
			// console.log('mounted',document.getElementById('test'))
		}
		
	}
</script>

<style>
</style>
