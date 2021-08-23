# Symbol和BigInt

ES5之前，只有6种数据类型，ES6之后，到目前为止（2021），JavaScript一共有8种数据类型。

其中，基本数据类型

- **`String` 字符串**
- **`Number` 数值**
- **`Boolean` 布尔值**
- **`Null` 空值**
- **`Undefined` 未定义**
- **`Symbol` (ES6) 独一无二的值类型。**
- **`BigInt` (ES10) 大整数基本类型。**

引用数据类型

- **`Object` 对象**

## 1、Symbol

Symbol 是一种在ES6 中新添加的数据类型，本质上是一种**唯一标识符**，可**用作对象的唯一属性名，这样其他人就不会改写或覆盖你设置的属性值。**

### 1.1、定义方法

```
    let id = Symbol(‘id’); //在创建symbol类型数据时的参数只是作为标识使用，所以不要参数也是可以的。
```

### 1.2、特性

1，唯一性（即使是用同一个变量生成的值也不相等）

```
    let id1 = Symbol('id');
    let id2 = Symbol('id');
    console.log(id1 == id2);  //false
```

2，隐藏性（for···in，object.keys() 不能访问）

```
    let id = Symbol("id");
    let obj = {
    	[id]:'symbol'
    };
    for(let option in obj){
    console.log(obj[option]); //空
    }
```

> 但是也有能够访问的方法：Object.getOwnPropertySymbols

### 1.3、常用方法

**1， Object.getOwnPropertySymbols(对象)**
返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值

```js
    let id = Symbol("id");
    let obj = {
    	[id]:'symbol'
    };
    let array = Object.getOwnPropertySymbols(obj);
    console.log(array); //[Symbol(id)]
    console.log(obj[array[0]]);  //'symbol'
```

**2，Symbol.for()**
全局注册并登记，使得相同参数注册的值symbol相等。

```js
    let name1 = Symbol.for('name'); //检测到未创建后新建
    let name2 = Symbol.for('name'); //检测到已创建后返回
    console.log(name1 === name2); // true
```

**3，Symbol.keyFor()**
通过symbol对象获取到参数值

```
    let name1 = Symbol.for('name');
    let name2 = Symbol.for('name');
    console.log(Symbol.keyFor(name1));  // 'name'
    console.log(Symbol.keyFor(name2)); // 'name'
```

## 2、BigInt

BigInt数据类型提供了一种方法来表示大于2^53-1的整数。BigInt可以**表示任意大的整数**。

### 2.1、作用

Number类型只能安全的支持-9007199254740991(-(2^53-1)) 和 9007199254740991(2^53-1)之间的整数，任何超过这个范围的数值都会失去精度；而BigInt可以解决这个问题

```
console.log(9007199254740999) //9007199254741000
console.log(9007199254740993===9007199254740992) //true
12
```

上图，当数值超过Number数据类型支持的安全范围值时，将会被四舍五入，从而导致精度缺失的问题

### 2.2、使用方法

- **1.在整数的末尾追加n**

  ```js
  console.log(9007199254740999n)//9007199254740999
  1
  ```

  **2.调用BigInt()构造函数**

  ```js
  var bigInt = BigInt("9007199254740999");      //传递给BigInt()的参数将自动转换为BigInt:
  console.log(bigInt) //9007199254740999n    
  12
  ```

- **注意事项**
  1，BigInt除了不能使用一元加号运算符外，其他的运算符都可以使用

  ```js
   console.log(+1n)            // Uncaught TypeError: Cannot convert a BigInt value to a number
   console.log(-1n)            //ok
  ```

  2，BigInt和Number之间不能进行混合操作

  ```js
  console.log(1n+5)
  ```

