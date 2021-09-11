# class

## 1 class简介

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 **class 关键字，可以定义类**。基本上，ES6 的 class 可以看作只是 一个**语法糖**，它的绝大部分功能，ES5 都可以做到，新的 class 写法只是让对象 原型的写法更加清晰、更像**面向对象编程**的语法而已。

1. class 声明类
2. constructor 定义构造函数初始化
3. extends 继承父类
4. super 调用父级构造方法
5. static 定义静态方法和属性，属于类，不属于实例对象
6. 父类方法可以重写

```js
    class Phone {
      // static 定义静态方法和属性
       staic msg = 'hello world'
      //构造方法
      constructor(brand, color, price) {
        this.brand = brand
        this.color = color
        this.price = price
      }
      //对象的方法只能使用ES6的简写形式
      call() {
        console.log('我可以打电话')
      }
    }
    let HuaWei = new Phone('HuaWei', 'gold', 49999)
    console.log(HuaWei)
    
```

## 2 class类的继承

```js

   class Phone {
      constructor(brand, price) {
        this.brand = brand
        this.price = price
      }
      call() {
        console.log('我可以打电话')
      }
      game() {
        console.log('我可以打游戏')
      }
    }   
    //extends 继承父类
    class smartPhone extends Phone {
      constructor(brand, price, color, size) {
      //super 调用父级构造方法
        super(brand, price)
        this.color = color
        this.size = size
      }
      photo() {
        console.log('我可以拍照')
      }
      // 父类方法可以重写
      call() {
        console.log('我可以免费打电话')
      }
    }
    const xm = new smartPhone('mi', 3999, 'black', 9)
    console.log(xm)
    xm.call()
    xm.game()
```

## 3 class的getter和setter

```js
    class Person {
      get name() {
        console.log('name被读取了')
        return 'xiaoming'
      }
      set name(newName) {
        console.log('name被修改了')
      }

    }
    let p = new Person()
    console.log(p.name)
    p.name = 'zhangsan'
    console.log(p.name)
```

## 4 Object.defineProperty()

`Object.defineProperty()`是用来在一个对象上添加一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

```js
Object.defineProperty(修改的对象,'对象的属性名'，{属性描述对象})
```

**属性描述对象提供6个元属性**

- value 是该属性的属性值，默认为undefined

- writable 控制属性是否可以被删除，默认值是false

- enumerable 控制属性是否可以被枚举，默认值是false

- configurable 控制属性是否可以被删除，默认值是false

- get  表示该属性的取值函数（`getter`），默认为`undefined`。

- set  表示该属性的存值函数（setter），默认为`undefined`。

```
        let num = 18
        let person = {
            name: '张三',
            gender: '男',
        }
        Object.defineProperty(person,'age',{
            // value: 18,
            // enumerable: true,//控制属性是否可以被枚举，默认值是false
            // writable: true,//控制属性是否可以被修改，默认值是false
            // configurable: true,//控制属性是否可以被删除，默认值是false
            get(){//当有人读取age属性时，get函数（getter）会被调用，且返回值就是age的值
                console.log('有人读取了age属性');
                return num
            },
            set(value){//当有人修改了age属性时，set函数（setter）会被调用，且会收到修改的具体值
                console.log('有人修改了age属性，且值是' + value);
            }
        })

        console.log(person);
```

- 当有人读取age属性时，get函数（getter）会被调用，且**返回值就是age**的值
- 当有人修改了age属性时，set函数（setter）会被调用，且会收到修改的具体值

- Object.defineProperty()将num和person绑定在一起，这就是Vue框架中，数据代理的原理

