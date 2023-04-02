<template>
	<view>
		<view>
			<text>唱歌跳舞打篮球</text>
		</view>
		<view>
			<text selectable="true">唱歌跳舞打篮球</text>
		</view>
		<view>
			<text selectable="true" space="nbsp">唱歌 跳舞 打篮球</text>
		</view>
		<view>
			<text selectable="true" space="ensp">唱歌 跳舞 打篮球</text>
		</view>
		<view>
			<text selectable="true" space="emsp">唱歌 跳舞 打篮球</text>
		</view>
		<view class="box1" hover-class="box1-active">
			<view class="box2" hover-class="box2-active" hover-stop-propagation hover-start-time="2000" hover-stay-time="2000">
				我是盒子view
			</view>
		</view>

	</view>
</template>

<script>

</script>

<style>
	.box1{
		width: 200rpx;
		height: 200rpx;
		background-color: blue;
	}
	.box1-active{
		background-color: pink;
	}
	.box2{
		width: 100rpx;
		height: 100rpx;
		background-color: green;
	}
	.box2-active{
		background-color: red;
	}
</style>
