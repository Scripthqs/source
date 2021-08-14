# 背景属性

## 1、background-color

background-color属性设置**背景颜色**

```css
	background-color: transparent;/*背景颜色透明，默认值*/
	background-color: red;/*使用单词*/	
	background-color: rgb(255,0,0);/*使用rgb*/
	background-color: #f00;/*十六进制*/
```

## 2、background-image

background-image属性设置**背景图片**，属性值需要写**url()**中写路径

```css
    background-image: url(../img/图片.jpg);    
	background-image: url('../img/图片.jpg');/*加不加引号好像都可以*/
```

- 设置背景颜色可以成为背景图片背景色，但是背景图片不透明时会盖住颜色
- 当背景图片大于容器时，会有一部分图片无法完全显示
- 容器大于背景图片时，图片会默认平铺

background-image除了设置背景图片外，还可以**设置渐变**，渐变分为**线性渐变**、**径向渐变**和**重复渐变**

```css
	background-image:linear-gradient(方向，起始颜色，终止颜色);
	background-image: linear-gradient(to right, yellow, green);/*用to 方位词表示方向*/
	background-image: linear-gradient(180deg, yellow, green);/*用角度表示方向,180deg默认值，默认从上到下*/

	background-image:radial-gradident(半径大小 at 位置，起始颜色，终止颜色);
	background-image:radial-gradident(100px at center,yellow,green);
	background-image:radial-gradident(circle,yellow,green);/*圆形渐变*/
	background-image:radial-gradident(ellipse,yellow,green);/*椭圆形渐变*/

	background-image: repeating-linear-gradient(red 0px,yellow 50px);/*重复渐变*/
```

## 3、background-repeat

background-repeat属性对背景图像进行**平铺**

```css
    background-repeat: repeat;/*平铺铺满，默认值*/
    background-repeat: no-repeat;/*不平铺*/
    background-repeat: repeat-x;/*横向平铺*/
    background-repeat: repeat-y;/*纵向平铺*/
```

## 4、background-position

background-positon属性可以改变图片在背景中的位置

```css
	background-position: x y;
```

x,y参数代表x坐标和y坐标，可以使用**方位名词**和**准确单位**

```css
	background-position: 100px 100px;
	background-position: bottom right;
	background-position: top left;
	background-position: center;
	background-position: left;/*只写一个值时，另一个默认center*/
```

这个属性是雪碧图的原理。

## 5、background-attachment

background-attachment属性设置图片**固定或者滚动**

```css
     background-attachment: scroll;/*默认值，滚动*/
     background-attachment: fixed;/*固定*/
```

## 6、background-clip

background-clip设置元素的背景（颜色或图片）是否**延伸到边框下边**

```css
	background-clip: border-box;/*背景会出现在边框下边，*/
	background-clip: padding-box;/*超出 padding-box 的部分，将裁剪掉*/	
	background-clip: content-box;/*超出 content-box 的部分，将裁剪掉*/	
```

## 7、background-origin

background-origin属性控制背景从**什么地方开始显示**

```css
	background-origin: padding-box;/*默认值，内边距开始显示*/
	background-origin: border-box;/*从边框开始显示*/
	background-origin: content-box;/*从内容区开始显示*/
```

## 8、background-size

background-size属性设置背景图片的**尺寸**

```css
	background-size: 500px 500px;/* 设置图片宽、高的具体数值 */
	background-size: 50% 50%;/* 宽高的百分比（相对于容器的大小）*/
	background-size: 100%;
	background-size: cover;	/* 图片始终填充满容器，且保证长宽比不变。图片如果有超出部分，则超出部分会被隐藏。 */
	background-size: contain;/* 图片完整地显示在容器中，且保证长宽比不变。可能会导致容器的部分区域为空白。*/
```

## 9、background

background是背景的简写综合属性，没有特定的书写顺序，一般常用的属性：

```css
	background:背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置;
	background:color url(img.jpg) no-repeat fixed top;
```

## 10、雪碧图

图片属于外部资源，外部资源都需要浏览器单独发送请求加载，浏览器加载外部资源是按需加载的，用则加载，不用则不加载。图片会出现短暂的闪烁。

解决方法：可以将多个小图片统一保存到一个大图片中，这样图片会同时加载在网页中，然后调整`background-position`，就可以避免闪烁问题。这个技术应用广泛，被称为`CSS-sprite`，这种图片称为雪碧图（精灵图）。使用步骤：

- 确定需要使用的图标
- 测量图标的大小
- 根据测量的结果创建元素
- 将雪碧图设置为元素的背景图片
- 设置偏移量以显示正确的图片

雪碧图特点：降低请求次数，加快访问速度，提升用户体验。

## 11、clip-path

`clip-path`虽然不是背景属性，但常常和背景属性搭配使用。即使做了任何裁剪，容器的占位是一样的。

```
   clip-path: circle(50px at 100px 100px);
   .box1:hover{
        /* 鼠标悬停时，裁剪出更大的圆形 */
        clip-path: circle(80px at 100px 100px);
    }
```

