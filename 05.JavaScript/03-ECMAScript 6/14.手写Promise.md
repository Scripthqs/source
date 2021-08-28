# 手写Promise

## 1.整体结构

```js
    //自定义Promise函数模块:匿名函数自定义
    (function (window){
      //Promise构造函数
      //executor:执行器函数,（同步执行）(resolve, reject) => {}
      function Promise(executor){

      }

      //Promise原型上的then方法,指定成功和失败的回调函数,返回一个新的Promise
      Promise.prototype.then = function(onResolved,onReject){

      }
      //Promise原型上的catch方法,指定失败的回调函数,返回一个新的Promise
      Promise.prototype.catch = function(onReject){

      }
      //Promise函数对象的resolve方法,返回指定结果的一个成功Promise
      Promise.resolve = function(value){

      }
      //Promise函数对象的reject方法,返回指定reason的一个失败Promise
      Promise.reject = function(reason){

      }
      //Promise函数对象的all方法,返回一个Promise,只有所有Promise成功时才成功
      Promise.all = function(promises){

      }
      //Promise函数对象的race方法,返回一个Promise,其结果由第一个完成的Promise决定
      Promise.race = function(promises){

      }
      //向外暴露Promise函数
      window.Promise = Promise
    })(window)
```

## 2.Promise(executor)

- Promise构造函数
- executor: 执行器函数（同步执行）

```js
      //Promise构造函数
      //executor:执行器函数,（同步执行）(resolve, reject) => {}
      function Promise(executor) {
          
        const _this = this//将当前promise对象保存起来
        _this.status = 'pending' //给Promise指定status属性,初始值为pending
        _this.data = undefined //给Promise指定一个用于存储结果数据的属性
        _this.callbacks = [] //给Promise指定回调函数，存的是对象 每个元素的结构：{onResolved() {}, onRejected() {}}

          
        function resolve(value) {
          //如果当前状态不是pending,直接结束
          if(_this.status !== 'pending'){
            return
          }
          //将状态改为resolved
          _this.status = 'resolved'
          //保存value数据
          _this.data = value
          //如果有待执行的callback函数,立即异步执行回调函数
          if (_this.callbacks.length > 0) {
            setTimeout(() => { //放入队列中执行所有的回调
              _this.callbacks.forEach(callbacksObj => {
                callbacksObj.onResolved(value)
              });
            }, 0);
          }
        }

        function reject(reason) {
          //如果当前状态不是pending,直接结束
          if(_this.status !== 'pending'){
            return
          }
          //将状态改为rejected
          _this.status = 'rejected'
          //保存value数据
          _this.data = reason
          //如果有待执行的callback函数,立即异步执行回调函数
          if (_this.callbacks.length > 0) {
            setTimeout(() => { //放入队列中执行所有的回调
              _this.callbacks.forEach(callbacksObj => {
                callbacksObj.onRejected(reason)
              });
            }, 0);
          }
        }
        //立即同步执行executor
        try {
          executor(resolve,reject)
        }catch(error){//如果执行器抛出异常,Promise对象变为rejected
          reject(error)
        }
      }
```

## 3.Promise.prototype.then

```js
  //Promise原型上的then方法,指定成功和失败的回调函数,返回一个新的Promise
  Promise.prototype.then = function (onResolved, onRejected) {
    const _this = this

    //返回新的Promise对象
    return new Promise((resolve, reject) => {
      if (_this.status === PENDING) {
        //假设当前状态还是pending状态,将回调函数保存起来
        _this.callbacks.push({
          onResolved(value) {
            try {
              const result = onResolved(_this.data)
              if (result instanceof Promise) {
                //如果回调函数返回的是Promise,return的Promise结果就是本身Promise的结果
                result.then(resolve, reject)
              } else {
                //如果返回非Promise,return的Promise成功,value就是返回的值
                return resolve(result)
              }
            } catch (error) {
              //如果抛出异常,return的Promise失败,reason就是error
              reject(error)
            }
          },
          onRejected(reason) {
            try {
              const result = onRejected(_this.reason)
              if (result instanceof Promise) {
                //如果回调函数返回的是Promise,return的Promise结果就是本身Promise的结果
                result.then(resolve, reject)
              } else {
                //如果返回非Promise,return的Promise成功,value就是返回的值
                return resolve(result)
              }
            } catch (error) {
              //如果抛出异常,return的Promise失败,reason就是error
              reject(error)
            }
          }
        })
      } else if (_this.status === RESOLVED) {//'resolved'
        setTimeout(() => {
          //1.如果抛出异常,return的Promise失败,reason就是error
          //2.如果回调函数执行返回非Promise,return的Promise成功,value就是返回的值
          //3.如果回调函数返回的是Promise,return的Promise结果就是本身Promise的结果
          try {
            const result = onResolved(_this.data)
            if (result instanceof Promise) {
              //如果回调函数返回的是Promise,return的Promise结果就是本身Promise的结果
              //1.写法1
              // result.then(
              //   value => resolve(value), //当result成功时,让return的Promise也成功
              //   reason => reject(reason) //当result失败时,让return的Promise也失败
              // )
              //2.写法2
              result.then(resolve, reject)
            } else {
              //如果返回非Promise,return的Promise成功,value就是返回的值
              return resolve(result)
            }
          } catch (error) {
            //如果抛出异常,return的Promise失败,reason就是error
            reject(error)
          }
        }, 0);
      } else { //'rejected'
        setTimeout(() => {
          //1.如果抛出异常,return的Promise失败,reason就是error
          //2.如果回调函数执行返回非Promise,return的Promise成功,value就是返回的值
          //3.如果回调函数返回的是Promise,return的Promise结果就是本身Promise的结果
          try {
            const result = onRejected(_this.reason)
            if (result instanceof Promise) {
              //如果回调函数返回的是Promise,return的Promise结果就是本身Promise的结果
              //1.写法1
              // result.then(
              //   value => resolve(value), //当result成功时,让return的Promise也成功
              //   reason => reject(reason) //当result失败时,让return的Promise也失败
              // )
              //2.写法2
              result.then(resolve, reject)
            } else {
              //如果返回非Promise,return的Promise成功,value就是返回的值
              return resolve(result)
            }
          } catch (error) {
            //如果抛出异常,return的Promise失败,reason就是error
            reject(error)
          }
        }, 0);
      }
    })
  }
```

将try...catch封装一下

```js
  //Promise原型上的then方法,指定成功和失败的回调函数,返回一个新的Promise
  Promise.prototype.then = function (onResolved, onRejected) {
    // 指定默认的成功的回调onResolved （向后传递成功的value）
    if (typeof onResolved !== 'function') {
      onResolved = value => value
    }
      
    // 指定默认的失败的回调onRejected（向后传递失败的reason 实现错误/异常传透的关键点）
    if (typeof onRejected !== 'function') {
      onRejected = reason => {
        throw reason
      }
    }
      
    const _this = this

    //返回新的Promise对象
    return new Promise((resolve, reject) => {
        
      //调用指定回调函数封装处理,根据执行结果,改变return的promise状态
      function handle(callback) {
        //1.如果抛出异常,return的Promise失败,reason就是error
        //2.如果回调函数执行返回非Promise,return的Promise成功,value就是返回的值
        //3.如果回调函数返回的是Promise,return的Promise结果就是本身Promise的结果
        try {
          const result = callback(_this.data)
          if (result instanceof Promise) {
            //3.如果回调函数返回的是Promise,return的Promise结果就是本身Promise的结果
            //1.写法1
            // result.then(
            //   value => resolve(value), //当result成功时,让return的Promise也成功
            //   reason => reject(reason) //当result失败时,让return的Promise也失败
            // )
            //2.写法2
            result.then(resolve, reject)
          } else {
            //2.如果返回非Promise,return的Promise成功,value就是返回的值
            resolve(result)
          }
        } catch (error) {
          //1.如果抛出异常,return的Promise失败,reason就是error
          reject(error)
        }
      }
        
      if (_this.status === RESOLVED) { //'resolved'，调用onResolved回调函数
        setTimeout(() => {
          handle(onResolved)
        }, 0);
      } else if (_this.status === REJECTED) { //'rejected'，调用onRejected回调函数
        setTimeout(() => {
          handle(onRejected)
        }, 0);
      } else {
        //假设当前状态还是pending状态,将回调函数保存起来
        _this.callbacks.push({
          onResolved() {
            handle(onResolved)
          },
          onRejected() {
            handle(onRejected)
          }
        })
      }
    })
  }
```

## 4.Promise.prototype.catch

```js
      //Promise原型上的catch方法,指定失败的回调函数,返回一个新的Promise
      Promise.prototype.catch = function (onRejected) {
        return this.then(undefined, onRejected)
      }
```

## 5. Promise.resolve

```js
      Promise.resolve = function (value) {
        //返回一个成功或者失败的Promise
        return new Promise((resolve, reject) => {
          if (value instanceof Promise) { //value是Promise
            value.then(resolve, reject)
          } else {
            resolve(value)
          }
        })
      }
```

## 6.Promise.reject

```js
      //Promise函数对象的reject方法,返回指定reason的一个失败Promise
      Promise.reject = function (reason) {
        return new Promise((resolve, reject) => {
          reject(reason)
        })
      }
```

## 7. Promise.all

```js
        //Promise函数对象的all方法,返回一个Promise,只有所有Promise成功时才成功
          Promise.all = function (promises) {
            const values = new Array(promises.length) //用来保存所有成功value的数组
            let resolveCount = 0
            return new Promise((resolve, reject) => {
              //遍历获取每个Promise的结果
              promises.forEach((p, index) => {
                Promise.resolve(p).then(value => { // 防止数组中有不是promise的元素
                  resolveCount++ //成功的数量+1
                  //p成功时，将成功的value保存values
                  values[index] = value
                  //如果全部成功，将return的Promise返回成功
                  if (resolveCount === promises.length) {
                    resolve(values)
                  }
                }, reason => {
                  reject(reason)
                })
              })
            })
          }
```



## 8. Promise.race

```js
         //Promise函数对象的race方法,返回一个Promise,其结果由第一个完成的Promise决定
          Promise.race = function (promises) {
            //返回一个Promise
            return new Promise((resolve, reject) => {
              promises.forEach((p, index) => {
                Promise.resolve(p).then(value => { //一旦有成功了，将return变为成功
                  resolve(value)
                }, reason => { //一旦有失败了，将return变为失败
                  reject(reason)
                })
              })
            })
          }
```



## 无注释纯净版本

```js
    (function (window) {
      const PENDING = 'pending'
      const RESOLVED = 'resolved'
      const REJECTED = 'rejected'

      function Promise(executor) {
        const _this = this
        _this.status = PENDING
        _this.data = undefined
        _this.callbacks = []

        function resolve(value) {
          if (_this.status !== PENDING) return
          _this.status = RESOLVED
          _this.data = value
          if (_this.callbacks.length > 0) {
            setTimeout(() => {
              _this.callbacks.forEach(callbacksObj => {
                callbacksObj.onResolved(value)
              });
            }, 0);
          }
        }

        function reject(reason) {
          if (_this.status !== PENDING) {
            return
          }
          _this.status = REJECTED
          _this.data = reason
          if (_this.callbacks.length > 0) {
            setTimeout(() => {
              _this.callbacks.forEach(callbacksObj => {
                callbacksObj.onRejected(reason)
              });
            }, 0);
          }
        }
        
        try {
          executor(resolve, reject)
        } catch (error) {
          reject(error)
        }
      }

      Promise.prototype.then = function (onResolved, onRejected) {
      
        onResolved = typeof onResolved === 'function' ? onResolved : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
          throw reason
        }
        
        const _this = this
        
        return new Promise((resolve, reject) => {
        
          function handle(callback) {
            try {
              const result = callback(_this.data)
              if (result instanceof Promise) {
                result.then(resolve, reject)
              } else {
                resolve(result)
              }
            } catch (error) {
              reject(error)
            }
          }
          
          if (_this.status === RESOLVED) {
            setTimeout(() => {
              handle(onResolved)
            }, 0);
          } else if (_this.status === REJECTED) {
            setTimeout(() => {
              handle(onRejected)
            }, 0);
          } else {
            _this.callbacks.push({
              onResolved(value) {
                handle(onResolved)
              },
              onRejected(reason) {
                handle(onRejected)
              }
            })
          }
        })
      }

      Promise.prototype.catch = function (onRejected) {
        return this.then(undefined, onRejected)
      }
      
      Promise.resolve = function (value) {
     	 return new Promise((resolve, reject) => {
      		if (value instanceof Promise) {
      			value.then(resolve, reject)
      		} else {
      			resolve(value)
     		}
     	 })
      }
      
      Promise.reject = function (reason) {
        return new Promise((resolve, reject) => {
          reject(reason)
        })
      }      
      
      Promise.all = function (promises) {
      	const values = new Array(promises.length) 
      	let resolveCount = 0
      	return new Promise((resolve, reject) => {
      		promises.forEach((p, index) => {
      			Promise.resolve(p).then(value => { 
      				resolveCount++ 
      				values[index] = value
      				if (resolveCount === promises.length) {
      					resolve(values)
      				}
     			 }, reason => {
     				 reject(reason)
      				})
      			})
      		})
      	}
      	
      	Promise.race = function (promises) {
            return new Promise((resolve, reject) => {
              promises.forEach((p, index) => {
                Promise.resolve(p).then(value => {
                  resolve(value)
                }, reason => { 
                  reject(reason)
                })
              })
            })
          }
      
    })(window)
```

