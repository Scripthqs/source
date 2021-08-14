# 浮动

## 1、浮动的简介

float浮动属性可以使一个元素向其父元素的左侧或右侧移动

```css
	float: none;/*默认值，不浮动*/
	float: left;/*向左浮动*/	
	float: right;/*向右浮动*/	
```

## 2、浮动的特点

1. 浮动会脱离文档流，此时，元素就会有脱离文档流后的特点（**行内块元素特点**）
2. 兄弟浮动的元素互相贴靠，默认上沿对齐，宽度不够就会掉下去

3. 浮动的元素不会挡住文字

## 3、高度塌陷

在文档流中，父元素的高度默认被子元素撑开，当**子元素浮动（脱离文档流）**后，子元素无法撑起父元素的高度，导致父元素高度丢失，下面的元素会自动上移导致页面布局混乱。

高度塌陷是浮动布局的一个常见的问题：

1. 给浮动元素的父（祖先）元素加高度（至少保证高度大于儿子的高度）
2. 实际开发中，父元素的的高度常常不会写死，而是由内容撑开

## 4、BFC

BFC(Block Formatting Context)：块级格式化环境。BFC是一个CSS的隐含属性，可以为一个元素开启BFC，开启BFC后该区域会变成一个独立的布局区域。

**开启BFC元素的特点**

- 开启BFC的元素，不会被浮动元素覆盖。
- 开启BFC的元素，子元素和父元素外边距不会重叠。
- 开启BFC的元素，可以包含浮动的子元素。

**开启BFC的方法**

1. 设置元素的浮动，但是会脱离文档流（不推荐）

   ```css
   	float:left;
   ```

2. 将元素设置为行内块元素（不推荐）

   ```css
    	display:inline-block;
   ```

   将元素的`overflow`设置为一个非`visible`值

   ```css
   	overflow:hidden;
   ```

## 5、清除浮动的影响

浮动会造成高度塌陷的问题，需要进行处理

### 5.1、加高法

给浮动元素的父（祖先）元素加高度（至少保证高度大于儿子的高度)即可解决

但是实际开发中，父元素的高度往往不会写死，而是由内容撑开

### 5.2、clear

clear属性可以**清除浮动元素对当前元素**所产生的影响

```css
	clear: left;/*清除左侧浮动元素对对当前元素的影响*/
	clear: right;/*清除左侧浮动元素对对当前元素的影响*/	
	clear: both;/*清除浮动元素对对当前元素的影响*/
```

**但是存在问题：它所在的标签，margin属性失效了**。

### 5.3、隔墙法

```html
  <div class="father">
    <div class="son"></div>
    <div class="wall"></div>
  </div>

  <style>
    .father {
      border: 10px red solid;
    }
    .son {
      width: 200px;
      height: 200px;
      background-color: #bfa;
      float: left;
    }
    .wall {
      clear: both;
    }
  </style>
```

隔墙法利用HTML解决CSS的问题，可以利用伪元素改进：

```css
	.father::after {
      content: '';
      display: block;/*伪元素是行内元素，需要转化行内元素独占一行*/
      clear: both;
    }
```

这个方法基本是解决高度塌陷的最好方法。这个方法**也可以解决外边距重叠**问题。

```html
    <div class="father">
        <div class="son"></div>
    </div>

    <style>
		.father::before {
            content: '';
            dispaly: table;
		}
    </style>    
```

总结：可以使用下面这段代码**同时解决高度塌陷和外边距重叠的问题**，直接给需要的元素加上`clear`的类。出自《CSS权威指南》。

```css
    .clearfix::before,
    .clearfix::after{
      content:'';
      display:table;
      clear:both;
    }
```

将需要解决高度塌陷和外边距重叠的元素加上这个类

```css
	<div class="father clearfix">
        <div class="son"></div>
    </div>
```

### 5.4、overflow

`overflow: hidden;`这个方法不但可以**解决外边距重叠**问题，还能**解决高度塌陷**的问题

```
	.father {
		overflow: hidden;
	}
```

原理就是`overflow: hidden;`可以开启元素的BFC

## 6、浮动布局

- 先用标准流的**父元素排列上下位置**，之后内部子元素采取**浮动排列左右**位置。

- 设置浮动时要注意，**浮动大家一起浮动**，不能一个标签单独浮动。

