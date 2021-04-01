## 项目注意要点

### 设置网站的图标，在标题栏和收藏栏中显示。
    `<link rel="icon" href="">`
    网站的图标一般都存储在网站的根目录下，名字一般都叫做`favicon.ico`，在网站后面的`htps//:www.xxx.com/favicon.ico`中一般可以找到这个图标。
### 安装JS & CSS Minifier (Minify)插件
    - 按F1，输入`minify`，点击`minify:document`即可压缩代码

### 版心
版心是页面中主要内容所在的区域。设计图就是只是一个版心，整个页面是处于浏览器中间的，浏览器宽度是可以随时调整的。网站一般有多个容器`header`、`main`、`footer`等，这些容器里面再放一个居中的版心`inner_c`，版心的高度一般不用设置。京东和淘宝的的版心是`1190px`，小米的版心是`1226px`，苹果的版心`1000px`，腾讯的版心`1400px`

`body`一般会设置一个`最小宽度=版心的宽度`，防止浏览器窗口宽度过小时，布局被打乱。
````css
body{
    font: 14px/1.5 Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
    color: #333;
    background-color: #fff;
    min-width: 版心的宽度;
}
.inner_c{
    width: 设置版心的宽度;
    margin: 0 auto;    /*让版心居中 */

}

````
### 网页的结构
基本网页的结构一般分为头部（导航栏）、banner区、内容区、底部。

#### 导航栏
设置`<div class="header"></div>`的通栏，再在里面放一个宽度确定的`div`作为通栏的版心，这个版心称为`<div class="inner_c"></div>`，c指的是center。
版心不需要指定高度，它可以被内容撑开。版心里面可以放`logo``导航栏``登录/注册`之类的。

带圆角的矩形实现方法：
- 切图
- `border-radius`实现

超链接一般放在div中，设置div的margin和padding，而不是直接设置a的边距。

不要直接通过<img>引入logo图片，这样写虽然视觉效果上达到了，但是搜索引擎是搜不到图片的，不利于SEO。
````html
   <div class="logo">
        <img src="images/logo.png " alt="">
    </div>
````
````css
    .header .logo{
        float: left;
        margin-right: 40px;
    }
````
  正确的写法是将超链接作为logo的布局，里面放入文字，文字可以被SEO。
````html
	<h1 class="logo">
		<a href="#">
			我是网站的logo
		</a>
	</h1>
````
````css
    .header .logo{
	    float: left;
	    padding-left: 12px;
	    margin-right: 39px;
	    width: 174px;
	    height: 58px;
    }
    .header .logo a{
	    display: block;超链接先转换成块元素
	    width: 174px; 超链接的宽高和容器一致，保证居中
	    height: 58px;
	    background:url(images/logo.png) no-repeat;
	    text-indent: -999em;缩进元素的文本首行，让logo中文字隐藏。
        也可以设置font-size:0px;达到效果。

````
背景要放在里层的a标签里，不要放在外层的h1标签里。假设背景图放在h1里，那么不管h1的padding有多大，背景图的位置都不会变。

### RGB颜色：
`#000黑` `#fff白` `#f00红` `#222深灰` `#333灰` `#ccc浅灰`

### 元素水平垂直居中

#### 行内元素居中
图片、文字等属于行内元素，居中分为垂直居中和水平居中：
- 水平居中：给父元素设置`text-align:center;`
- 垂直居中：让文字的高度=行高
````css
    .父元素{
         height: 20px; 
        line-height: 20px;
    }
````
#### 块级元素居中
块级子元素在父元素居中的情况比较复杂，水平居中：子元素自身使用`margin:0 auto;`，垂直居中比较麻烦。

1. 绝对定位 + margin（需要指定子元素的宽高，不推荐）。因为宽高往往是由其内容来决定的，不建议固定宽高，子绝父相。

2. 绝对定位 + translate（无需指定子元素的宽高，推荐）
````css
    .father{
        position: relative;
        min-height: 500px;
        background: #bfa;
    }
    .son {
        position: absolute;
        background: red;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
````
translate() 函数中使用百分比值时，是以这个元素自身的宽度和高度为基准进行换算和移动的（动态计算宽高）。

3. 将父容器设置为 Flex 布局`display:flex;`，子元素设置以下两个属性就可以实现居中：
   - 水平居中：父容器加个属性`justify-content: center;`
   - 垂直居中：给父容器加个属性 `align-items: center;`

这种方法会让父容器里的所有子元素们都垂直居中。

4. flex 布局 + margin: auto（推荐）
   - 先给父容器设置 `display: flex;`
   - 给指定的子元素设置`margin: auto;`

#### 移动端，红包幕帘/弹窗 居中的规范写法
````html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>弹窗居中</title>
        <style>
            /* 整个弹窗组件 */
            .component_popup {
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 100;
            }

            /* 遮罩背景 */
            .popup_mask {
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.7);
            }

            /* 弹窗区域（内容 + close）：严格居中 */
            .popup_content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            /* 弹窗的内容部分 */
            .content_box {
                width: 15.45rem;
                height: 19.32rem;
                background: url(http://img.smyhvae.com/20191010_1500_red-packet.png) no-repeat;
                background-size: 15.45rem 19.32rem;
            }

            /* 弹窗的close图标 */
            .content_close {
                width: 1.25em;
                height: 1.25em;
                background: url(http://img.smyhvae.com/20191010_1500_close.png) no-repeat;
                background-size: 1.25rem 1.25rem;
                margin: 0 auto;
                margin-top: 0.5rem;
            }
        </style>
    </head>
    <body>
        <div class="content">默认文档流中的页面主体</div>

        <div class="component_popup">
            <div class="popup_mask"></div>
            <div class="popup_content">
                <div class="content_box"></div>
                <div class="content_close"></div>
            </div>
        </div>
    </body>
</html>
````

- `vertical-align: middle;` 属性可用于指定行内元素（inline）、行内块元素（inline-block）、表格的单元格（table-cell）的垂直对齐方式。主要是用于**图片、表格、文本**的对齐方式。 属性值：
  - `baseline`默认值，基线对齐
  - `top`顶部对齐
  - `bottom`底部对齐
  - `middle`居中对齐

#### vertical-algn:middle垂直居中属性
这个属性可以设置元素的垂直对齐，只能用于行内元素、行内块元素、表单元素。而且是近似居中，元素的中心线和父元素基线上方1/2 x-height处对齐。
对于大小不固定的图片设置垂直居中：
  - 给父元素设置`line-height=一定高度`
  - 给图片设置`vertical-align: middle;`

需要两种方法实现完美居中：
- 给父元素加上`font-size:0;`
- 添加辅助元素，`i{}或者伪元素.box:before{}`
  1. 辅助元素`display: inline-block`
  2. 辅助元素设置`width: 0%;`和`height: 100%;`
  3. 辅助元素设置`vertical-align:middle;`

### 轮播图的下面闪烁的小点
步骤：
- 结构；`div.pointer`里面若干个`a`
- 绝对定位，调整位置
````css
  .pointer{
        position: absolute;
        z-index: 1;
        bottom: px;
        right: px;
    }
````
- 将`a`浮动，设置点的大小
````css
.pointer a{
    float: left;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin:0 2px;
    background-color: rgba(255, 0, 0, 0.3);
    background-clip:content-box;
    border: 2px solid rgba(255, 255, 255, 0.2);
}
````
- 设置鼠标移入效果
````css
.pointer a.active,
.pointer a:hover{
    background-color: #fff;
    border:2px solid rgba(255, 255, 255, 0);
}
````