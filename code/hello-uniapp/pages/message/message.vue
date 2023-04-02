<template>
	<view class="box1">
		<view>这是一条信息</view>
		<button type="default" @click="sendGet">发送网络请求</button>
		<button type="primary" @click="setStorage">缓存数据</button>
		<button type="primary" @click="getStorage">获取数据</button>
		<button type="warn"  @click="removeStorage">移除缓存</button>
		<button size="default">按钮</button>
		<button size="mini">按钮</button>
		<button size="mini">按钮</button>
		<button size="mini">按钮</button>
		<button type="default" plain>按钮</button>
		<button type="default" disabled>按钮</button>
		<button type="default" loading>按钮</button>
		<view class="iconfont icon-baocun"></view>
		<button type="default" @click="chooseImg">上传图片</button>
		<image v-for="(item,index) in imgArr" :key='index' :src="item" @click="previewImg(item)"></image>
		<!-- #ifdef H5 -->
		<view>只在H5页面中看见</view>
		<!-- #endif -->
		<view>只在小程序中看见</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				"imgArr":[]
			}
		},
		methods: {
			chooseImg(){
				uni.chooseImage({
					count: 6, //默认9
					    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					    sourceType: ['album'], //从相册选择
					    success:(res) =>{
							console.log(res)
					        console.log(JSON.stringify(res.tempFilePaths));
							// this.imgArr = JSON.stringify(res.tempFilePaths)
							this.imgArr = res.tempFilePaths
							console.log(this.imgArr)
					    }
				})
			},
			previewImg(current){
				console.log(current)
				uni.previewImage({
					current,
					"urls":this.imgArr,
					// longPressActions: {
					//                 itemList: ['发送给朋友', '保存图片', '收藏'],
					//                 success: function(data) {
					//                     console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
					//                 },
					//                 fail: function(err) {
					//                     console.log(err.errMsg);
					//                 }
					//             }
					// "loop": true,
					// "indicator":"number"
				})
			},
			sendGet () {
				uni.request({
					url: 'http://localhost:8082/api/getlunbo',
					success(res) {
						console.log(res)
					}
				})
			},
			setStorage(){
				uni.setStorage({
					 key: 'storage_key',
					    data: 'hello',
					    success: function () {
					        console.log('缓存成功');
					    }
				})
			},
			getStorage(){
				uni.getStorage({
					key: 'storage_key',
					success(res){
						console.log('获取数据成功' + res)
						console.log('获取数据成功' + res.data)
					},
					fail(err){
						console.warn('获取数据失败' + err)
					}
				})
			},
			removeStorage(){
				uni.removeStorage({
					 key: 'storage_key',
					    success(res) {
					        console.log('移除缓存数据');
					    }
				})
			}
		}
	}
</script>

<style lang="less">
	.box1{
		color: pink;
	}
</style>
