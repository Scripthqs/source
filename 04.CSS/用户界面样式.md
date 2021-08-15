# 用户界面样式

界面样式就是更改一些用户操作样式，以便提高更好的用户体验。

## 1、cursor

cursor属性设置或检索在对象上移动的鼠标指针采用何种系统定义的光标形状。

```html
  <ul>
    <li style="cursor: default;">默认</li>
    <li style="cursor: pointer;">小手</li>
    <li style="cursor: move;">移动</li>
    <li style="cursor: text;">文本</li>
    <li style="cursor: not-allowed;">禁止</li>
  </ul>
```

## 2、input

```css
    input {
      outline: none;/*取消文本框默认的轮廓线*/
    }
```

## 3、textarea

```css
    textarea {
      resize: none;/*阻止拖拽文本域，改变大小*/
      outline: none;/*取消文本框默认的轮廓线*/
    }
```

## 4、vertical-align

vertical-align属性可用于指定**行内元素**（inline）、**行内块元素**（inline-block）、**表格的单元格**（table-cell）的垂直对齐方式。主要是用于**图片、表格、文本**的**对齐**。

```css
 	vertical-align: baseline; /*基线对齐，默认值*/
    vertical-align: middle; /*居中对齐*/
    vertical-align: top; /*顶端对齐*/
    vertical-align: bottom; /*底端对齐*/
img {
	vertical-align: baseline;/*图片默认值基线对齐，底部会有空隙*/
	vertical-align: middle;/*使用其他属性，处理图片*/
	display: block;/*可以处理图片底部间隙问题*/
}
```

## 5、溢出文字省略号

### 5.1、单行文本

```css
    white-space:nowrap;/*强制一行显示文本*/
    overflow:hidden;/*超出部分隐藏*/
    text-overflow: ellipsis;/*文字用省略号替代超出部分*/
```

### 5.2、多行文本

```css
	overflow:hidden;
	text-overflow:ellipsis;
	display: -webkit-box;/*弹性伸缩盒子模型显示*/
	display:box;
	-webkit-line-clamp:2;/*限制一个块元素显示的文本行数*/
	-webkit-box-orient:vertical;/*设置子元素的排列方式*/
```

## 6、list-style

list-style 简写属性在一个声明中设置所有的列表属性。

```css
	list-style: none;/*去掉无序列表前面的项目符号·*/
	list-style-image:url(图片路径);/*去列表项前设置为图片*/
```

## 7、filter

filter属性（滤镜）将模糊或颜色偏移等图形效果应用于元素，filter后面跟函数。

```css
img {
	filter: garyscale(%);/*让图片变成灰，0%到100%之间*/
    filter: blur(5px);/*模糊处理，数值越大越模糊*/
}
```

## 8、calc()

calc()函数可以在执行css属性值时执行一些计算。calc()内部运算符两侧必须各加一个空格。

```css
	width: calc(100% - 80px);
	background-position: calc(100% - 20px) calc(100% - 10px)
```

