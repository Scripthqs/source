# 移动端布局

## 1、meta

移动端布局时，需要使用meta标签调整合适的视口。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
```

- width：宽度设置的viewport宽度，可以设置device-width特殊值
- initial-scale：初始缩放比例，大于0的数字
- maximum-scale：最大缩放比，大于0的数字
- minimum-scale：最小缩放比，大于0的数字
- user-scalable：用户是否可以缩放，yes或no(1或0)

## 2、移动端像素

不同的屏幕，单位像素的大小是不同的，像素越小，屏幕越清晰。智能手机的像素点远远小于计算机的像素点。

物理像素就是分辨率，是屏幕最小的颗粒

- 默认情况下移动端的网页都会将视口设置为980像素（css像素），确保PC端网页可以在移动端正常访问。如果网页的宽度超过了980，移动端的浏览器会自动对网页缩放以完整显示网页。此时像素比：980/移动端宽度
- 基本上大部分PC端网页都可以在移动端中正常浏览，但是往往都不会有一个好的体验。
- 为了解决这个问题，大部分网站都会为移动端专门设计一个网站

## 3、多倍图

- 编写移动端时，必须确保有一个比较合理的像素比，一般1：2/3
  - 1个css像素对应2个/3个物理像素
- 每一个移动设备都有一个最佳像素比，此时这个视口就称为完美视口。
- 不同的设备完美视口不一样，所有同样的375个像素，在不同的设备下，意义是不一样的。所以在移动端开发时，就不能使用px来布局了

为了让图片更加清晰，在实际开发中，移动端往往需要使用2倍图/3倍图。

## 4、background-size

background-size属性规定背景图像的尺寸

```css
	background-size: 500px 500px;/* 设置图片宽、高的具体数值 */
	background-size: 50% 50%;/* 宽高的百分比（相对于容器的大小）*/
	background-size: 100%;
	background-size: cover;	/* 图片始终填充满容器，且保证长宽比不变。图片如果有超出部分，则超出部分会被隐藏。 */
	background-size: contain;/* 图片完整地显示在容器中，且保证长宽比不变。可能会导致容器的部分区域为空白。*/
```

使用这个属性可以将多倍图进行缩放。

## 5、移动端主流方案

1. **单独制作移动端页面（主流）**

通常情况下，网址域名前面加m（mobile）可以打开移动端。通过判断设备，如果是移动设备打开，则跳到移动端页面。

- 流式布局（百分比布局）
- flex弹性布局（推荐）
- less + rem + 媒体查询布局
- 混合布局

2. **响应式页面兼容移动端**

通过判断屏幕宽度来改变样式，以适应不同终端。

- 媒体查询
- bootstarp

## 6、移动端布局问题

移动端浏览器基本以webkit内核为主，因此我们就需要考虑webkit兼容性问题。

- 浏览器私有前缀考虑添加webkit。

- 移动端css初始化推荐使用[normalize.css](https://github.com/necolas/normalize.css)重置样式表

- 一般使用border-box盒模型

  ```css
  	box-sizing: border-box;/*设置padding和border不再撑大盒子*/
  ```

  此时，width和height用来设置内容区content+padding+border和的大小。即**设置padding和border不再撑大盒子**

