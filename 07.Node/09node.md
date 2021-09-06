# nodejs综合应用

由于Vue项目的个人中心需要登录，此处需要设计2个接口，分别是：

- 登录
- 获取用户信息

> 用户数据可以存储在MongoDB中。
>
> 约定：
>
> - 库名：maizuo
> - 表名：users

接下来就可以使用NodeJS来创建后端服务器来提供API接口运行环境了。

## 1.用户登录接口

①新建一个空文件夹，在其中初始化NodeJS项目

~~~shell
npm init -y
npm i -S express md5 mongoose jsonwebtoken body-parser moment
~~~

②新建`http.js`文件，创建一个express服务器

~~~javascript
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const fs = require("fs");
const md5 = require("md5");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server is running at http://127.0.0.1:${port}!`));
~~~

③使用`md5`模块来编写一个对密码加密的中间件

~~~javascript
// 密码加密中间件
const passwdCrypt = (req, res, next) => {
    passwd = req.body.password;
    req.body.passwdCrypted = md5(passwd + md5(passwd).substr(0, 16));
    next();
};
~~~

④调用写好的密码加密中间件生成一个用户的初始密码用于后面做登录使用

~~~javascript
// 获取初始化密码（用完即删）
app.post("/init", passwdCrypt, (req, res) => {
    res.send("init password is:" + req.body.passwdCrypted);
    // init password is:f5e441058f943860805d9a9af7318dc0【明文密码是123456】
});
~~~

> POST形式访问`/init`获得密码后就得到了一个完整的用户数据，此时可以将数据写入到MongoDB中。
>
> 如果我们自己的加密方式与讲义的代码不一样，请根据自己加密得到的密码来实际替换下面的password字段的值。

~~~json
{
    userId: 31167509,
    mobile: '18512345678',
    password: '67e807163633906f0e989ce17abb292f',
    headIcon: 'https://mall.s.maizuo.com/4f0b29878f62f5e298a89a4654f0e8f0.jpg',
    gender: 0,
}
~~~

将模拟好的数据，写入到数据库中，以便后面做登录操作：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/12/49445839b58961aef64d39fec96c93fa97b2adc9.png?sign=5f921a04479fe5b4d775ebcc94a1aa11&t=5fe02f7c)

⑤配置`jsonwebtoken`模块需要用的`secret`，并在代码中读取供后续使用

> 在node项目目录中创建一个.env（Linux以.开头都为隐藏文件）并在此文件中写入jwt加密所需要的秘钥。同时，.env文件不要上传到Github上（.gitignore文件中声明忽略）。

![secret配置](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/204d74229dcc25e9147bd73e6b1d01a86bcccffc.png?sign=33e1a22a1fbcf1e0f58f2352a37edfb9&t=5f868353)

在代码中读取`secret`

~~~javascript
// 读取JWT的密钥
const jwt_secret = fs.readFileSync(path.join(__dirname, ".env"), "utf-8");
~~~

⑥引入`mongoose`

~~~javascript
// 引入mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/maizuo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const UserSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    headIcon: String,
    gender: Number,
});
const Model = mongoose.model("User", UserSchema, "users");
~~~

⑦创建登录路由`/api/v1/user/login`实现用户名密码校验，并判断校验结果做出响应

~~~javascript
// 登录验证接口
app.post("/api/v1/user/login", passwdCrypt, async (req, res) => {
    let { mobile, passwdCrypted } = req.body;
    let result = await Model.findOne({ mobile, password: passwdCrypted });
    if (result) {
        res.send({
            code: "1000",
            info: "success",
            data: {
                // jwt.sign：jwt签发方法
                // 参数1：载荷中的数据
                // 参数2：签名的secret
                _token: jwt.sign(
                    {
                        userId: result.userId,
                        mobile: result.mobile,
                    },
                    jwt_secret
                ),
            },
        });
    } else {
        res.send({
            code: "9999",
            info: "mobile or password is invalid",
        });
    }
});
~~~

最终输出

> 登录成功则输出：

~~~json
{
    "code": "1000",
    "info": "success",
    "data": {
        "_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMxMTY3NTA5LCJtb2JpbGUiOiIxODUxMjM0NTY3OCIsImlhdCI6MTYwMjY0OTg2NX0.tVByVZYu4s5dgzLZwR00HHW7QZ0gkYpVXaVNhCdawbU"
    }
}
~~~

> 登录失败则输出：

~~~json
{
    "code": "9999",
    "info": "mobile or password is invalid"
}
~~~

## 2.获取用户信息接口

个人中心的信息是用户**登录成功后**才能进行的页面展示，在请求数据时，后台接口一定要判断当前请求是否有token，且token解密后一定是一个合法数据。

**接口需求：**依据客户端传递给服务端的用户编号`userId`，在验证通过`jwt`后输出对应用户信息

> 注意点：
>
> 有些企业提供的接口jwt所返回的token格式可能会在原有token之前拼接一个`持有者（空格）`的信息，例如用户`zhangsan`获取到的token：

~~~jwt
zhangsan eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMxMTY3NTA5LCJtb2JpbGUiOiIxODUxMjM0NTY3OCIsImlhdCI6MTYwMjY0OTg2NX0.tVByVZYu4s5dgzLZwR00HHW7QZ0gkYpVXaVNhCdawbU
~~~

> 如果是上述在接收token的时候需要注意，别获取错误了。注意，验证是否合法只用token，前面的持有者不用。

①定义获取并验证`jwt`的中间件

~~~javascript
// 中间件：验证客户端发送过来的token
const checkToken = async function (req, res, next) {
    // 处理并获取token
    let tempArr = req.headers.authorization.split(" ");
    let token = tempArr[tempArr.length - 1];
    if (!token) {
        // 没有token
        res.status(403).send({
            code: 403,
            info: "illegal access",
        });
    } else {
        // 尝试去验证token
        try {
            // jwt.verify(令牌, SECRET);
            let { userId } = jwt.verify(token, jwt_secret);
            // 查询当前用户是否可用
            let data = await Model.findOne({ userId });
            if (!data) {
                res.status(403).send({
                    code: 400,
                    info: "illegal access",
                });
            } else {
                req.body.userInfo = data;
                next();
            }
        } catch (error) {
            res.status(403).send({
                code: 400,
                info: "bad request",
            });
        }
    }
};
~~~

②定义获取用户信息的路由并使用上一步的中间件实现业务需求

~~~javascript
app.post("/api/v1/user/info", checkToken, (req, res) => {
    let { userId, headIcon, gender, mobile } = req.body.userInfo;
    res.send({
        code: 200,
        info: "OK",
        userinfo: {
            userId,
            mobile: mobile.substr(0, 7) + "****",
            gender,
            headIcon,
        },
    });
});
~~~

## 3.模块化

问：为什么要拆？

- 遵循开发规范
- 后期维护方便

问：怎么拆？

- 能拆就拆
- RMVC
  - R：router，路由，客户端发起请求与服务端响应之间的映射（app.get/post/put/delete..）
  - M：model，模型，用来处理业务逻辑的，但是业务逻辑可能与数据库与关系
  - V：view（无），视图，展示用户看的页面
  - C：controller，控制器，请求响应流程控制的（其中包含了若干个用于响应的方法）

现在要拆的有：路由、中间件、模型、控制器。

推荐顺序：模型、中间件、路由、控制器

各个文件的存放位置：

> - [x] 模型：app/models/*.js
>
> - [x] 中间件：app/middlewares/*.js
>
> - [x] 路由：routers/分隔目录/*.js
>
> - [x] 控制器：app/controllers/*.js
>
> - [x] DB连接配置：config/*.js
> - [x] Schema：database/migrations/create_xxxxx_table.js

拆分思想目录结构参考：https://github.com/laravel/laravel



