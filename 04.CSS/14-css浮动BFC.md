# 清除浮动的影响

## 1、BFC

BFC(Block Formatting Context)：块级格式化环境。BFC是一个CSS的隐含属性，可以为一个元素开启BFC，开启BFC后该区域会变成一个独立的布局区域。

### 1.1、开启BFC元素的特点

- 开启BFC的元素，不会被浮动元素覆盖。
- 开启BFC的元素，子元素和父元素外边距不会重叠。
- 开启BFC的元素，可以包含浮动的子元素。

### 1.2、开启BFC的方法

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

## 2、清除浮动的影响

浮动会造成高度塌陷的问题，需要进行处理

### 2.1、加高法

给浮动元素的父（祖先）元素加高度（至少保证高度大于儿子的高度)即可解决

但是实际开发中，父元素的高度往往不会写死，而是由内容撑开

### 2.2、clear

clear属性可以**清除浮动元素对当前元素**所产生的影响

```css
	clear: left;/*清除左侧浮动元素对对当前元素的影响*/
	clear: right;/*清除左侧浮动元素对对当前元素的影响*/	
	clear: both;/*清除浮动元素对对当前元素的影响*/
```

**但是存在问题：它所在的标签，margin属性失效了**。

### 2.3、隔墙法

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

### 2.4、overflow

`overflow: hidden;`这个方法不但可以**解决外边距重叠**问题，还能**解决高度塌陷**的问题

```
	.father {
		overflow: hidden;
	}
```

原理就是`overflow: hidden;`可以开启元素的BFC