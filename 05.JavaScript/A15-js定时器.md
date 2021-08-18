# 定时器

- `setInterval()`循环调用。将一段代码，每隔一段时间执行一次。（循环执行）
- `setTimeout()`延时调用。将一段代码，等待一段时间之后再执行。（只执行一次）。
- 在实际开发中，两者可以根据需要，相互替代。

## 1、setInterval()

`setInterval()`循环调用。每隔一段时间执行一次，需要两个参数：

- 参数1：回调函数，该函数会每隔一段时间被调用一次。
- 参数2：每次调用间隔的时间，单位是毫秒。

```js
    var timer = setInterval(function() {
      console.log(1);
    }, 1000)
```

返回值：返回一个Number类型的数据。这个数字用来作为定时器的唯一标识，方便用来清除定时器。

## 2、clearInterval()

`clearInterval(返回值)`可以关闭定时器。

```js
	clearInterval(timer)
```

- 返回值可以是任何的参数，如果参数不是一个有效值，则什么都不做。

## 3、setTimeout()

`setTimeout()`延时调用，等待一段时间之后再执行。（只执行一次），需要两个参数：

- 参数1：回调函数，等待的间隔时间结束后开始调用。
- 参数2：调用等待的间隔时间，单位是毫秒。

```js
    var timer = setTimeout(function (a,b) {
      console.log(a + b);
    }, 1000);
```

除了前两个参数，`setTimeout`还允许更多的参数。它们将依次传入推迟执行的函数（回调函数）。

举个栗子：

```js
    var timer =  setTimeout(function (a,b) {
      console.log(a + b);
    }, 1000, 1, 1);
```

## 4、clearTimeout()

clearTimeout()可以关闭定时器。

```js
	clearTimeout(timer);
```

## 5、定时器问题

定时器切换图片练习：通过按钮绑定的定时器，我们每点击一次，就会开启一个定时器，点击多次就会开启多个定时器，就是让定时器速度叠加，并且我们只能关闭最后一次开启的定时器。

- 解决方法：在开启定时器之前，在上一个定时器关闭。
- 延时调用和和定时调用可以相互切换。