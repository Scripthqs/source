# DOM操作

## 1、DOM查询

- `innerHTML` 这个属性可以获取到元素内部的html代码，对于自结束标签没有意义
- 如果需要读取元素节点属性：`元素.id` `元素.name` `元素.value`
- class属性不能采用这种方式，读取class采用：`元素.className`

获取元素节点的子节点

- `元素.getElementsByTagName('li');`
- `子节点数组 = 父节点.childNodes;`  获取所有子节点。根据DOM，标签中的空白和换行也会当成文本节点。
- `子节点数组 = 父节点.children;` 获取当前元素的所有子元素
- `.innerHTML`和`.innerText`的区别，innerText没有标签，只有文本
- 在事件的响应函数中，响应函数是给谁绑定的，this就是谁

## 2、获取 html 文档

- `document.title` 获取文档标题
- `document.head` 获取文档的头标签
- `document.documentElement;`获取html根标签
- `document.body;`获取body标签
- `documment.all;`获取页面中所有元素
- `var div = document.querySelector(".box1 div");`这个方法总会返回第一个元素，兼容IE8及以上
- `var div = document.querySelectorAll(".box1 div");`这个方法会返回符合条件的数组，兼容IE8及以上

## 3、DOM的增删改

- `createElement()`创建元素节点
- `createTextNode()`创建文本节点
- `元素.innerHTML="新标签"`
- `appendChild()`把新的子节点添加到指定节点
- `父节点.insertBefore(前节点,后节点)`在指定的子节点前面插入新的子节点
- `父节点.replaceChild(新节点,旧节点)`在指定的子节点前面插入新的子节点
- `父节点.removeChild(新节点,旧节点)` 删除指定节点
- `需要删除的节点.parentNode.removeChild(需要删除的节点);`
- 使用innerHTML也能完成DOM增删改的相关操作
- `父元素.innerHTML += "<li>新标签</li>";` 但是修改的内容较大
- 一般会将两种方法结合使用
- 在响应函数的末尾加`return false;`可以取消默认行为
- `confirm("确认删除吗?")`可以弹出确认取消框

## 4、DOM操作CSS

通过JS修改元素的样式

- 内联样式
  - `元素.style.样式名 = "样式值"`
  - 如果CSS中的样式名中含有`-`，比如`background-color`，需要将这种样式名修改为驼峰命名法,`backgroundColor`
  - `border-top-width`修改为`borderTopWidth`
  - w3cschool中css的参考手册可以查到
  - 通过这种方法设置的样式是内联样式，具有较高的优先级
  - 通过`元素.style.样式名`可以读取内联样式的属性值
  - `元素.style["属性"];`这种方法读取更加灵活
  - 这两种方法返回的属性值都是字符串，并且带单位
- 元素当前显示的样式
  - `元素.currentStyle.样式` 但是这种方法只有IE才能用
  - `getComputedStyle()`这个方法IE9以上及其他浏览器可以使用，这是window的方法，可以直接使用，需要两个参数
    - 需要获取的样式
    - 可以传递一个伪元素，一般都传null
    - 该方法会返回一个对象，对象封装了当前元素对应的样式
    - `getComputedStyle(box1,null).width`
    - 该方法或获取真实的值，而不是默认值，比如宽度，不会获取auto，而是真实的像素值