# 盒模型

## 1、盒模型简介

盒模型（box model)，无论是div、span、a都是盒模型。图片和表单看作文本，并不是盒子。

## 2、盒模型组成

盒模型由边框（border)、外边距(margin)、内边距(padding)和内容(content)四个部分组成。

**注意：width和height是内容（content）的宽度和高度**

![标准盒模型](D:\User\Pictures\标准盒模型.jpeg)

![IE盒模型](D:\User\Pictures\IE盒模型.jpeg)

- **标准盒子模型**中，**width 和 height 指的是内容区域**的宽度和高度。
- **IE盒子模型**（怪异盒模型）中，**width 和 height 指的是内容区域+border+padding**的宽度和高度。

## 3、box-sizing

默认情况下，盒子可见框的大小由内容区、内边距和边框共同决定。

`box-sizing`属性可以设置盒子尺寸的计算方式，属性值：

- `content-box`：默认值，`width`和`height`用来设置内区的大小。
- `border-box`：`width`和`height`是设置盒子可见框的大小，即设置的是内容区、内边距和边框的和。

```css
div {
    width: 200px;
	height: 200px;
	box-sizing: content-box;/*默认值，width和height用来设置内容区content的大小*/
	box-sizing: border-box;/*将盒模型设置为IE盒模型，width和height用来设置内容区content+padding+border和的大小*/	
}	
```

## 4、border

border边框属性可以设置元素的**边框**，border由3部分组成：**边框宽度**、**边框样式**、**边框颜色**。

```css
	border-width: 10px;/*边框粗细，单位px*/
	border-style: solid;/*样式，属性值有solid（实线）、dotted（点状虚线）、dashed（虚线）、double（双线）*/	
	border-color: red;/*边框颜色*/
```

边框可以指定上下左右：

```css
	border-top-width/color/style:;/*上边框*/
	border-right-width/color/style:;/*右边框*/
	border-bottom-width/color/style: ;/*下边框*/
	border-left-width/color/style: ;/*左边框*/
```

border边框属性的简写：

```css
	border: 1px solid red /*没有顺序要求*/
	border-top: 1px double #f00;
	border-left: none;/*取消左边框*/
```

表格细线边框：

```
table,td,th {
	border； 1px solid red;
	border-collapse: collapse;/*合并表格相邻的边框*/
	text-align: center;/*表格内容居中*/
}
```

利用 border 属性画一个三角形（小技巧）

```css
/*直接三角形*/
div {
	width: 0px;
	height: 0px;
	border: 30px solid transparent;
	border-top-color: red;
	border-bottom: none;
}
/*等边三角形*/
div {
    width: 0;
    height: 0;
    border-top: 30px solid red;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    /* border-radius: 20px; *//*扇形*/
}
```

**border 也会影响盒子的实际大小**

## 5、border-radius

`border-radius`属性可以设置**圆角**，可以设置四个值，设置4个圆角。一般都值设置一个。设置50%可以设置为圆形。

````css
div {
    width: 200px
	height: 200px
	border-radius: 10px;/*10px是圆的半径，可以写4个值*/
	border-radius: 50%;/*如果盒子是正方形，将盒子设置为圆形*/
}
````

## 6、padding

padding内边距属性可以设置**内边距**，即边框和内容的距离 。padding有4个方向。

```css
	padding-top: 30px;/*上内边距*/
	padding-right: 20px;/*右内边距*/
	padding-bottom: 40px;/*下内边距*/
	padding-left: 100px;/*左内边距*/
```

padding内边距的简写：

```css
	padding:30px 20px 40px 100px;/*(上、右、下、左)（顺时针方向，用空格隔开*/
```

**padding也会影响盒子的实际大小**

## 7、margin

margin外边距属性可以设置**外边距**，即控制盒子于盒子之间的距离。

```css
	margin-top: 30px;/*上外边距*/
	margin-right: 20px;/*右外边距，默认情况下，没用。*/
	margin-bottom: 40px;/*下外边距*/
	margin-left: 100px;/*左外边距*/
```

margin内边距的简写：

```css
	margin:30px 20px 40px 100px;/*(上、右、下、左)（顺时针方向，用空格隔开*/
```

## 8、outline

outline属性用来元素的**轮廓**，用法和border一样，但不会影响布局。

一般和`:hover`配合使用实现一个鼠标移入效果。

```css
div:hover{
	outline:1px solid red;
}
	outline: none;/*取消表单文本框的默认轮廓*/
```

outline属性不会贴合盒子的圆角

```css
	 border-radius: 10px;
	 outline: 1px solid red;
```

## 9、box-shadow

`box-shadow`属性用来设置元素的**阴影效果**，也不会影响布局。

````css
	box-shadow:10px 10px 50px 10px rgba;//水平偏移量 垂直偏移量  阴影的模糊半径 阴影尺寸 阴影颜色`
````

box-shadow支持逗号分割语法，可以创建任意数量的投影

```css
	box-shadow: 0 0 0 10px #655,
				0 0 0 15px red;
```

## 10、margin布局

**在标准流的盒子**，margin外边距可以让块级盒子水平居中，需要满足：

- 盒子必须指定了宽度width
- 盒子左右的外边距都设置为0

```css
div{
	width: 960px;
	height: 200px;
    margin:0 auto;    //让这个div自己在大容器中的水平方向居中。
    text-align: center;  //让这个div内部的文本居中。
}
```

元素在其父元素中水平布局的位置必须满足：

```css
`子元素`margin-left` + `border-left` + `padding-left` + `width` + `padding-right` + `padding-right` + `margin-right` = `父元素width`
```

- 以上等式必须满足，如果相加结果等式不成立，则称为过度约束，等式会自动调整。
- 如果7个值中没有`auto`，浏览器会自动调整`margin-right`使等式成立。
- 7个值中有3个值**margin-right、width、margin-left**可以设置成**auto**，设置成`auto`的值会自动调整。`width的默认值就是auto`。
- 如果将`width`和`margin-left或者margin-right`设置为`auto`，`width`会调整到最大。
- 如果3个值都设置成`auto`，外边距都是0，`width`最大。
- 如果`margin-left和margin-right`设置为`auto`，则两个值会相等。这个特点可以用来设置元素的水平居中。`margin:0 auto;`

**行内元素不会独占一行，所以设置`padding`、`border`和`margin`不会影响垂直页面布局**

## 11、外边距重叠

**标准文档流中**，相邻的**垂直方向**外边距会发生**重叠现象**。

- **兄弟元素**之间垂直外边距（同号）会取两者之间（绝对值）最大值。异号取相加值。
- **父子元素**之间的垂直外边距（上边距），子元素会传递给父元素。

总结：

- **`margin`这个属性，本质上描述的是兄弟和兄弟之间的距离； 最好不要用这个marign表达父子之间的距离。**
- **要表达父子之间的距离，我们一定要善于使用父亲的`padding`（height需要减去），而不是儿子的`margin`。**
- 只有竖直方向的`margin`才会有塌陷（叠加）现象。
- 当元素脱离文档流后，`margin`塌陷（叠加）现象会消失。兄弟元素的外边距始终会相加。

## 12、overflow

子元素的大小超过了父元素，则子元素会从父元素中溢出。

溢出时，可以通过`overflow`属性设置父元素，属性值：

- `visible`：默认值，子元素在父元素外部显示。
- `hidden`：溢出的内容将被裁剪不会显示。
- `scroll`：生成两个滚动条，通过滚动条查看完整内容。
- `auto`：根据需要生成滚动条。

```
	overflow: hidden;/*可以解决外边距重叠*/
```

## 13、浏览器默认样式

通常情况下，浏览器会为元素设置默认样式。默认样式的存在会影响页面的布局，通常情况下编写（PC端）网页时必须去除浏览器的默认样式。

- 通配选择器同时设置`margin:0;`和`padding:0;`可以去除大多数默认样式。

- 引入reset.css重置样式表
- 引入[normalize.css](https://github.com/necolas/normalize.css)重置样式表
