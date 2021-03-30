## CSS基础知识
CSS(Cascading Style Sheets)层叠样式表，网页实际上是一个多层结构，通过CCS可以将网页的每一层来设置样式，最终我们只能看到网页的最上面一层。
- CSS的属性语法：`属性：属性值;` 多个属性之间用`;`隔开，多个属性值用`,`隔开。
- HTML的属性语法：`属性="属性值"` 多个属性之间用**空格**隔开

CSS修改样式的方法
1. 内联样式（行内样式）：在标签内部通过`style`属性来设置元素的样式。样式只对一个标签生效，维护不方便。**开发时，绝对不能使用内联样式。**
2. 内部样式表：将样式写到`head`中的`style`标签中，通过CSS选择器选中元素并为其设置样式，但是只能对当前页面起作用。
3. 外部样式表：创建一个`.css`文件，再通过`<link ref="stylesheet" href=".css">`引入样式。将样式编写到外部的css中可以使用浏览器的缓存机制，从而加快网页的加载速度。开发中都用这种方法。

### CSS的基本语法
CSS有选择器和声明块。选择器可以选中页面中的指定元素，声明块中通过一个个声明组成，声明也是一个名值对。

### CSS单位
html的单位只有像素px一种，可以省略不写。CSS没有没有单位，所以必须要写。单位分为绝对单位和相对单位。
- 像素：相对单位，跟显示器的分辨率有关。单位px
- 百分比：可以设置属性相对于父元素的百分比
- em：相对于元素的字体大小来计算的。1em=1font-size,em会根据字体大小改变而改变
- rem：相对于根元素的字体大小来计算，即html的字体大小。


### font字体属性
CSS中有很多非布局样式，包括：字体、行高、颜色、背景、边框、滚动、换行、装饰（粗体、斜体、下划线）。常见的字体属性有以下几种：
````css
p{
    color:red;/*设置前景色，一般用于设置字体颜色*/
    font-size: 50px;/*字体大小*/
    line-height: 30px;/*行高*/
    font-family: 华文行楷,黑体;/*字体类型*/
    font-style: italic;/*italic表示斜体，normal表示不倾斜*/
    font-weight: bold;/*粗体*/
    font-variant: small-caps;/*小写变大写*/
}
````
- CSS的注释：`/* 我是注释*/`
- HTML的注释：`<!--我是注释-->`

#### 字体族font-family
字体族就是字体的样式，可选值有：
- `serif`：衬线字体（字有些勾）
- `sans-serif`：非衬线字体
- `monospace`：等宽字体（字母的宽度一样）

font-face可以将服务器中的字体直接提供给用户使用，会有两个问题：
- 加载速度
- 版权问题
````css
@font-family{
  font-family:'myfont';//指定字体的名字
  src:url('服务器字体路径);
}
````
字体的格式一般都是`.ttf`。

### 图标字体
图标字体(iconfont)：在页面中使用一些图标，可以将图标直接设置为字体，通过`font-face`的形式来对字体引入，可以使用字体的形式使用图标。图标字体库：font awesome使用方法：
1. 下载解压
2. 将CSS和webfonts移动到项目中，必须在同一级目录下
3. 使用link将all.css引入网页
4. 直接通过类名使用图标字体，一般有两种，在两种格式中尝试。
   - fab:`<i class=fas fa-bell></i>`
   - fas:`<i class=fab fa-bell></i>`
5. 通过伪元素设置图标字体,一般有两种：
   - 找到要设置的图标元素通过before或after选中
   - 在content中设置字体编码`一定要加反斜杠`（\字体编码）
   - 设置字体的格式
````css
span::before{
  content:"/字体编码";
  font-family: 'Font Awesome 5 Brands';//fab格式
  font-family: 'Font Awesome 5 Free';//fas格式
  font-weight: 900;
}
````
6. 通过实体来使用图标字体，`&#x字体编码;`一般有两种：
   - fab:`<i class=fab>&#x字体编码</i>`
   - fas:`<i class=fas>&#x字体编码</i>`
7. 通过改字体的方式更改图标字体的样式

#### iconfont(国内阿里的图标字体库)
- 通过实体来使用图标字体，`&#x字体编码;`
  - `<i class=iconfont>&#x字体编码</i>`
- 通过类名使用图标字体
  - `<i class=iconfont 字体></i>`
- 通过伪元素设置图标字体
````css
span::before{
  content:"/字体编码";
  font-family:'iconfont';
  font-size:100px;
  }
````
- 可以在线引用直接复制粘贴就可以了

#### 行高(line height)
行高指的是文字占有的实际高度，可以通过`line-height`属性设置行高。
- 行高可以直接指定一个大小（px em)
- 可以直接设置一个整数，行高将会是字体大小指定的倍数。
- 行高经常用来设置文字的行间距
  - `行间距=行高-字体大小`

#### 行框（字体框）
字体框就是字体存在的格子，设置`font-size`实际就是在设置字体框的高度。行高会在字体框的上下平均分配。

CSS中所有行都有行高，盒子模型的padding不是直接作用到文字上，而是作用到行上的。行高、字号，一般都是偶数。这样可以保证，它们的差一定偶数，就能够被2整除。
- 单行文本垂直居中的方法：**设置行高 = 盒子高**。
- 如果想让多行文本垂直居中，还需要计算盒子的padding。`padding=（盒子高度-行高*行数）/2`
- `vertical-align: middle;` 属性可用于指定行内元素（inline）、行内块元素（inline-block）、表格的单元格（table-cell）的垂直对齐方式。主要是用于**图片、表格、文本**的对齐。

关于字体属性需要注意以下几点：
- 网页中不是所有的字体都可以使用，要看用户的电脑有没有安装这个字体。
- 多个字体间使用`,`隔开，提供备用。
- 我们必须将英文的字体放在最前面，比如`Times New Roman`字体。
- 所有的英文字体都有英文别名。
  - 微软雅黑：`font-family:"Microsoft YaHei";`
  - 宋体：`font-family:"SimSun";`
- 行高可以用百分比，表示字号的百分之多少，一般都大于100%，因为行高一般都大于字号。`font:16px/200% "Mincrosoft YaHei";`等价于`font:16px/32px "Microsoft YaHei";`

#### 字体的加粗属性
- `font-weight: normal; /*正常*/`
- `font-weight: bold;  /*加粗*/`
- `font-weight: 100;`
- `font-weight: 900;`  

字体是否加粗可以使用normal或bold属性值，也可以写100-900的数字，400=normal，700=bold。

### 字体的简写属性
字号、行高、字体三大属性可以连写，`font: 字体样式 字重 字体大小/行高 '字体族，字体族';`
- `font: italic 400 14px/24px "宋体";`

其中：400是nomal，700是bold。 14px是字号，24px是行高。font属性连写至少要有字体大小和字体族，否则连写是不生效的。连写有顺序要求。前面也可以加`italic`斜体或者`normal`正常。

行高、样式、自重可以省略不写，如果不写，会使用默认值。此时会覆盖之前设置的行高。


### 文本属性
CSS中常见的文本属性有以下几种:
- `letter-spacing:0.5cm;`各字体之间的间距
- `letter-spancing:1cm;`单词之间的间距
- `text-transform:lowercase/uppercase/capitalize;`单词字体的大小写，capitalize表示首字母大写。
- `color:red;`字体颜色
- `text-align:center;`在当前容器的水平对齐方式，属性值可以是`left、right、center、justify`，justify表示两端对齐。
- `vertical-align: middle;`文字图片表单的垂直对齐属性，属性值可以是
  - `baseline`默认值，基线对齐
  - `top`顶部对齐
  - `bottom`底部对齐
  - `middle`居中对齐
- `text-decoration:none`文本修饰，还可以加上划线的颜色样式，但是IE不支持。
  - none：去掉下划线
  - underline：下划线
  - line-through：中划线
  - over-line：上划线
- `white-space`设置网页如何处理空白，属性值有:
  - `normal`默认值，正常
  - `nowrap`不换行
  - `pre`保留空白，会保留空格换行
````css
white-space:nowrap;
overflow:hidden;
text-flow:ellipsis;
````
这段代码让溢出的文字内容以省略号显示。

### 列表属性
`list-style-image:url(图片路径);`列表项前设置为图片。可以给再加一个`margin-left:80px;`属性让图片显示完整。

### overflow属性
`overflow`属性表示超出范围的内容怎么处理，属性值：
- `visible`：默认值，多余的内容不剪切不加滚动条全部显示出来。
- `hidden`：不显示多个尺寸的内容。
- `auto`；内容不超出不显示滚动条，超出显示滚动条。
- `scroll`：windows总是显示滚动条，Mac和auto一样。

### 鼠标属性
`cursor`鼠标的属性，属性值：
- `auto`：默认值，浏览器根据当前情况自动选择光标类型。
- `pointer`：手形鼠标

### 滤镜
让图片变成灰度图的效果，`<img src="图片路径" style="filter:gary()">`

### 常见的背景属性
- `background-color`：背景颜色
- `background-imge:url("图片路径")；`:背景图片
  - 可以同时设置背景颜色和背景图片，这样背景颜色会成为图片的背景颜色。
  - 如果背景图片小于元素，则背景图片会自动在元素中铺满
  - 如果背景图片大于元素，将会有一部分背景无法完全显示
  - 背景图片和元素一样大，则会直接正常显示

- `background-repeat`：设置图片背景是否重复以及如何重复，默认平铺满。
  - `repeat`：默认值，平铺
  - `no-repeate`：不要平铺
  - `repeat-x`：横向平铺
  - `repeat-y`：纵向平铺
- `background-positon`：设置背景图片在当前容器的位置，
  - 属性值：`top`、`left` 、`right`、 `bottom`、`center`，使用方位词必须同时指定两个值，如果只写一个值，第二个值默认是center。
  - 通过偏移量来指定图片的位置，跟垂直偏移量和水平偏移量。
- `background-clip`：裁剪，可选值：
  - `border-box`：默认值。背景会出现在边框下面
  - `padding-box`：背景不会出现在边框，只出现在内容区和内边距
  - `content-box`：背景只会出现在内容区
- `background-origin`：控制背景从什么地方开始显示，偏移量计算的原点，可选值：
  - `border-box`：从内边距开始显示
  - `padding-box`：从内容区处计算
  - `content-box`：从边框处开始计算 

- `background-size`：调整尺寸
  - 第一个值表示宽度
  - 第二个字表示高度
  - 只写一个值，第二个值默认是auto
  - `cover`：图片比例不变，图片在元素中铺满
  - `contain`：图片比例不变，将图片在元素中完整显示

- `background-attachment`：设置背景图片是否和滚动条一起移动
  - scroll(默认值，会)
  - fixed(背景会被固定住)
- `background`：可以将上面的属性写在一个声明里，简写属性：
  - background-size必须在background-position后面，并且使用`/`隔开`background-position/background-size`
  - origin和clip两个样式，orgin必须在clip前面。

#### background-color
背景颜色的表示方法有：
- 单词：red、black、gray、green、blue、orange
- RGB表示：三原色Red、Green、Blue，每个值取值到0~255
- RGBA：A代表Alpha，透明度，取值（0~1）
- 十六进制表示：以`#`开头的，#aabbcc能够简化成#abc
  - `#000黑` `#fff白` `#f00红` `#222深灰` `#333灰` `#ccc浅灰`
- HSLA 表示法
  - H 色调，取值范围 0~360。0或360表示红色、120表示绿色、240表示蓝色。
  - S 饱和度，取值范围 0%~100%。值越大，越鲜艳。
  - L 亮度，取值范围 0%~100%。亮度最大时为白色，最小时为黑色。
  - A 透明度，取值范围 0~1。

#### backgroud-repeat
- 默认时会铺满。
- 周期性的图片可以采用`backgroud-repeat:repeat-x;`此种方法进行平铺，实现渐变效果。

#### backgroud-positon 
背景定位属性，属性值可以用像素描述和用单词描述。
- 用像素描述：属性值可以是正数也可以是负数
   - `backgroud-position:向右偏移量 向下偏移量
- 用单词描述属性值
  - background-position：描述左右的词 描述上下的词
  - 左右：left、center、right
  - 上下：top、center、bottom

使用场景：对于网站首页都会有banner图，对于通栏banner，横向宽度一般特别大，直接作为img标签插入网页时，会有以下两个问题：
- 图片不在网页中间
- 会出现横向滚动条 

解决办法：  
- 设置图片高度，宽度会自动霸行
- 设置背景定位属性：`background-position: center top; `
````css
  div{
            height: 500px;
            background-image: url(图片路径);
            background-position: center top;
            background-repeat: no-repeat;
        }
````
#### background-attachment
设置图片是否固定，fixed和scroll

#### backgroud
一个综合属性，可以将多个属性写在一起。

#### background-size
设置背景图片的尺寸，属性值：
- 指定具体的宽高值
- 指定宽高的百分比
- cover：图片始终填满容器，保证长宽比不变，图片超出部分会被隐藏
- contain：将图片完整的显示在容器中，保证长宽比不变，可能导致容器部分留白。

#### background-origin
控制背景从什么地方开始显示。
- padding-box：默认值，内边距开始显示
- border-box：从边框开始显示，此时，边框部分也会显示图片
- content-box：从内容区开始显示

#### background-clip
设置背景元素（背景图片或颜色）是否延伸到边框下边。
background-clip：content-box；超出的部分将会被裁剪掉。属性值可以是：

#### 多个背景
可以给盒子设置多个背景，用`,`隔开，可用于自适应布局。

#### background-image（可以设置渐变）
通过渐变可以设置一些复杂的背景颜色，可以实现从一个颜色向其他颜色过渡的效果，**注意渐变是图片**。渐变属性，具有很强的适应性和可扩展性。

- 线性渐变：
  * `background-image:linear-gradient(方向，起始颜色，终止颜色);`
  * `background-omage:linear-gradinet(to right,red,yellow);`
  * 方向可以是：to right,to left,to top,to left,角度30deg(顺时针方向30°)
  * 不写方向时，默认从上到下
  
- 径向渐变：
  * `background-image:radial-gradident(辐射的半径大小，中心的位置，起始颜色，终止颜色);`
  * `background-image:radial-gradident(100px at center,yellow,green);`
  * 中心点的位置可以是：at left/right/center/bottom/top。如果以像素为单位，则中心点参照的是盒子的左上角。
  * 也可以通过`circle`、`ellipse`指定渐变的圆或椭圆形状。

- 重复渐变：
  * `repeating-linear-gradient()`可以平铺的线性渐变。
  * `background-image: repeating-linear-gradient(red 0px,yellow 50px);`

#### clip-path
裁剪出元素的部分区域做展示。`clip-path`虽然不是背景属性，但常常和背景属性搭配使用。即使做了任何裁剪，容器的占位是一样的。通过 `clip-path: (svg)` 可以导入svg矢量图，实现 iOS图标的圆角。

### 雪碧图
图片属于外部资源，外部资源都需要浏览器单独发送请求加载，浏览器加载外部资源是按需加载的，用则加载，不用则不加载。图片会出现短暂的闪烁。

解决方法：可以将多个小图片统一保存到一个大图片中，这样图片会同时加载在网页中，然后调整`background-position`，就可以避免闪烁问题。这个技术应用广泛，被称为`CSS-sprite`，这种图片称为雪碧图。使用步骤：
- 确定需要使用的图标
- 测量图标的大小
- 根据测量的结果创建元素
- 将雪碧图设置为元素的背景图片
- 设置偏移量以显示正确的图片

雪碧图特点：降低请求次数，加快访问速度，提升用户体验。

### CSS选择器
CSS四种基本选择器：
- 标签（元素）选择器
- 类选择器：`.`开头
- ID选择器：`#`开头
- 通用选择器：`*`，所有的元素

一般来说，类上样式，id上行为，css都使用class，js上使用id。

CSS的扩展选择器:
#### 复合选择器
  - 交集选择器：选择器之间紧密连接`div#类`，元素选择器开头
  - 并集选择器（分组选择器）：用逗号隔开`p,h1,.box1,#id`
#### 关系选择器
  - 后代选择器：使用空格隔开`ul li`
  - 子代选择器：`div>p`这能选儿子，和后代不同，但是可以多写一个`>`号
  - 下一个兄弟选择器：`兄+弟`
  - 选择下面所有的兄弟选择器：`兄~弟`
#### 属性选择器：
  - `元素[属性名]{}`选择含有这种属性的选择器，元素可以省略不写
  - `元素[属性名=属性值]{}`选择含有这种属性名和属性值的选择器，元素可以省略不写
  - `元素[属性名^=属性值]{}`选择这种属性值开头的选择器，元素可以省略不写
  - `元素[属性名$=属性值]{}`选择这种属性值结尾的选择器，元素可以省略不写
  - `元素[属性名$=属性值]{}`选择含有这种属性值的选择器，元素可以省略不写

#### 伪类
伪类代表不存在的类，特殊的类，伪类用来描述一个元素的特殊状态，比如：第一个子元素，被点击的元素，鼠标移入的元素。伪元素表示页面中特殊的不存在的元素（特殊的位置）。`::`开头。`:`开头代表伪类，`::`代表伪元素。

#### 伪类选择器：
- `:first-child{}`第一个子元素
- `:last-child{}`最后一个子元素
- `:nth-child(n){}`第n个子元素，
  - n 范围(0~+∞)
  - 2n或even 选择偶数位
  - 2n+1或odd 选择奇数位

以上的伪类都是根据所有的子元素排序的。
   - `:first-of-type`
   - `:last-of-type`
   - `:nth-of-type`

以上的伪类都是根据同类型的子元素排序的。
  
- `:not`否定伪类：将符合条件的去除掉

#### 超链接的伪类
静态伪类（前两种只有超链接能用）：
- `:link`: 超链接点击之前（正常的链接）.
- `:visited`：链接被访问过之后，由于用户隐私的原因只能改颜色，使用很少。
动态伪类：
- `:hover`：鼠标放到标签上的时候
- `:active`：鼠标点击标签，但是不松手时。
- `:focus`：是某个标签获得焦点时的样式（比如某个输入框获得焦点）

a标签有4种伪类：
- `:link`：超链接点击之前（正常的链接）。
- `:visited`：链接被访问过的。
- `:hover`：鼠标悬停在标签时。
- `:active`：鼠标点击标签，但是不松手时。

在css中，这四种状态必须按照固定的顺序，`a:link 、a:visited 、a:hover 、a:active`，否则失效，“爱恨准则”：love hate，先爱后恨。

#### 伪元素选择器
- `::first-letter`：表示第一个字母
- `::fitst-line`：表示第一行
- `::selection`：表示选中的内容
- `::before`：元素的开始
- `::after`：元素的最后
 - before和after必须结合content使用，很重要

### 继承
样式的继承，我们为一个元素设置的样式同时也会应用到它的后代元素。
- 关于文字样式的属性，都具有继承性，这些属性包括:color、 text-开头的、line-开头的、font-开头的。
- 关于背景、盒子、定位、布局的属性都不能继承

### CSS的层叠性
通过不同的选择器，选中相同的元素，并且设置不同的值时，此时就发出了样式的冲突。发生冲突时，由选择器的泉州决定。CSS层叠性就是解决CSS处理冲突的能力。选择器的权重：
- 内联样式：1000
- id选择器：100
- 类和伪类选择器、属性选择器：10
- 元素选择器、伪元素选择器：1
- 通配选择器：0
- 继承的样式：没有优先级

比较优先级时，需要将所有的选择器的优先级进行相加计算，最后优先级越高越优先显示（分组选择器单独计算）。
- 选择器的累加不进位（255个标签=1个类）。
- 优先级计算相同的，优先使用靠下的

可以在某个样式的后边添加`!important`，则这个样式会获得最高优先级，甚至超过内联样式。**开发时慎用。**

### 文档流
文档流(normal flow)：网页是一个多层的结构，一层叠着一层，通过CSS可以分别为每一次来设置样式。这些层中**最底下一层成为文档流**。元素有两种状态：
- 不在文档流中（脱离文档流）。
- 在文档流中。

元素在文档流中有哪些特点：
- 块元素
  - 在页面独占一行。
  - 默认宽度是父元素的100%。
  - 默认高度被内容（子元素）撑开。
- 行内元素：
  - 行内元素不会独占一行。
  - 行内元素在页面中从左向右水平排列，如果一行容纳不下换行(和我们书写方式一样)。
  - 行内元素的默认高度和宽度都是被内容撑开。不能设置宽高。
  
<img src="../material/html/标签分类.png">

可以通过`display`属性将块级元素和行内元素相互转换，属性：
- `inline`：将块元素转化成行内元素。
- `block`：将行内元素转换成块元素。


### 盒模型
盒模型（box model)，无论是div、span、a都是盒模型。图片和表单看作文本，并不是盒子。盒子的属性：
- width和height：内容区的宽度和高度，不是盒子的。
- border：边框。设置边框至少要设置3个样式。
  -  宽度（width）：`border-width`如果指定4个值：顺时针；指定3个值：上、左右、下；2个值：上下、左右；1个值：上下左右；也可以使用`border-top-width`、`border-right-width`、`border-bottom-width`、`border-left-width`可以分别指定上下左右的值。
  -  颜色（color）：颜色也可以指定上下左右，同宽度一样。
  -  样式（style）：属性值有solid（实线）、dotted（点状虚线）、dashed（虚线）、double（双线）。样式也可以指定上下左右，同宽度一样。
- padding：内边距。 
  - 内边距也有`top、right、bottom、left`四个方向。
  - 内边距会影响到盒子的大小。
  - 背景颜色会延伸到内边距上。
  - 盒子可见框的大小由内容区、内边距和边框共同决定。
- margin：外边距。
  - 外边距不会影响盒子可见框的大小，但会影响盒子的位置，影响盒子的实际框大小。
  - 外边距也有`top、right、bottom、left`四个方向。
  - `margin-top`设置正值向下走，`margin-left`设置正值向右走。移动自己。
  - `margin-bottom`设置正值向下走，可以把别的元素挤开。
  - `margin-right`，默认情况下，没用。

### 盒子的大小
默认情况下，盒子可见框的大小由内容区、内边距和边框共同决定。
`box-sizing`属性可以设置盒子尺寸的计算方式，属性值：
- `content-box`：默认值，`width`和`height`用来设置内区的大小。
- `border-box`：`width`和`height`是设置盒子可见框的大小，即设置的是内容区、内边距和边框的和。

### 轮廓阴影和圆角
- `outline`属性用来元素的轮廓，用法和`border`一样，但不会影响布局。一般和`:hover`配合使用实现一个鼠标移入效果。
````css
div:hover{
outline:1px solid red;
}
````
- `box-shadow`属性用来设置元素的阴影效果，也不会影响布局。
````css
box-shadow:10px 10px 50px rgba;//水平偏移量 垂直偏移量  阴影的模糊半径 阴影颜色`
````
- `border-radius`属性可以设置圆角，可以设置四个值，设置4个圆角。一般都值设置一个。设置50%可以设置为圆形。
````css
border-radius:50%;
````

### 盒子的水平布局
元素在其父元素中水平布局的位置必须满足：
- 子元素`margin-left` + `border-left` + `padding-left` + `width` + `padding-right` + `padding-right` + `margin-right` = `父元素内容区的宽度`
- 以上等式必须满足，如果相加结果等式不成立，则称为过度约束，等式会自动调整。
- 如果7个值中没有`auto`，浏览器会自动调整`margin-right`使等式成立。
- 7个值中有3个值`margin-right`、`widht`、`margin-left`可以设置成`auto`，设置成`auto`的值会自动调整。`width的默认值就是auto`。
- 如果将`width`和`margin-left或者margin-right`设置为`auto`，`width`会调整到最大。
- 如果3个值都设置成`auto`，外边距都是0，`width`最大。
- 如果`margin-left和margin-right`设置为`auto`，则两个值会相等。这个特点可以用来设置元素的水平居中。`margin:0 auto;`
- `marin-right`有可能是负值。

总结：
- 只要`width`设置了`auto`（width默认值也是auto），则`width`会最大。
- `margin:0 auto;`让盒子居中只有在文档流中才有效，脱离文档流后失效。
- `margin:0 auto;`并不能让文本居中，文本的居中，要使用`text-align:center;`
````css
div{
    margin:0 auto;    //让这个div自己在大容器中的水平方向居中。
    text-align: center;  //让这个div内部的文本居中。
}
````

### 盒子的垂直布局
- 默认情况下父元素的高度被内容撑开。
- 绝大多数父元素都是块元素。
- 块元素独占一行，默认宽度是父元素的100%。
- 子元素的大小超过了父元素，则子元素会从父元素中溢出。
- 溢出时，可以通过`overflow`属性设置父元素，属性值：
  - `visible`：默认值，子元素在父元素外部显示。
  - `hidden`：溢出的内容将被裁剪不会显示。
  - `scroll`：生成两个滚动条，通过滚动条查看完整内容。
  - `auto`：根据需要生成滚动条。
  
### 垂直外边距的折叠
相邻的垂直方向外边距会发生重叠现象。
- 兄弟元素之间垂直外边距（同号）会取两者之间（绝对值）最大值。异号取相加值。
- 父子元素之间的垂直外边距（上边距），子元素会传递给父元素。
- **`margin`这个属性，本质上描述的是兄弟和兄弟之间的距离； 最好不要用这个marign表达父子之间的距离。**
- **要表达父子之间的距离，我们一定要善于使用父亲的`padding`，而不是儿子的`margin`。**
- 只有竖直方向的`margin`才会有塌陷（叠加）现象。
- 当元素脱离文档流后，`margin`塌陷（叠加）现象会消失。兄弟元素的外边距始终会相加。

### 行内元素的盒模型
- 行内元素不支持设置宽高。
- 行内元素不会独占一行，所以设置`padding`、`border`和`margin`不会影响垂直页面布局。
- 可以通过`display`属性设置元素的类型。
  - `inline`：将块元素转化成行内元素。
  - `block`：将行内元素转换成块元素。
  - `inline-block`：既可以设置宽度和高度，又不会独占一行。但是还是要少使用。
  - `table`：将元素设置成表格。
  - `none`：元素不再页面中显示。
- 可以通过`visibility`属性设置的显示状态：
  - `visible`:默认值，元素在页面中正常显示。
  - `hidden`：元素在页面中隐藏，不显示但是依然占据页面的位置。

### 浏览器的默认样式
通常情况下，浏览器会为元素设置默认样式。默认样式的存在会影响页面的布局，通常情况下编写（PC端）网页时必须去除浏览器的默认样式。
- 通配选择器同时设置`margin:0;`和`padding:0;`可以去除大多数默认样式。
- `list-style`可以去除表格的项目符号。
- 通过`<link rel="stylesheet" href="重置样式表路径">`标签引入重置样式表。

### 脱离文档流
脱离文档流的方法：
- 浮动：`float:left`属性值可以是`left、right`
- 绝对定位
- 固定定位

脱离文档流后元素的特点：
- 不再区分块元素和行内元素
- 元素不再独占一行
- 元素的高度和宽度默认都被内容撑开

### 浮动
浮动是css里面布局用的最多的属性。`float`默认值`none`。
- 元素浮动后就不再区分行内元素和块元素。
- 浮动的元素相互贴靠，跟文字一样。不会超过上边浮动的兄弟元素。
- 浮动的元素不会挡住文字。
- 设置浮动时要注意，浮动大家一起浮动，不能一个标签单独浮动。
- 浮动的元素没有设置`width`时，自动收缩为内容的宽度。
- 浮动元素的上边是一个没有浮动的块元素，则浮动元素无法上移动 。

### BFC
BFC(Block Formatting Context)：块级格式化环境。BFC是一个CSS的隐含属性，可以为一个元素开启BFC，开启BFC后该区域会变成一个独立的布局区域。开启BFC元素的特点：
- 开启BFC的元素不会被浮动元素覆盖。
- 开启BFC的元素子元素和父元素外边距不会重叠。
- 开启BFC的元素可以包含浮动的子元素。

可以通过特殊的方式开启元素的BFC：
- 设置元素的浮动，但是会脱离文档流（不推荐）
- 将元素设置为行内块元素（不推荐）`display:inline-block;`
- 将元素的`overflow`设置为一个非`visible`值，`overflow:hidden;`


### 清除浮动的影响
浮动的高度塌陷问题，在文档流中，父元素的高度默认被子元素撑开，当子元素浮动后，子元素无法撑起父元素的高度，导致父元素高度丢失，下面的元素会自动上移导致页面布局混乱。

清除浮动和浮动之间的影响的方法，解决高度塌陷问题：

- 给浮动元素的祖先元素增加高度，如果一个元素要浮动，那么它的祖先元素一定要有高度，有高度的盒子才能关住浮动。
````html
<div class="box1">//设置height
  <p></p>
  <p></p>
</div>
<div class="box2">//设置height
  <p></p>
  <p></p>
</div>
````

- 属性`clear:both;`：（left、right、both）不允许左侧和右侧有浮动对象。但是这个方法有个大问题，它所在的标签，`margin`属性会失效（因为设置清除浮动后，浏览器会自动为元素添加一个上外边距，使其位置不受其他元素的影响）。此时两个div之间，没有任何的间隙了。
````html
<div class="box1">
  <p></p>
  <p></p>
</div>
<div class="box2">//直接给box2设置clear:both;
  <p></p>
  <p></p>
</div>
````

- 外墙法，再两个浮动之间加一个`div`设置`clear:both;`，再设置`div`的`height`可以实现功能。但box1和box2仍然没有高度。

````html
<div class="box1">
  <p></p>
  <p></p>
</div>
<div class="cl"><div>//设置clear:both;
<div class="box2">
  <p></p>
  <p></p>
</div>
````

- 内墙法，如果两个`p`都浮动，则父元素不能被撑起高度，如果在家里修一堵墙，`div`就能够被浮动的子元素撑起高度，能够自适应内容。

````html
<div class="box1">
  <p></p>
  <p></p>
  <div class="cl"><div>//设置clear:both;
</div>
<div class="box2">
  <p></p>
  <p></p>
  <div class="cl"><div>//设置clear:both;
</div>
````

- `overflow:hidden;`属性，所有溢出边框的内容都隐藏掉。对于浮动，可以用作偏方，如果父元素设置这个属性后，就可以被浮动的子元素撑起高度。
````html
<div class="box1">//设置overflow:hidden;
  <p></p>
  <p></p>
</div>
<div class="box2">//设置overflow:hidden;
  <p></p>
  <p></p>
</div>
````
外墙法和内墙法是利用HTML解决CSS的问题，可以利用伪元素改进：
````html
<div class="box1">
    <div class="box2"></div>
</div>
````
````css
.box1::after{
  content:'';
  display:block;
  clear:both;
}
````
这个方法基本是解决高度塌陷的最好方法。这个原来也可以解决外边距重叠问题。
````html
<div class="box1">
    <div class="box2"></div>
</div>
````
````css
.box1::before{
  content:'';
  display:table;
}
````

总结：可以使用下面这段代码同时解决高度塌陷和外边距重叠的问题，直接给需要的元素加上`clear`的类。出自《CSS权威指南》。
````css
.clearfix::before,
.clearfix::after{
  content:'';
  display:table;
  clear:both;
}
````

### 定位
定位是比较高级的布局属性，可以通过定位将元素摆放到页面的任意位置，CSS的定位属性有4种，绝对定位，相对定位，固定定位，粘滞定位。
- `position:static`默认值，没有开启定位。
- `position:relative;`相对定位
- `position:absolute;`绝对定位
- `position:fixed`固定定位
- `position:sticky`粘滞定位

偏移量`offset`：当元素开启定位后，可以通过偏移量来设置元素的位置。这个属性只有开启定位后才能使用。使用`top`、`bottom`、`left`、`right`。

### 相对定位(relative)：
- 开启相对定位后，如果不设置偏移量元素不会发生任何变化。
- **相对定位的参照物是自身**。
- 相对定位会提升元素的层级。
- 相对定位**不会脱离文档流**，别人不会把它的位置挤走，“灵魂出窍”。
- 不会改变元素的性质，块还是块行内还是行内。

#### 相对定位的用途：
如果想做压盖效果（把一个div放在另一个div上面），我们一般**不会**使用相对定位来做。作用：
- 微调元素
- 做绝对定位的参考，**子绝父相**。

### 绝对定位(absolute)
- 开启绝对定位后，如果不设置偏移量元素的位置不会发生变化。
- 开启绝对定位后，元素会**脱离文档流**。
- 绝对定位会改变元素的性质，行内变成块，块的宽度被内容撑开。
- 绝对定位会提升元素的层级。
- 绝对定位**参照物是包含块**。
- 当绝对定位的包含块是`html`时，`bottom`会很坑。


#### 包含块(containing block)
- 正常情况下，包含块就是离当前元素最近的**祖先块元素**。
- 绝对定位包含块是离它最近的**开启了定位的祖先元素**。
- 如果所有祖先元素都没开启定位，则参照物是根元素。
- HTML根元素，又称初始包含块。

#### 绝对定位的位置
- 文档流中：`margin-left` + `border-left` + `padding-left` + `width` + `padding-right` + `padding-right` + `margin-right` = `包含块内容区的宽度`
- 开启绝对定位后：
- 水平布局：`left` + `margin-left` + `border-left` + `padding-left` + `width` + `padding-right` + `padding-right` + `margin-right` + `right` = `包含块内容区的宽度`由7个值变成9个值。发生过度约束时：
  - 如果没有`auto`，会自动调整`right`
  - 如果有`auto`，自动调整`auto`
  - `margin`、`width`、`left`、`right`可以设置`auto`.
  - `left`和`right`默认值是`auto`，如果想通过margin设置左右布局，必须要将`left`和`right`设置为0.
- 垂直布局也必须满足等式。原理和水平布局一样。绝对定位的`offset`>`margin`=`padding`

让子元素在父元素中居中：
````css
  .box1{
    width:500px;
    height:500px;
    background-color:red;
    position:relative;
  }
  .box2{
    width:100px;
    height:100px;
    background-color:black;
    position:absolute;
    margin:auto;
    left:0;
    right:0;
    top:0;
    bottom:0;
  }
````
````html
<div class="box1">
    <div class="box2"></div>
</div>
````

### 固定定位(fixed)
- 固定定位是一种特殊的绝对定位。
- 唯一不同是，固定定位**参照物是浏览器视口**。
- 浏览器视口和初始包含块不一样。
- 固定定位不会随网页的滚动条滚动。（可以做小广告）

### 粘滞定位(sticky)
- 兼容性不好，不支持IE浏览器
- 和相对定位性质相似，不同的是元素到达某个位置后固定。（可以做导航条）
````css
  position:sticky;
  top:10px;//距离上端10px时固定。
````

### 元素的层级
对于开启定位的元素，可以通过`z-index`属性来指定元素的层级，`z-index`需要一个整数作为参数。
- 值越大元素的层级越高，元素层级越高越优先显示。
- 元素层级一样，优先显示靠下的元素。
- 祖先元素的层级再高也不会盖住后代元素，“水涨船高”。

### text-shadow
文本可以通过`text-shadow`设置阴影。
- `text-shadow: 20px 27px 22px red;//水平位移 垂直位移 模糊程度 阴影颜色。`

text-shadow 可以设置多个阴影，每个阴影之间使用逗号隔开。可以实现凹凸文字效果，给左上角放白色的阴影，右下角放黑色的阴影，就达到了凹下去的效果。
- `text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000;`
-  `text-shadow: -1px -1px 1px #000, 1px 1px 1px #fff;`

### css3兼容性问题
处理兼容性问题的常见方法：为属性添加私有前缀。
````html
    -webkit-: 谷歌 苹果
    -moz-:火狐
    -ms-：IE
    -o-：欧朋
````

### 过渡(transition)
通过过渡可以指定一个属性发生变化时的切换方式。`transition: 变化的属性 时间;`
- `transition-property`指定要执行过渡的属性，多个属性使用`,`隔开，可以写`all`。大部分属性都支持过渡。一个有效值到另一个有效值就可以。
- `transition-duration`指定过渡的持续时间，`1s=1000ms`，也可以分别指定时间。
- `transiton-timing-function`指定过渡的时序函数，属性值：
  - `ease`默认值，慢速开始，先加速再减速。
  - `linear`匀速运动
  - `ease-in`加速运动
  - `ease-out`减速运动
  - `ease-in-out`先加速后减速

  - `cubic-zezier()`来指定时序函数。
  - `steps()`分步执行时序函数
