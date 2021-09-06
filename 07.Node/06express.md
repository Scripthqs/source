# cookie和session

## 1.介绍

**HTTP是无状态协议**。例如：活中一些商家开设的会员卡服务，记名的会员卡和不记名的会员卡，不记名的就类似无状态协议**HTTP**的情况。

实际情况中，系统需要一些手段记录用户的一些列操作，就是cookie和session（会话管理手段）。

两者区别：

- cookie：
  - 存储于浏览器的（客户端）
  - 有大小限制，大概是4kb的大小
  - 有被用户修改、删除的风险
- session：
  - 存储在服务端的（服务器上）
  - 没有被用户说改就改的风险（相对于cookie更加安全）
  - 默认情况下是基于cookie实现的（会将session会话id给cookie，id存储客户端上）
  - 当然session的id是可以被删除的（客户端上），解决是需要后端技术去实现的
  - 理论上讲，只要磁盘空间够，session是可以放很多数据的

## 2.cookie

HTTP是一个无状态协议，客户端每次发出请求时候，下一次请求得不到上一次请求的数据，我们如何将上一次请求和下一次请求的数据关联起来呢？如用户登录成功后，跳转到其他页面时候，其他的页面是如何知道该用户已经登录了呢？此时就可以使用到cookie中的值来判断用户是否登录，cookie可以保持用户数据。

cookie它是一个由浏览器（存储cookie）和服务器（产生cookie）共同协作实现的（**cookie是存储于浏览器中**）。cookie分为如下几步实现：

1. 服务器端向客户端发送cookie并指定cookie的过期时间。

2. 浏览器将cookie保存起来。

3. 之后每次请求都会将cookie发向服务器端，在cookie没有过期时间内服务器都可以得到cookie中的值。

express中操作的cookie使用cookie-parser模块。

> cookie-parser模块（也是中间件），所以其也会去操作req，res对象；设置cookie是通过`res.cookie(name,value,[选项])`，读cookie的时候需要通过`req.cookies`对象来获取。

~~~shell
npm i -S cookie-parser
~~~

**示例代码**

~~~javascript
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
// 中间件引入
app.use(cookieParser());

app.get("/", (req, res) => {
    // 服务器端通过req来获取cookie数据
    if (req.cookies.username) {
        console.log(req.cookies);
        res.send("再次欢迎你");
    } else {
        // cookie设置过期时间为1天
        // maxAge 设置cookie过期时间  毫秒
        res.cookie("username", "admin", { maxAge: 86400 * 1000 });
        res.send("欢迎你~");
    }
});
app.listen(8080);
~~~

## 3.session

cookie操作很方便，但是使用cookie安全性不高，cookie中的所有数据存储在客户端浏览器中，数据很容易被伪造；所以一些重要的数据就不能放在cookie当中了，并且cookie还有一个缺点就是不能存放太多的数据，一般浏览大约在4k左右，为了解决这些问题，session就产生了，**session中的数据保留在服务端的**。

数据放到cookie中是不安全的，我们可以在cookie中存放一个sessionId值,该sessionId会与服务器端之间会产生映射关系，如果sessionId被篡改的话，那么它就不会与服务器端数据之间产生映射，因此安全性就更好，并且**session的有效期一般比较短，一般都是设置是20分钟左右**，如果在20分钟内客户端与服务端没有产生交互，服务端就会将数据删除。

> **扩展阅读**
>
> session的原理是通过一个**sessionid**来进行的，sessionid是放在客户端的cookie中，当请求到来时候，服务端会检查cookie中保存的sessionid是否有，并且与服务端的session数据（一般是session文件）映射起来，进行数据的保存和修改，也就是说当我们浏览一个网页时候，服务端会随机生成一个1024比特长的字符串，然后存在cookie中的sessionid字段中，当我们下次访问时，cookie会带有sessionid这个字段。

express中操作的session使用cookie-seesion模块

> cookie-session包的对session设置与获取都是基于req请求对象。

~~~shell
npm i -S cookie-session
~~~

**示例代码**

~~~javascript
const express = require("express");
const session = require("cookie-session");
const app = express();

app.use(
    session({
        name: "sessionId",
        // 给sessionid加密的key,随便填写，擦下键盘即可
        secret: "afsfwefwlfjewlfewfef",
        maxAge: 20 * 60 * 1000, // 20分钟
    })
);
app.get("/", (req, res) => {
    if (!req.session["view"]) {
        req.session["view"] = 1;
    } else {
        req.session["view"]++;
    }
    res.send(`欢迎您第 ${req.session["view"]} 次访问！`);
});
app.listen(8080);
~~~

