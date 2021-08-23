# BOM

JavaScript基础分为三个部分：

- ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。
- **DOM**：文档对象模型，操作**网页上的元素**的API。比如让盒子移动、变色、轮播图等。
- **BOM**：浏览器对象模型，操作**浏览器部分功能**的API。比如让浏览器自动滚动。

## 1、BOM简介

浏览器对象模型（Browser Object Model），操作浏览器部分功能的API。比如让浏览器自动滚动。

- BOM可以让我们通过JS来操作浏览器。
- BOM为我们提供了一些对象，来完成对浏览器的操作。

**BOM结构图：**

![BOM](D:\user\Desktop\scripthqs\note\material\js\BOM.png)

- **window对象是BOM的顶层(核心)对象**，所有对象都是通过它延伸出来的，也可以称为window的子对象。
- DOM也是BOM的一部分。

常用的BOM对象：

- `window`代表整个浏览器窗口，同时该对象也是网页中的全局对象。
- `navigator`代表当前浏览器的信息，通过该对象可以识别不同的浏览器。
- `location`代表当前浏览器的地址栏信息，通过该对象可以获取地址栏信息，或者操作浏览器跳转页面。
- `history`代表浏览器的历史记录，通过该对象可以操作浏览器的历史记录。
  - 由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页
  - 该操作只在当次访问时有效。
- `screen`代表用户的屏幕信息，通过该对象可以获取到用户显示器的相关信息。

这些对象都是作为`window`对象的属性保存的，可以通过`window`对象来使用，也可以直接使用。

## 2、window

- **window对象是JavaScript中的顶级对象**。
- 全局变量、自定义函数也是window对象的属性和方法。
- window对象下的属性和方法调用时，可以省略window。

浏览器的三种弹窗，都是window的方法：alert()是window.alert()的简写

```
	alert();	
	confirm();  
	prompt();	
```

1、打开窗口：

```
	window.open(url,target,param)
```

**参数解释：**

- url：要打开的地址。
- target：新窗口的位置。可以是：`_blank` 、`_self`、 `_parent` 父框架。
- param：新窗口的一些设置。
- 返回值：新窗口的句柄。

**param**这个参数，可以填各种各样的参数（），比如：

- name：新窗口的名称，可以为空
- features：属性控制字符串，在此控制窗口的各种属性，属性之间以逗号隔开。
- fullscreen= { yes/no/1/0 } 是否全屏，默认no
- channelmode= { yes/no/1/0 } 是否显示频道栏，默认no
- toolbar= { yes/no/1/0 } 是否显示工具条，默认no
- location= { yes/no/1/0 } 是否显示地址栏，默认no。（有的浏览器不一定支持）
- directories = { yes/no/1/0 } 是否显示转向按钮，默认no
- status= { yes/no/1/0 } 是否显示窗口状态条，默认no
- menubar= { yes/no/1/0 } 是否显示菜单，默认no
- scrollbars= { yes/no/1/0 } 是否显示滚动条，默认yes
- resizable= { yes/no/1/0 } 是否窗口可调整大小，默认no
- width=number 窗口宽度（像素单位）
- height=number 窗口高度（像素单位）
- top=number 窗口离屏幕顶部距离（像素单位）
- left=number 窗口离屏幕左边距离（像素单位）

各个参数之间用逗号隔开就行，但我们最好是把它们统一放到json里。

2、关闭窗口：window.close()

```js
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>窗口</title>
</head>
<body>
<a href="javascript:;">点击我打开一个新的页面</a>
<a href="javascript:;">点击我关闭本页面</a>
<script>
    var a1 = document.getElementsByTagName("a")[0];
    var a2 = document.getElementsByTagName("a")[1];
    a1.onclick = function () {
        var json = {
            "name": "helloworld",
            "fullscreen": "no",
            "location": "no",
            "width": "100px",
            "height": "100px",
            "top": "100px",
            "left": "100px"
        };
        //新窗口 = window.open(地址,是否开新窗口,新窗口的各种参数);
        window.open("http://www.baidu.com", "_blank", json); 
    }
    a2.onclick = function () {
        //关闭本页面
        window.close();
    }
</script>
</body>
</html>
```

## 3、location

`window.location`可以简写成location。location相当于浏览器地址栏，可以将url解析成独立的片段。

- `location.href`获取当前页面的 url 路径（或者设置 url 路径）
  - `location.href = 'https://www.xxx.com';`设置 url 路径
- `location.assign(str);`用来跳转到其他的页面，作用和直接修改`location.href`一样。
- `location.reload();`用于重新加载当前页面，作用和「刷新按钮」一样。
  - 在该方法的参数中传递一个true，则会强制清空缓存刷新页面。
- `location.replace();`使用一个新的页面替换当前页面，调用完毕也会跳转页面。但不会生成历史记录，不能使用「后退按钮」后退。

```js
<script>
	//5秒后自动跳转到百度。
    setTimeout(function () {
        location.href = "http://www.baidu.com";
    }, 5000);
</script>
```

## 4、navigator

`navigator.userAgent`可以获取浏览器的信息。

- 我们还可以在电脑浏览器的控制台里可以添加很多设备，通过这种方式，可以模拟移动端浏览器的场景。
- 打开控制台->切换成移动端->点击edit编辑userAgent

`navigator.platform`可以获取浏览器支持的系统

```js
    console.log(navigator.userAgent);
    console.log(navigator.platform);
```

## 5、history

- `history.length`获取浏览器历史列表中的 url 数量。注意，只是统计当次的数量，如果浏览器关了，数量会重置为1。
- `history.back();`用来回退到上一个页面，作用和浏览器的回退按钮一样。
- `history.forward();`用来跳转下一个页面，作用和浏览器的「前进按钮」一样。
- `history.go( int n);`需要整数作为参数。
  - 向前/向后跳转n个页面
  - n>0，向前跳转n个页面
  - n=0，刷新当前页面
  - n<0，向后跳转n个页面
