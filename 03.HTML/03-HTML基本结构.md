# HTML的基本结构

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Keywords" content="HTML，笔记" />
    <meta name="Description" content="这是一篇HTML笔记" />
    <title>Document</title>
</head>
<body>
    <!-- 我是 html 注释  -->
</body>
</html>
```

## 1.文档声明头

`<!DOCTYPE html>`是HTML5的文档声明头，告诉浏览器文档使用何种HTML或XHTML规范。

## 2.根标签 html

根标签`<html></html>`的最常见属性是`lang`，`<html lang="en">`用来指定文档页面的语言类型，常用的语言类型由2种：

- en：定义页面语言为英语。
- zh：定义页面语言为中文。

## 3.头标签 head

`<head></head>`中的`<meta>`和`<title>`标签表示的浏览器的配置，包括字符集、IE适配、视口适配、关键字、页面描述、页面标题等内容.

## 4.元标签 meta

元数据就是表示最基本的数据，`<meta>`的几个常用属性：

- charset:指定网页的字符集，一般是UTF-8。  
  `<meta charset="UTF-8">`
- name：指定数据的名称，meta标签的name属性语法格式是：  
  `＜meta name="参数" content="具体的参数值"＞`  
  **name**的常见参数有:  
  1. keywords：关键词，多个用,隔开。
  2. description：只要设置description页面描述，那么百度搜索结果就能够显示这些语句，这个技术叫做**SEO**（search engine optimization，搜索引擎优化）。
  3. viewport：`width=device-width`表示视口宽度等于屏幕宽度，一般用于移动端。语法：  
     `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- content：指定数据的内容，一般和上面的name配合使用。
- http-equiv: 相当于http的文件头作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为content，content中的内容其实就是各个参数的变量值。meat标签的http-equiv属性语法格式是：

- `＜meta http-equiv="参数" content="参数变量值"＞ ` 

**http-equiv**最常见的参数refresh，用来自动刷新并指向新页面
用法：  
`＜meta http-equiv="refresh" content="3；URL=http://www.baidu.com"`   
注意：其中的3是指停留3秒钟后自动刷新到URL网址。

## 5.标题标签title

网页的标题，也可以助于SEO搜索引擎优化。

## 6.主体标签 body

`<body></body>`标签的属性有：

- `bgcolor：设置网页的背景颜色；`
- `background：设置网页的背景图片；`
- `text：设置网页的文本颜色；`
- `leftmargin：网页的左边距，IE默认8px;`
- `topmargin：网页的上边距；`
- `rightmargin：网页的右边距；`
- `bottommargin：网页的下边距；`
  body标签是网页的主体，其中会有排版标签、字体标签、图片标签、列表标签和超链接等各种标签组合形成网页。

## 7.HTML注释

`<!-- 我是 html 注释  -->`