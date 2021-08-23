# XHR基础

## 1、XHR简介

1. 使用`XMLHttpRequest` (XHR)对象可以与服务器交互, 也就是发送ajax 请求
2. 前端可以获取到数据，而无需让整个的页面刷新。
3. 这使得Web 页面可以只更新页面的局部，而不影响用户的操作。

[`XMLHttpRequest()`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/XMLHttpRequest)

该构造函数用于初始化一个 `XMLHttpRequest` 实例对象，AJAX 的所有操作都是通过该对象进行的

## 2、XHR使用步骤

### 2.1 创建XMLHttpRequest 对象

```js
	var xhr = new XMLHttpRequest();
```

### 2.2 设置请求信息（请求方法和url）

```js
// 请求方式
xhr.open(method, url);
//可以设置请求头，一般不设置
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
```

### 2.3 发送请求

```js
xhr.send(body) //get请求不传 body 参数，只有post请求使用
```

### 2.4 接收响应

事件绑定，处理服务端返回的结果

```js
/xhr.responseXML 接收 xml格式 的响应数据
//xhr.responseText 接收 文本格式 的响应数据
xhr.onreadystatechange = function (){
	// readyState 是 xhr对象中的属性, 表示状态 0 1 2 3 4
	if(xhr.readyState == 4 && xhr.status == 200){
		var text = xhr.responseText;
		console.log(text);
	}
}
```

