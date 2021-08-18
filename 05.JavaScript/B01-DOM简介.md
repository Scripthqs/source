# DOM简介

Javascript基础分为3个部分：

- ECMAScript:JavaScript的语法标准，包括变量、表达式、运算符、函数、if语句、for语句。
- DOM：文档对象模型(Document  Object Model)，操作网页上的元素的API。比如让盒子移动、变色、轮播图等。
- BOM：浏览器对象模型(Browser Object Model)，操作浏览器部分功能的API。比如让浏览器自动滚动。

JS通过DOM来对HTML文档进行操作，只要理解DOM就可以操作WEB页面。

- Document文档：文档表示整个HTML网页文档。
- Object对象：将网页中每一个部分都转换成了对象，网页中的标签、文本、注释都是对象。

- Model模型：使用模型来表示对象之间的关系，这样方便我们获取对象。

## 1、解析过程

HTML加载完毕，渲染引擎会在内存中把HTML文档生成一个DOM树，getElementById是获取内中BOM上的元素节点。然后操作的时候修改该元素的属性。DOM的作用：

- 找对象（元素节点）
- 设置元素的属性值
- 设置元素的样式
- 动态创建和删除元素
- 事件的触发响应：事件源、事件、事件的驱动程序

## 2、节点

节点(node)：构成元素HTML网页的最基本单元。网页中的每一个部分都可以称为一个节点，比如：HTML标签、属性、文本、注释、整个文档都是一个节点。

节点的分类：

- 文档节点（文档）：整个HTML文档。
- 元素节点（标签）：HTML标签。
- 属性节点（属性）：元素的属性。
- 文本节点（文本）：HTML标签中的文本内容（包括标签之间的空格、换行）。

节点的类型不同，属性和方法也不同，所有的节点都是Object。

节点的属性：

|              | nodeName  | nodeType | nodeValue |
| :----------: | :-------: | :------: | :-------: |
| **文档节点** | #document |    9     |   null    |
| **元素节点** |  标签名   |    1     |   null    |
| **属性节点** |  属性名   |    2     |  属性值   |
| **文本节点** |   #text   |    3     | 文本内容  |

DOM由节点组成，在HTML中，一切都是节点。

## 3、元素节点的获取

浏览器为我们提供文档节点对象，这个对象是window的属性。可以在页面中直接使用，文档节点代表的是整个网页。

- `console.log(document)` 文档对象
- 通过document对象找到元素节点
- `var div1 = document.getElementById("box1");`通过 id 获取 一个 元素节点（为什么是一个呢？因为 id 是唯一的）
- `var div2 = douument.getElementsByTagName("div")`通过 标签名 获取 元素节点数组，所以有s
  - 这个方法会给我返回一个类数组对象，所有查询的元素都会封装到对象中。
- `var div3 = document.getElementsByClassName("haha")` //方式三：通过 类名 获取 元素节点数组，所以有s，ie8及以下不支持
- 都是通过document调用的

## 4、浏览器加载顺序

浏览器加载页面是按照从上到下的顺序加载的，如果将script标签写在页面上边，代码执行时，页面还没加载。

- 可以为window绑定一个onload事件，该事件对应的响应函数将会在页面加载完毕后执行
- `window.onload = function(){}`