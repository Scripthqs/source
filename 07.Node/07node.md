# 模版引擎

开发方式：耦合式开发（前后端会黏在一起的开发模式，模版引擎类似于提供了mvc中v的操作），在模版引擎中的模版中，会既有前端代码，又有后端代码。其最终的体现还是html文件

## 1.介绍

在一个web应用程序中，如果只是使用服务器端代码来编写客户端html代码，前后端不分离，那么会造成很大的工作量，而且写出来的代码会比较难以阅读和维护。如果只是使用客户端的静态的HTML文件，那么后端的逻辑也会比较难以融入到客户端的HTML代码中。为了便于维护，且**使后端逻辑能够比较好的融入前端的HTML代码中，同时便于维护**，很多第三方开发者就开发出了各种Nodejs模板引擎，其中比较常用的就是Jade/Pug、Ejs和art-template 等模板引擎。

目的：**使后端逻辑能够比较好的融入前端的HTML代码中，同时便于维护**

## 2.art-template

网址：

- http://aui.github.io/art-template/zh-cn/

- http://aui.github.io/art-template/express/

art-template 是一个**简约、超快**的模板引擎。

模板引擎渲染速度测试：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/09/956e0010cfffedd19ced476c393dc237591e7591.png?sign=eff73358909c5267015026653ebfdd38&t=5f6f16c4)

**特性**

- 拥有接近 JavaScript 渲染（DOM操作）极限的的性能

- 调试友好：语法、运行时错误日志精确到模板所在行；支持在模板文件上打断点（Webpack Loader）

- 支持 Express、Koa、Webpack

- 支持模板继承（布局）与子模板（引入包含）

- 浏览器版本仅 6KB 大小

## 3.安装与配置

在express项目中通过npm来进行安装：

~~~shell
# 安装
npm i -S art-template express-art-template
# 安装所需要的依赖  x   a   c  
~~~

~~~javascript
// 模板引擎配置
// 指定art-template模板，并指定模块后缀为.html
app.engine('html', require('express-art-template'));
// 指定模板视图路径
app.set('views', path.join(__dirname, 'views'));
// 省略指定模块文件后缀后名称（可选，在渲染时可以省略的后缀）
app.set('view engine', 'html')
~~~

## 4.使用语法

art-template 支持**==标准语法==**与**原始语法**。标准语法可以让模板易读写，而原始语法拥有强大的逻辑表达能力。标准语法支持基本模板语法以及基本 JavaScript 表达式；原始语法支持任意 JavaScript 语句，这和 Ejs一样。

- 使用art-template展示一个视图（html文件）
  - 将视图放入views目录下（允许分目录）
  - 编写代码，展示视图的方式是`res.redner(文件的路径)`

~~~javascript
app.get('/', (req, res) => {
    // 输出视图
    res.render('404.html')
})
~~~



- 控制层返回数据（在js控制层中赋值变量到视图中）

~~~javascript
app.get(uri,(req,res)=>{
	res.render(模板,{
		username: '张三',
        age: 25,
        gender: '女',
        hobby: ['篮球','乒乓球','羽毛球']
	})
})
~~~

- 模板视图层输出数据

在视图层中，使用art-template中的插值表达式完成数据的显示

~~~html
<!-- 标准语法 -->
{{ username }}
<!-- 或者 -->
<!-- 原始语法 -->
<%= username %>
~~~

在默认情况下，上述输出方式不能将带有HTML标记的内容让浏览器解析，只会原样输出。如果需要将HTML标记让浏览器，则请使用下述方式输出数据：

~~~html
<!-- 标准语法 -->
{{@ username}}
<!-- 原始语法 -->
<%- username %>
~~~

- 条件判断

~~~html
{{if 条件}} … {{else if 条件}} … {{/if}}
<%if (条件){%> … <%}else if (条件){%> … <%}%>
~~~

案例：输出年龄，判断年龄的阶段（18岁以下未成年，18-30青年，30+老年）

> 思路：先写原生JavaScript的判断操作，然后转化，转化思路，去掉原先每一行的左{右}，然后加上左{{右}}，最后在最后一行加上结束标记“{{/if}}”

~~~html
<p>当前的年龄是：{{age}}</p>
<div>
    <!-- 标准语法的判断 -->
    {{if (age < 18)}}
    未成年
    {{else if (age >= 18 && age < 30)}}
    中年
    {{else}}
    老年
    {{/if}}
    <br>
    <!-- 原始写法的判断 -->
    <%if(age < 18){%>
    未成年
    <%}else if(age >= 18 && age < 30){%>
    中年
    <%}else{%>
    老年
    <%}%>
</div>
~~~

- 循环

~~~html
<!-- 支持 数组和对象的迭代  默认元素变量为$value 下标为$index  可以自定义 {{each target val key}}-->
{{each 循环的数据}}
    {{$index}} {{$value}}
{{/each}}

{{each 循环的数据 val key}}
    {{key}} {{val}}
{{/each}}

<% for(var i = 0; i < target.length; i++){ %>
    <%= i %> <%= target[i] %>
<% } %>
~~~

> 如果使用默认的键、值的名字（index,value）则其前面的`$`一定要写！一定要写！！！
>
> 如果使用的自定义的键、值的名字，则前面的`$`一定不能写！！不能写！！

~~~html
<h3>循环输出</h3>
{{each hobbies}}
	{{$index}}-{{$value}}<br/>
{{/each}}
{{each hobbies val key}}
	{{key}}-{{val}}<br/>
{{/each}}
~~~

- 模板包含

> 在一个模板文件中引入另外一个模板文件。

~~~html
{{include '被引入文件路径'}}
<% include('被引入文件路径') %>
~~~

> 注：
>
> - **如果是当前路径下的一定要写`./`，不写则从磁盘根下开始寻找**
> - 被include的文件后缀名默认为`.art`，如果不是请勿省略
> - 在子模板中**最好**不要有html、head和body标签（否则容易出现样式错误的问题）

- 模板布局/模版继承

> 应用场景：主要应用在多个页面有重复布局的场景下，例如“上中下”布局，一般上与下是固定的，变化的是中间的部分。

**布局文件layout.html（父/公共页面）**

~~~html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{block 'title'}}My Site{{/block}}</title>
</head>
<body>
	<!-- block占位符 content此占位的名称 -->
    {{block 'content'}}{{/block}}
</body>
</html>
~~~

**需要进行布局的文件（子/填坑）**

~~~html
<!--extend 继承 -->
{{extend './layout.html'}}
{{block 'title'}}首页{{/block}}
{{block 'content'}}
	<p>This is just an awesome page.</p>
{{/block}}
~~~

> 注：渲染需要进行布局的文件后，将自动应用布局骨架

案例：创建三个文件使用布局

- 三个文件
  - 布局文件
  - 文章列表
  - 文章详情
- 文章列表与文章详情页面有公共的头和尾

## 5.综合实践

需求：通过mongoose操作mongodb，读取其中的数据，使用art-template读取数据展示到页面中，展示列表

bootcss在线构建器：https://www.bootcss.com/p/layoutit/

简单拖拽即可实现页面的布局。