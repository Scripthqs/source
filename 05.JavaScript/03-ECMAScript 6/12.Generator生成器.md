# Generator生成器

## 1.生成器简介

生成器（Generator）函数是 ES6 提供的一种**异步编程解决**方案，语法行为与传统函数完全不同。

生成器可以在执行当中暂停自身，可以立即恢复执行也可以过一段时间之后恢复执行。最大的区别就是它并不像普通函数那样保证运行到完毕。

在执行当中每次暂停或恢复循环都提供了一个双向信息传递的机会，生成器可以返回一个值，恢复它的控制代码也可发回一个值。

## 2.生成器语法

生成器函数在function关键字和函数名直接有个\*号。这个*作为生成器函数的主要标识符

```js
	function* it(){}
```

*号的位置没有严格规定，只要在中间就行

```js
    function *it(){ }
    function* it(){ }
    function * it(){ }
    function*it(){ }
```

使用next()方法执行

```js
        function* gen() {
            console.log("1");
        }
        let generator = gen()
        generator.next()
```

## 3.yield关键字

生成器函数中，有一个特殊的新关键字：yield——用来标注暂停点

```js
        function* gen() {
            console.log('a');
            yield 1;
            console.log('b');
            yield 'hello'
            console.log('c');
            yield 'world'
        }
        let generator = gen()
        generator.next()//通过next方法向下执行，a
        generator.next()//通过next方法向下执行，b
		console.log(generator.next())//a {value,done}
```

## 4.生成器函数的参数传递

```JS
		let generator = gen('AAA')//直接传残
        generator.next('BBB')//这样传参可以作为上一个yield的返回结果
```

## 5.生成器函数的实例

```js
        function one() {
          setTimeout(() => {
            console.log(111);
            generator.next()
          }, 1000)
        }
        function two() {
          setTimeout(() => {
            console.log(222);
            generator.next()
          }, 1000)
        }
        function three() {
          setTimeout(() => {
            console.log(333);
            generator.next()
          }, 1000)
        }

        function* gen() {
          yield one()
          yield two()
          yield three()
        }

        let generator = gen()
        generator.next()
```

传参：

```js
        function getUser() {
          setTimeout(() => {
            let data = '用户数据'
            generator.next(data)//传参可以作为上一个yield的返回结果
          }, 1000)
        }
        function getList() {
          setTimeout(() => {
            let data = '用户列表'
            generator.next(data)/传参可以作为上一个yield的返回结果
          }, 1000)
        }
        function getGoods() {
          setTimeout(() => {
            let data = '商品列表'
            generator.next(data)/传参可以作为上一个yield的返回结果
          }, 1000)
        }

        function* gen() {
          let users = yield getUser()//将返回结果保存
          console.log(users);
          let list = yield getList()//将返回结果保存
          console.log(list);
          let goods = yield getGoods()//将返回结果保存
          console.log(goods);
        }

        let generator = gen()
        generator.next()
```

**总结：**

1. \* 的位置没有限制 
2. 生成器函数返回的结果是迭代器对象，调用迭代器对象的 next 方法可以得到 yield 语句后的值 
3. yield 相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次 next 方法，执行一段代码 
4. next 方法可以传递实参，作为 yield 语句的返回值



