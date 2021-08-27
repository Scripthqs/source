# 函数参数默认值

ES6允许给函数参数赋值初始值

1. 形参初始值，具有默认值的参数，一般位置放在最后
2. 可以与解构赋值结合使用

```js
        function add (a,b,c=10){
            return a+b+c;
        }
        var a = add(1,2)
        console.log(a);//13
```

```js
        function connect(options) {
            console.log(options.host);
            console.log(options.username);
            console.log(options.password);
            console.log(options.port);
        }
        function connect({ host, username, password, port = 8888 }) {
            console.log(host);
            console.log(username);
            console.log(password);
            console.log(port);
        }
        connect({
            host: 'localhost',
            username: 'root',
            password: '123456'
        })
```

