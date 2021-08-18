# less

## 1、less介绍

less是一门css预处理语言，less是css增强版，通过less可以编写更少的代码实现更强大的样式。

常见的css预处理器：sass、less、stylus

## 2、less变量

变量时指没有固定的值，可以改变的。因为css中的一些颜色和数值经常使用。

```css
	@变量: 值;
```

- 必须有@为前缀
- 不能包含特殊字符
- 不能以数字开头
- 大小写敏感













- 原生css支持设置变量，语法`--*`：
  - `--color:red`
- 后面通过var引用，语法`var(--*)`
  - `var(--color)`
-  原生css支持计算，计算函数：
  - `calc()`

less中添加了许多的新特性，语法大体和css一致，但是less增添了许多css的扩展，浏览器不能直接执行less代码，要执行必须将less转化css，再由浏览器执行。在 `vscode`下载`Easy LESS`插件。
- 创建`style.less`的文件，文件名必须是`.less`
- 保存时插件会自动生成一个`.css`文件
- //是less的单行注释，/**/多行注释
- 在变量中可以存储一个任意的值，方便修改
- 变量的语法：`@变量名:变量值;`，变量值可以时颜色、尺寸|、路径、属性名等等
  - 一般使用时，直接写`@变量名`即可，方便修改。
  - 作为类名或一部分值使用时，`@{变量名}`使用。
- 可以在变量声明前就使用变量
- `&`相当于自身外边那个选择器
- `:extend()`为当前选择器扩展分组
- `.选择器();`直接对指定样式进行引用，`mixin`混合
- 使用类选择器时可以在选择器后面加一个括号，此时就创建了一个minxi函数。
  - `.xuzeqi(){}`，之后直接引用。`.xunzeqi;`
- `average()`可以取值的平均值。可以填两个颜色。
- `darken(red,20%)`可以加深颜色
- less中可以直接将所有数值直接运算`+ - * /`，less除法时需要用括号括起来。
- `@import "其他less路径"`可以将其他的less引入到当前的less中。
-    `.map`
````less
      "less.compile": {
        "compress": false, // true => remove surplus whitespace
        "sourceMap": true, // true => generate source maps (.css.map files)
        "out": true // false => DON'T output .css files (overridable per-file, see below)
    }
````

### minxi混合函数
在混合函数中可以直接设置变量
````less
.test(@w,@h){
    width:@w;
    height:@h;
}
div{
    .test(200px,100px);
}
````
调用混合函数，按照顺序传递参数。可以直接把名字写好，此时就不用按顺序。
````less
.test(@w,@h){
    width:@w;
    height:@h;
}
div{
    .test(@w:200px,@h:100px);
}
````
定义值，定义几个必须传几个参数，可以在定义时直接指定默认值。
````less
.test(@w:200px,@h:100px){
    width:@w;
    height:@h;
}
div{
    .test(200px);
}
````
