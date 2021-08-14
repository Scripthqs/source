# 动画

动画(animation)，通过设置关键帧来控制每一个动画，关键帧设置了动画的每一个步骤。制作动画效果需要2个步骤：定义动画和使用动画

## 1、@keyframs

用keyframes定义动画

```css
@keyframes 动画名称 {
	from{
		width: 100px;
	}
	to{
		width: 200px;
	}
}
```

`from-to`可以用百分比代替`0%-100%`

2. 再使用动画

```css
	animation: name duration timing-function delay iteration-count direction fill-mode;
	animation: 动画名称 10s;/*name和duration不能省略*/
```

## 2、animation-name

@keyframs的动画名称，**必须要写**

## 2、animation-duration

动画完成一个周期所花费的时间，单位是秒或者毫秒，默认0，**必须要写**

## 3、animation-timing-function

动画的速度曲线，默认是“ease"

- `ease`默认值，慢速开始，先加速再减速。
- `linear`匀速运动
- `ease-in`加速运动
- `ease-out`减速运动
- `ease-in-out`先加速后减速
- `cubic-zezier()`来指定时序函数。
- `steps()`分步执行时序函数

## 4、animation-delay

动画开始之前的延迟

## 5、animation-iteration-count

规定动画应该播放的次数。正整数或者无限次

```css
	animation-iteration-count: 2;/*2次，默认值是1*/	
	animation-iteration-count: infinite;/*循环播放*/
```

## 6、animation-direction

规定是否应该轮流反向播放动画。

```css
	animation-direction: normal;/*默认值。正常播放。*/
	animation-direction: alternate;/*轮流反向播放*/
```

## 7、animation-play-state

动画的运行状态

```css
animation-play-state: running;/*默认值，动画运行*/
animation-play-state: paused;/*动画暂停*/
```

## 8、animation-fill-mode

动画的填充模式

```
animation-fill-mode: backwards;/*默认值，回到起始位置*/
animation-fill-mode: forwards;/*停在动画结束后的位置*/
animation-fill-mode: both;/*结合上面两种*/
```

## 9、animation

animation简写属性

```
animation: 名称 时间 曲线 何时开始 播放次数 反方向 起始或结束位置;
	animation: 动画名称 10s;/*name和duration不能省略*/
```

