# offset、scroll、client

## 1、offset系列

offset：偏移、补偿、位移，offset 系列是 js 中的一套**获取元素尺寸**的便捷办法。

- `offsetWidth` width + padding + border不包括margin
- `offsetHeight` Height + padding + border不包括margin
- `offsetLeft` 当前元素相对于其包含块的水平偏移量
- `offsetTop`当前元素相对于其包含块的垂直偏移量
  - **从父亲的 padding 开始算起，父亲的 border 不算在内**
- 上面4个方法返回的是数字，不带单位
- 上面4个方法是只读的,`.style`才可以赋值
- `offsetParent`获取当前元素的包含块。

## 2、scroll系列

- `scrollWidth` 获取元素整个滚动区域的宽度。包括 width 和 padding，不包括 border和margin。
- `scrollHeight` 获取元素整个滚动区域的高度。包括 width 和 padding，不包括 border和margin。
- `scrollLeft`获取水平滚动条滚动的距离。
- `scrollTop`获取垂直滚动条滚动的距离。
- 同样上面的方法返回值都是数字，不带单位

- 当某个元素满足scrollHeight - scrollTop == clientHeight时，说明垂直滚动条滚动到底了。
- 当某个元素满足scrollWidth - scrollLeft == clientWidth时，说明水平滚动条滚动到底了。

在谷歌浏览器中，上面的等式似乎有些问题，清除浏览器默认样式后，将`==`改成`<=`，等式才能成立，也可以说明滚动条滚到底。

## 3、client系列

- `clientHeight` 返回元素的可见高度（width + padding）。
- `clientWidth` 返回元素的可见宽度（height + padding）。
- 当body/html 元素调用时，获取的网页可视区域宽度和高度。
- `clientX` 鼠标距离可视区域左侧距离。
- `clientY` 鼠标距离可视区域上侧距离。
- `clientTop` 盒子的上border。
- `clientLeft` 盒子的左border。
- `pageX = clientX + scrollLeft`(IE不支持)
- `pageY = clientY + scrollTop`(IE不支持)