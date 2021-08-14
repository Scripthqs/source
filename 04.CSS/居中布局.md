# css居中问题

## 1、行内元素居中

行内元素（文字、图片等）水平垂直居中比较简单

```css
.father {
	text-align: center;/*水平居中*/
    /*让文字的行高 等于 盒子的高度，可以让单行文本垂直居中*/
    height: 20px;
    line-height: 20px;
}
```

## 2、块级元素居中

在标准流中，盒子在父亲里居中（水平方向看），可以将其设置`margin: 0 auto`属性。

```css
.father {
    overflow: hidden;/*开启BFC，解决外边距重叠问题*/
}
.son {
    margin: 0 auto;/*水平居中*/
    margin-top: (father.h-son.h)/2;/*（父元素高度-子元素高度）的一半*/
}
```

## 2、开启绝对定位后

**方法1（不推荐）：**

```css
.father {
	position: relative;/*父元素开启相对定位*/
}
.son {
	position: absolute;/*子元素开启绝对定位*/
	/*脱离文档流后，此时这个属性不能实现水平居中*/
    /*margin: 0 auto;*/
      left: 50%;
      margin-left: -son.w/2 ;/*负子元素的宽度一半大小*/
      top: 50%;
      margin-top: -son.h/2;/*负子元素的高度一半大小*/
}
```

问题：

- 要求指定子元素的宽高，才能写出 `margin-top` 和 `margin-left` 的属性值。

- 在通常情况下，对那些需要居中的元素来说，其宽高往往是由其内容来决定的，不建议固定宽高。

**方法2（推荐）：**

```
.father {
	position: relative;/*父元素开启相对定位*/
}
.son {
	position: absolute;/*子元素开启绝对定位*/
	/*脱离文档流后，此时这个属性不能实现水平居中*/
    /*margin: 0 auto;*/
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
}
```

**translate()** 函数中使用百分比值时，是以这个元素自身的宽度和高度为基准进行换算和移动的（**动态计算宽高**）。

