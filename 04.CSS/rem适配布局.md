# rem适配布局

## 1、rem

rem（root em)是一个相对单位，类似于em，em是父元素字体的大小。不同的是rem的基准是相对于html元素的字体大小。

## 2、媒体查询

- 使用媒体查询（media query)可以根据不同的媒体类型定义不同的样式

- @media可以针对不同的屏幕尺寸设置不同的样式
- 当重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面

```css
	@media mediatype and|not|only (media feature){
		css-code;
	}
```

- @media开头 注意@符号
- mediatype媒体类型
- 关键字and not only
- media feature 媒体特性 必须有小括号包含

### 2.1、mediatype

将不同的终端设备划分成不同的类型。称为媒体类型

- all：用于所有设备
- print：用于打印机和打印预览
- screen：用于电脑屏幕、平板电脑、智能手机

### 2.2、关键字

关键字将媒体类型或多个媒体特性连接到一起作为媒体查询的条件。

- and：可以将多个媒体特性连接到一起，相当于“且”
- not：排除某个媒体特性，相当于“非”，可以省略
- only：指定某个特定的媒体类型，可以省略