# 基本使用

## 1.获取query字符串

获取get传值的参数。

通过 req.query 对象，可以访问到客户端通过查询字符串的形式发送到服务器的参数：

~~~javascript
app.get('/',(req,res)=>{
	console.log(req.query)	// 获取到的直接就是个对象
})
~~~

## 2.动态参数传递

Express也支持类似于Vue中`动态路由`的形式传递参数，传递的参数通过 req.params 对象可以访问到：

~~~javascript
// 必须的路由参数（不传就匹配不上，返回404错误）
app.get('/:id',(req,res)=>{
	console.log(req.params.id)
})

// 可选的路由参数（传递与否都不会报错）
app.get('/:id?',(req,res)=>{
	console.log(req.params.id)
})
~~~

> 这个传参方式是符合restful传参规范的。

## 3.静态资源托管

express提供了一个非常好用的方法，叫做 `express.static()`，通过此方法，可以非常方便地创建一个静态web资源服务器：

~~~javascript
app.use(express.static('public'))
// app.use()表示使用（中间件）
// 现在可以访问public目录下所有的文件 
// 如public/aa.jpg文件，则可以通过 : http://xxxx/images/aa.jpg
~~~

express还支持给静态资源文件创建一个**虚拟的**文件前缀（实际上文件系统中并不存在），可以使用 `express.static` 函数指定一个虚拟的静态目录，就像下面这样：

> 前缀的使用意义：
>
> - 可以迷惑别人，一定程度上阻止别人猜测我们服务器的目录结构
> - 可以帮助我们更好的组织和管理静态资源

~~~javascript
app.use('/static', express.static('public'))
~~~

> 前缀前面的“/”必须要加，否则就错。

现在你可以使用 `/static` 作为前缀来加载 `public` 文件夹下的文件了：

```
http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html
```

> 使用app.use()方法**一般**写在具体的路由监听之前。

