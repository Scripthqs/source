## HTML概述

### 一.HTML的概念

HTML(HyperText Markup Language):超文本标记语言，负责描述文档**语义**的语言，与之相关的概念有：超文本、标记、元素、标签、属性等。

#### 超文本
1. 文档包含了图片、视频、音频、动画等内容，它们超出了文本的限制。
2. 超链接

#### 标记语言
1. 标记语言是一套标记标签，`<a>超链接</a>`,带尖括号的a标签就是标记，本质就是书名号`《红楼梦》`之类的符号。HTML就不是编程语言，而是描述性的标记语言。
2. 标记语言直接由浏览器解析执行，没有编译过程。

注意：HTML是负责描述文档语义的语言。  
比如，`<h1>`标签什么用？
- 正确答案：给文本增加标题的语义。
- 错误答案：给文字加粗、变黑、变大。  
  
#### 元素和标签
注意：元素就是标签，标签就是元素，标签一般成对出现，但是也存在自结束标签。自结束标签的/可以省略。   
`<head></head>,<img>或<img/>`   
标签分为**块元素(block element)和行内元素(inline element)**。   
块元素独占一行，行内元素不会独占一行。  
html将所有标签分为两种：
- 文本级标签：p、span、a等，文本级标签只能放文字、图片、表单元素等,（a标签不能放a和input）。
- 容量级标签:div、h、li、dt、dd等，容量级标签可以放任何东西。

#### 属性
在标签中(开始标签中或者自结束标签)可以设置属性，属性是一个名值对(X="Y")，属性和标签名中间空格隔开，多个属性也用空格隔开。  
`<font color="red" size="3">文字</font>`  
属性按照文档的规定来写，属性名和属性值都要按规定写，有些属性可能没有属性值。

#### 实体（转义字符）
实体的语法：`&实体的名字;`比较常用的有：
- 空格：`&nbsp;`
- 大于号：`&gt;`
- 小于号：`&lt;`
- 版权符号：`&copy;`

### 二.HTML的基本结构
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

#### 1.文档声明头
`<!DOCTYPE html>`是HTML5的文档声明头，告诉浏览器文档使用何种HTML或XHTML规范。

#### 2.根标签 html
根标签`<html></html>`的最常见属性是`lang`，`<html lang="en">`用来指定文档页面的语言类型，常用的语言类型由2种：
- en：定义页面语言为英语。
- zh-CN：定义页面语言为中文。
  
#### 3.头标签 head
`<head></head>`中的`<meta>`和`<title>`标签表示的浏览器的配置，包括字符集、IE适配、视口适配、关键字、页面描述、页面标题等内容.

#### 4.元标签 meta
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
-  content：指定数据的内容，一般和上面的name配合使用。
- http-equiv: 相当于http的文件头作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为content，content中的内容其实就是各个参数的变量值。meat标签的http-equiv属性语法格式是：   
  `＜meta http-equiv="参数" content="参数变量值"＞  `  
**http-equiv**最常见的参数refresh，用来自动刷新并指向新页面
用法：  
`＜meta http-equiv="refresh" content="3；URL=http://www.baidu.com"`   
注意：其中的3是指停留3秒钟后自动刷新到URL网址。

#### 5.标题标签title
网页的标题，也可以助于SEO搜索引擎优化。

#### 6.主体标签 body
`<body></body>`标签的属性有：
- `bgcolor：设置网页的背景颜色；`
- `background：设置网页的背景图片；`
- `text：设置网页的文本颜色；`
- `leftmargin：网页的左边距，IE默认8px;`
- `topmargin：网页的上边距；`
- `rightmargin：网页的右边距；`
- `bottommargin：网页的下边距；`
body标签是网页的主体，其中会有排版标签、字体标签、图片标签、列表标签和超链接等各种标签组合形成网页。

#### 7.HTML注释
`<!-- 我是 html 注释  -->`

### 三.关于编码
在开发中使用UTF-8都没有问题，因为UTF-8是国际通用字库，里面涵盖了所有的人类语言。  
- 用meta标签声明当前html文档的字库时，一定要和保存的文件编码类型一样，否则就会乱码。
- UTF-8比gb2312占用内存大，如果只是单纯的中文网页，极度追求网页的显示速度，要用gb2312。国内的腾讯网、网易、搜狐都是使用的gb2312。
- 浏览器打开网页，右键查看网页源代码，找到meta标签的charset属性就可以查看当前网页的编码方式。
- 打开网页时，html网页会缓存到我们的临时文件夹，所以可以查看网页源代码。

### 四.HTML规范
- html不区分大小写，但html的标签名、类名、标签属性、大部分属性值建议小写。
- html页面文件的后缀名是.html或者.htm,dos系统不支持后缀名超过3个字符。
- html对换行和tab不敏感，缩进格式化只是为了代码易读。
- html文字间多个空格、换行、tab都会被解析为一个空格，如需要多个空格换行则需要实体（转义字符）来实现。
- 标签要严格封闭。




