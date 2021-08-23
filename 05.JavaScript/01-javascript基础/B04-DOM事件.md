# DOM事件

## 1、事件的简介

用户和浏览器之间的交互行为。点击某个元素、鼠标移动，关闭弹窗等等。

JavaScript是以事件驱动为核心的语言。js和html之间的交互是通过事件实现的。

我们可以在事件对应的属性中，设置一些JS代码，当事件被触发时，这些代码将会执行。

事件的三要素：事件源、事件、事件驱动程序

- 网页上弹出一个广告，我点击右上角的X，广告就关闭了。这件事情里，事件源是：X。事件是：onclick。事件驱动程序是：广告关闭了。
- 谁引发的后续事件，谁就是事件源。

1. 获取事件源：`document.getElementById("box");
2. 绑定事件：`事件源.事件 = function(){事件的驱动程序}`
   - box.onclick = function(){alert("box被点击")};
3. 书写事件驱动程序：关于DOM的操作

## 2、事件对象event

当事件的响应函数被触发时，会产生一个事件对象event。浏览器每次都会将这个事件event作为实参传递给之前的响应函数。

这个对象中，包含了与当前事件相关的一切信息，比如鼠标的坐标、键盘的哪个按键被按下、鼠标滚轮滚动的方向。

- 所有浏览器都支持event对象
- 普通浏览器写法：`event`
- IE8及以下写法：`window.event`
- 兼容的写法：`event = event || window.event;`

事件对象的常用属性：

- `timeStamp`返回事件生成的日期和事件
- `bubbles`返回布尔值，指示事件是否时冒泡事件类型
- `button`返回事件被触发时，哪个鼠标按钮被点击
- `target`该事件被传送到的对象
- `type`事件的类型
- `pageX`和`pageY`光标在该网页的距离
- `clientX`和`clientY`光标在可视区域的距离
- `screenX`和`screenY`光标相对于浏览器的距离

## 3、事件的冒泡Bubble

- 指事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发。
- `div -> body -> html -> document -> window`
- 从开发的角度，冒泡多数情况是有用的。
- `event.cancelBubble = true;`可以取消冒泡

## 4、事件的委派（委托）

- 将事件统一绑定给元素的共同祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素，通过祖先元素的响应函数来处理事件。
- 事件的委派利用了冒泡的原理，通过委派减少事件的绑定次数，提高程序的性能。
- 如果触发事件的对象是我们期望的元素，则执行,否则不执行。
- event中的target表示触发事件的对象。

## 5、事件的绑定（注册）

绑定（注册）事件的两种方式：

- `onclick`
  - `element.onclick = functon(){}`
  - `DOM对象.事件 = 函数`的这种绑定事件的方式，一个元素的一个事件只能绑定一个响应函数。绑定多个时，后者会覆盖前者。

- `addEventListener`
  - `element.addEventListener("click",function(){},false);
  - 需要3个参数(IE8及以下不支持)
  - 1：事件的字符串（不要on）
  - 2：回调函数，当事件触发时，该函数会被执行
  - 3：true表示捕获阶段触发，false表示冒泡阶段触发（默认），如果不写，就是默认值。

- `attachEvent`
  - element.attachEvent("onclick",function(){});
  - 需要两个参数（IE8及以下版本浏览器）
  - 1事件的字符串（要on）
  - 2回调函数：当事件触发时，该函数会被执行
  - 注意：执行顺序是，后绑定的先执行。
  - attachEvent()中的this，是window

## 6、事件的传播

事件的传播有3个阶段：事件捕获、冒泡、目标。

- 事件捕获阶段：事件从祖先元素往子元素查找（DOM树）结构，直到捕获到事件目标target。在这个过程中，默认情况下，事件相应的监听函数是不会被触发的。
  - 捕获顺序`window->document->html->body->父元素、子元素、目标元素`
- 事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数
- 事件的冒泡阶段：事件从事件目标target开始，从子元素依次触发祖先元素。
  - 冒泡顺序`div->body->html->document`

重点：

- 第一个接收到事件的对象是window
- js中设计到DOM对象时，有两个对象最常用：window、document。它们两个是最先获取到事件的。

## 7、鼠标事件

鼠标拖拽事件：

- `onmousedown`当鼠标按下时，开始拖拽、
  - 获取`e.pageX - box1.offsetLeft`
  - 获取`e.pageY - box1.offsetTop`
- `onmousemove`当鼠标移动时，元素跟随鼠标移动
  - `box1.style.left = e.pageX - ox + "px";`
  - `box1.style.top = e.pageY - oy + "px";`
- `onmouseup`当鼠标松开时，元素固定在当前位置
  - `document.onmousemove = null;`

鼠标滚轮事件：

- `onmousewheel`鼠标滚动的事件，会在滚轮滚动时触发，但是火狐不支持该属性。
- `DOMMouseScroll`在火狐中使用`DOMMouseScroll`。注意该事件需要通过addEventListener()函数来绑定。
- 一般情况下，监听wheelDelta的正负值，就可以确定鼠标滚轮的滚动方向。

````js
    document.addEventListener('mousewheel', function (event) {
              console.log(event.wheelDelta)//向下滚<0
    }, false)
````

- 火狐浏览器鼠标滚轮的信息保存在detail属性里面

````js
    document.addEventListener('DOMMouseScroll',function(event){
              console.log(event.detail)//向下滚>0
    },false)
````

- 通过addEventLister()方法绑定的响应函数，取消默认行为不能使用`return false`，而是使用`event.preventDefault();`

## 8、键盘事件

- `onkeydown`按键被按下
- `onkeyup`按键被松开
- 键盘事件一般都会绑定给一些可以获取焦点的对象或者document
- 如果一直按住某个键不松手，那么`onkeydown`事件会一直触发。
- 当onkeydown连续触发时，第一次和第二次之间会间隔稍微长一点，后续的间隔会非常快。这种设计是为了防止误操作的发生。

判断键盘哪个键被按下：

- `altKey`返回当事件被触发时，"ALT" 是否被按下。
- `shiftKey`返回当事件被触发时，"SHIFT" 键是否被按下
- `ctrlKey`返回当事件被触发时，"CTRL" 键是否被按下
- 如果按下则返回true，否则返回false。

通过event事件对象的key来获取按键。（keycode已弃用）

- `event.key`直接返回按键的字符串

在文本框中输入内容，属于onkeydown中默认行为，如果使用`return false`，则文本框不能输入内容。