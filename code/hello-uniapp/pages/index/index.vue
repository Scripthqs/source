<template>
	<view class="container">
		<test></test>
		<view>
			<uni-calendar 
			ref="calendar"
			:insert="false"
			@confirm="confirm"
			 />
			 <button @click="open">打开日历</button>
		</view>
		
		<navigator url="/pages/detail/detail">
			<button type="default">跳转到详情页</button>
		</navigator>
		<navigator url="/pages/detail/detail"  open-type="redirect">
			<button type="default">跳转到详情页</button>
		</navigator>
		<navigator url="/pages/contact/contact" open-type="switchTab">
			<button type="default">跳转到我们页面</button>
		</navigator>
		<view class="msg">{{ msg }}</view>
		<view>{{ flag ? '我是真的':'我是假的' }}</view>
		<view>{{ 1+1 }}</view>
		<view v-for="(item,i) in arr" :key="i">
			名字：{{item.name}}---年龄：{{item.age}}
		</view>
		<button @click="funClick(20,$event)">点击触发事件</button>
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<view class="img">
			<image src="../../static/c1.png" mode=""></image>
			<image src="../../static/c1.png" mode="aspectFill"></image>
			<image src="../../static/c1.png"mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	import test from '../../components/test/test.vue'
	export default {
		components:{
			test
		},
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				msg:"hello world",
				flag: true,
				arr: [
				      { name: '刘能', age: 29 },
				      { name: '赵四', age: 39 },
				      { name: '宋小宝', age: 49 },
				      { name: '小沈阳', age: 59 }
				    ]
			}
		},
		methods: {
			funClick(num,e){
				console.log(num,e)
				console.log('点击触发')
			},
			open(){
				this.$refs.calendar.open();
			        },
			confirm(e) {
				console.log(e);
			}
		},
		onLoad(options){
			console.log('页面加载了',options)
		},
		onShow(){
			console.log('页面显示了')
		},
		onReady(){
			console.log('页面初次渲染完成')
		},
		onHide(){
			console.log('页面隐藏')
		},
		onUnload(){
			console.log('页面卸载')
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
