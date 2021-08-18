# 文本属性

text（文本）属性可以定义文本的外观，比如文本的颜色、对齐、装饰、缩进、行间距、行高等。

## 1、color

color属性用于定义文本的**颜色**

```css
p {
	color: red;
	color: rgb(255,0,0);
	color: #f00;/*开发中，常用十六进制*/
}
```

## 2、text-align

text-align属性用于设置元素内文本内容的**水平对齐**方式，但是不限于文字，行内元素都可以。

```css
h1 {
	text-align: center;/*水平两端对齐*/
	text-align: left;/*左对齐*/
	text-align: right;/*右对齐*/
	text-align: justify;/*两端对齐*/
}
```

## 3、text-decoration

text-decoration属性规定添加到文本的装饰。可以给文本添加下划线、删除线、上划线等

```css
a {
	text-decoration: none;/*没有装饰线，除a外的默认值*/
	text-decoration: underline;/*下划线*/
    text-decoration: overline;/*上划线*/
    text-decoration: line-through;/*删除线*/
}
```

## 4、text-indent

text-indent属性用来指定文本的第一行缩进，通常**是将段落的首行缩进**

```css
p {
    text-indent: 16px;
    text-indent: 2em;/*缩进当前元素的2个文字大小的距离*/
}
```

## 5、line-height

- CSS中，所有的行，都有行高

- 一行中有上间距、文本高度、下间距三个部分

- line-height属性用于设置行间的距离（行高），可以控制行与行之间的距离
- **行高、字号，一般都是偶数**。这样可以保证，它们的差一定偶数，就能够被2整除。

```
p {
	line-height: 16px;
	line-height: 1em;
	line-height: 2;/*直接设置一个整数，表示字体大小指定的倍数*/
}
```

### 5.1、行高小技巧

设置**行高 = 盒子高**，就可以保证单行文本垂直居中

```css
	line-height: width;
	vertical-align: middle; /*对于图片，需要加居中对齐*/
```

## 6、vertical-align

vertical-align属性可以用于指定文字的垂直对齐。但不限于文字，可用于指定**行内元素**（inline）、**行内块元素**（inline-block）、**表格的单元格**（table-cell）的垂直对齐方式。主要是用于**图片、表格、文本**的**对齐**。

```
 	vertical-align: baseline; /*基线对齐，默认值*/
    vertical-align: middle; /*居中对齐*/
    vertical-align: top; /*顶端对齐*/
    vertical-align: bottom; /*底端对齐*/
```

## 7、text-shadow

text-shadow属性可以将阴影应用于文本

```css
	text-shadow: 水平阴影 垂直阴影 模糊距离 阴影颜色
	text-shadow: 5px 5px 6px rgba(0)
```

## 8、text-overflow 

text-overflow 属性规定当文本溢出包含元素时发生的事情。

```css
    text-overflow: clip;/*修剪文本*/    
    text-overflow: ellipsis;/*显示省略符号来代表被修剪的文本*/    
    text-overflow: string;/*使用给定的字符串来代表被修剪的文本*/ 
```

## 8、white-space

white-space属性可以设置网页如何处理空白，属性值有:

- `normal`默认值，正常
- `nowrap`不换行
- `pre`保留空白，会保留空格换行

网页中常常需要将溢出的文字内容以省略号显示

```css
    white-space:nowrap;/*强制一行显示文本*/
    overflow:hidden;/*超出部分隐藏*/
    text-overflow: ellipsis;/*文字用省略号替代超出部分*/
```

