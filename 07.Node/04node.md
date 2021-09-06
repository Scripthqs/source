# Node模块化

## 1.node模块的定义

在node中，一个js文件就是一个模块。

**ES6**标准发布后，**module成为标准**，标准使用是以**export指令导出**接口，以**import引入**模块。

**但是在我们一贯的node模块**中，我们依然采用的是**CommonJS规范**，使用**module.exports导出**接口，使用**require引入**模块，

## 2.如何使用node模块

- 通过require()函数引入外部的模块，传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
- 如果使用相对路径，必须以.或..开头
- 使用require()引入模块后，该函数会返回一个对象，这个对象代表的是引入的模块
- 在node中，每一个文件中的js代码独立运行在一个函数中，一个模块中给的变量，其他模块不能直接访问
- 需要通过exports或者module.exports向外部暴露变量和方法，需要将暴露的变量和方法设置为exports的属性

## 3.exports和module.exports的区别

**require方能看到的只有module.exports这个对象，它是看不到exports对象的，而我们在编写模块时用到的exports对象实际上只是对module.exports的引用。**

```js
console.log(exports === module.exports)//true
```

- 通过exports只能使用.的方式来向外暴露内部变量
- module.exports既可以使用.的形式，也可以直接赋值

## 4.node模块的分类

模块分为三大类：

- **核心模块**：由node引擎提供，核心模块的标识就是模块的名字
- **文件模块**：由用户自己创建的模块，文件模块的标识就是文件的路径，相对路径必须以.或..开头
- 自定义模块：开发者自己编写
