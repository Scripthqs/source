# Vue生命周期

Vue实例有一个完整的生命周期，从开始创建，初始化数据，编译模板，挂载DOM，渲染-更新-渲染，卸载等一系列过程。

1. beforeCreate 创建前，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。
2. created 创建后，vue实例的数据data有了，el还没有
3. beforeMount 挂载前，
4. mounted 挂载后
5. beforeUpdate 数据更新前
6. updated 数据更新后
7. beforeDestroy 销毁前
8. destroyed 销毁后

- `new Vue`
- `hook`钩子，生命周期函数又称为钩子函数。

方法和函数的区别：

- 方法（method）：对象中的函数是方法。
- 函数（function）：函数是一个具体特定功能的对象。
