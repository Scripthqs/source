# Web App 项目开发流程

## 1 项目准备

### 1 项目描述

1. 项目为 web App(SPA)
2. 包含商家，商品，购物车，用户多个子模块
3. 使用vue全家桶+ES6+Webpack技术栈
4. 采用模块化、组件化、工程化的模式开发

### 2 技术选型

- 前台数据处理/交互/组件化：vue、vue-router、vuex、vue-lazyload、betterScoll、swiper、moment、date-fns
- 前后台交互：mockjs + 接口测试工具postman，ajax，axios
- 模块化：ES6 + babel
- 组件化：将可复用的ui结构封装成组件
- 工程化：webpack + vuecli + eslint
- css预编译处理器

### 3 前端路由

一级路由 + 二级路由

### 4 API接口

全称：前后台交互API接口

相关概念：API接口、接口文档、对接口、联调、前后台分离、mock数据

### 5 用到什么

1. 流程和开发方式
   - 模块化、组件化、工程化
   - 使用vuecli初始化项目
   - 模拟json数据
   - es6+eslint
2. vue插件或第三方库
   - vue-router开发单页面应用
   - axios与后端进行数据交互
   - vuex管理应用组件状态
   - better-scroll实现页面滑动效果
   - 使用组件库构建项目
   - vue-lazyload实现图片懒加载
   - mockjs模拟后台数据接口
3. 样式布局效果
   - 使用stylus编写模块化css
   - 使用vue.js过渡编写动画
   - 使用字体图标
   - 解决移动端1px边框问题
   - 移动端经典的css sticky footer布局
   - 学会flex弹性布局

## 2 应用开发详解

### 1 vue-cli

vuecli是vue官方提供的搭建vue+webpack+es6项目的脚手架工具

### 2 功能需求分析

根据不同功能模块进行分析说明

### 3 资源准备

1. 标注图（设计稿）：对应用界面各个组成元素进行坐标/大小/颜色进行标签的界面图。
2. 切图：将应用界面的一些静态图形部分，通过工具（如ps）裁剪生成图片。
3. 图片Base64：样式中引用的小图片，在webpack打包会自动处理转换为样式内部的Base64编码字符串。
4. 2x与3x图：不同手机的屏幕密度不一样，一般都在2以上，为了适配不同手机，ui设计师为同一图片制作了2x和3x的2套图片（图形一样，但大小不一样）
5. iconfont：使用HTML代码以文本的形式在网页中画icon小图标，使用字体图标可以大大减小图标维护工作量，轻松改变图标颜色或者其他css效果，通过改变字体大小的方式改变图标大小，图标是矢量的，与像素无关，缩放图标不会影响清晰度，兼容性很好。

### 4 目录设计

- api：与后台交互模块文件夹
- common：通用文件夹，如fonts/img/css
- components：非路由组件文件夹
- mock：模拟数据接口文件夹
- views：路由组件文件夹
- router：路由器文件夹
- store：vuex相关模块文件夹
- app.vue：应用组件
- main.js 入口js

### 5 css 预编译器

- less
- sass
- stylus

stylus的基本语法：

- 完全通过缩进控制，不需要大括号和分号，冒号可选。
- 使用&指向父级引用
- 变量没有前缀要求，最好以$开头
- mixins混合
- 通过@import引入其他样式

### 6 ESLint

ESLint是一个代码规范检查工具，支持：

- ES6
- JSX
- style检查
- 自定义错误和提示

相关配置文件：

- .eslintrc.js相关配置文件，可以修改规则。

- .eslintigonre检查忽略的文件，可以在此添加想忽略的文件

### 7 重置样式表

引入重置样式表，清除浏览器默认样式

### 8 viewport和0.3s

使用viewport标签关闭点击缩放，引入fastclick解决点击响应0.3s问题。

### 9 vue-router

引入vue-router路由并配置。vue-router的理解和使用：

- router-view/router-link/keep-alive
- $router: 路由器对象, 包含一些操作路由的功能函数, 来实现编程式导航(跳转路由)-
- $route: 当前路由对象（参数对象）, 一些当前路由信息数据的容器, path/meta/query/params

## 3 功能业务组件

### 1 FooterGuide组件

底部导航组件：

1. 通过链式编程式导航实现路由的切换显示$router
2. 通过动态class和$router.path来实现tab样式切换
3. 通过阿里图标字体库，显示导航图标

可以给路由设置meta:{noFooter:true}属性，控制Footer的显示和隐藏。

```js
<FooterGuide v-show="$router.meta.noFooter"></FooterGuide>
```

### 2 Msite组件

#### 轮播图

首页组件：

- 使用swiper实现图片的轮播，<http://www.swiper.com.cn/>

### 3 Search组件

搜索栏组件

1. 根据关键字来异步搜索显示匹配的商家列表
2. 如实实现没有搜索结果的提示显示

### 4 Order组件

订单组件

### 5 Profile组件

个人页面组件

### 6 HeaderTop组件

头部导航组件

### 7 ShopList组件

商品列表组件

### 8 Login组件

登录组件，在登录组件中，应该隐藏footerGuide组件，有2种方法：

1. 在路由配置文件index.js中，设置meta:{noFooter:true}属性，控制Footer的显示和隐藏。

2. 在app.vue页面监听路由变化

```js
//方法1：路由配置文件，index.js文件中
  {
    path: '/login',
    component: Login,
    meta: {
      noFooter: true
    }
  },
//方法2：在app.vue文件的update生命周期函数中监听路由的变化
  data(){return {isShow: false}}
  updated () {
    if (this.$route.path.indexOf("/login") !== -1) {
      this.isShow = true
    } else {
      this.isShow = false
    }
  },
 //在app.vue文件中通过v-if/v-show判断
 <FooterGuide v-if="(!isShow) && (!$route.meta.noFooter)"></FooterGuide>
```

### 9 模板数据来源

组件模板中显示数据的来源：

- data: 自身的数据(内部改变)
- props: 外部传入的数据(外部改变)
- computed: 根据data/props/别的compute/state/getters

## 4 后台应用

前后端分离项目:

- 后台应用负责处理前台应用提交的请求，并给前台应用返回json数据
- 前台应用负责展现数据，与用户交互，与后台应用交互

- 使用mongoDB+node.js+express

### 1 postman

使用postman工具测试接口

- postman是测试API接口的chrome插件
- postman也是一个活接口文档

### 2 安装axios

- npm i axios

### 3 配置代理

- 通过vue.config.js文件配置代理

## 5 数据交互

### 1 使用vuex管理状态

创建所有相关的模块

- 定义state.js: 从后台获取的数据
- 定义mutation-types.js
- 定义mutations.js：给状态赋值
- 定义actions.js：定义异步action: async/await。发ajax获取数据, commit给mutation

定义store对象

- store/index.js

注册store，配置store

- main.js

组件异步显示数据：

- 在mounted()通过$store.dispatch('actionName')来异步获取后台数据到state中
- ...mapState(['xxx'])读取state中数据到组件中
- 在模板中显示xxx的数据

### 2 Msite组件轮播

通过vuex获取foodCategorys数组(发请求, 读取)

- 对数据进行整合计算(一维变为特定的二维数组)
- 使用Swiper显示轮播, 如何在界面更新之后创建Swiper对象?
  - 使用回调+$nextTick()
  - 使用watch+$nextTick()

具体场景：8个小图标组成一页，不足8个单独一页。每个小图标都是一个数组。

```js
const max = 8
const arr = []
const {categorys} = this
let smallArr = []
categorys.forEach((c,index)=>{
    if(smallArr.length===0){
        arr.push(smallArr)
    }
    smallArr.push(c)
    if(smallArr.length===max){
        smallArr=[]
    }
 })
 return arr
}
```

监听categorys的变化，使用轮播图插件，并使用this.$nextTick，在下一次DOM更新时执行回调函数

```js
watch:{
 category(value){
  this.$nextTick(()=>{
   new Swiper('.swiper-contain',{
   
   })
  })
 }
}
```

### 3 开发Star组件

项目描述：根据评分显示对应的星星，[0.5,1) 显示半星。如3.5分：显示3个全星，1个半星，1个灰星。

```html
//html
<div class="star">
 <span class="star-item" v-for="sc,index" in starClasses :key="index" :class="sc"></span>
</star>

//css
.star.on{
 background-image('./star_on')
}
.star.half{
 background-image('./star_half')
}
.star.off{
 background-image('./star_off')
}
//js
//3.5：3+1+1
//3.4：3+0+2
computed: {
 starClasses(){
        const scs = []
        const {score} = this
        const scoreInteger = Math.floor(score)
        //添加class_on
        for(let i=0;i<scoreInteger;i++){
           scs.push('on')                              
     }
        //添加class_half
        if(score*10-scoreInteger*10 >=5){
            scs.push('half')
        }
        //添加类名class_off
         while(scs.length<5){
         scs.push('off')                      
        }
        return scs
    }
}
```

### 4 登录注册功能

界面相关效果：

- 切换登录方式
- 手机号合法检查
- 倒计时效果
- 切换显示或隐藏密码
- 前台验证提示

前后台交互功能：

- 动态一次性图形验证码
- 动态一次性短信验证码
- 短信登录
- 密码登录
- 获取用户信息，实现自动登录
- 退出登录

#### 登录两种方式

- 手机号/短信验证码登陆
- 用户名/密码/图片验证码登陆

#### 登录的基本流程

1. 表单前台验证, 如果不通过, 提示
2. 发送ajax请求, 得到返回的结果
3. 根据结果的标识(code)来判断登陆请求是否成功
   - 1：不成功, 显示提示
   - 0：成功, 保存用户信息, 返回到上次路由

#### 注意

- 使用network查看请求(路径/参数/请求方式/响应数据)
- 使用vue的chrome插件查看vuex中的state和组件中的数据
- 使用debugger语句调试代码
- 实参类型与形参类型的匹配问题

### 4 前后台交互问题

1. 如何查看你的应用是否发送某个ajax请求?  
   - 浏览器的network
2. 发ajax请求404
   - 请求的路径的对
   - 代理是否生效(配置和重启)
   - 服务器应用是否运行
3. 后台返回了数据, 但页面没有显示?
   - vuex中是否有
   - 组件中是否读取

### 5 模拟(mock)数据/接口

#### 设计 JSON 数据结构

- 理解 JSON 数据结构
- 结构: 名称, 数据类型
- value
- value 可以变, 但结构不能变

#### 编写模拟 JSON 数据

- src/mock/data.json

#### Mockjs

用来拦截 ajax 请求, 生成随机数据返回

```js
//(mock/mockServer.js)
import Mock from 'mockjs'
import apiData from './data.json'
Mock.mock('/seller', {code:0, data:apiData.seller})
Mock.mock('/goods', {code:0, data:apiData.goods})
Mock.mock('/ratings', {code:0, data:apiData.ratings})
```

## 4

    1). 异步显示数据效果的编码流程
        ajax
          ajax请求函数
          接口请求函数
        vuex
          state
          mutation-types
          actions
          mutations
        组件
          dispatch(): 异步获取后台数据到vuex的state
          mapState(): 从vuex的state中读取对应的数据
          模板中显示
    2). 初始显示异常
        情况1: Cannot read property 'xxx' of undefined"
        原因: 初始值是空对象, 内部没有数据, 而模块中直接显示3层表达式
        解决: 使用v-if指令
        
        情况2: Cannot read property 'xxx' of null"
     
    3). vue transition动画

# day04

## 1. ShopGoods组件

    1). 动态展现列表数据
    2). 基本滑动:
        使用better-scroll
        理解其基本原理
        创建BScroll对象的时机
          watch + $nextTick()
          callback + $nextTick
    3). 滑动右侧列表, 左侧同步更新
        better-scroll禁用了原生的dom事件, 使用的是自定义事件
        绑定监听: scroll/scrollEnd
        滚动监听的类型: probeType
        列表滑动的3种类型
            手指触摸
            惯性
            编码
        分析:
            类名: current 标识当前分类
            设计一个计算属性: currentIndex
            根据哪些数据计算?
              scrollY: 右侧滑动的Y轴坐标 (滑动过程时实时变化)
              tops: 所有右侧分类li的top组成的数组  (列表第一次显示后就不再变化)
        编码:
            1). 在滑动过程中, 实时收集scrollY
            2). 列表第一次显示后, 收集tops
            3). 实现currentIndex的计算逻辑
    4). 点击左侧列表项, 右侧滑动到对应位置

## 2. CartControl组件

    1). 问题: 更新状态数据, 对应的界面不变化
        原因: 一般方法给一个已有绑定的对象中添加一个新的属性, 这个属性没有数据绑定
        解决: 
            Vue.set(obj, 'xxx', value)才有数据绑定
            this.$set(obj, 'xxx', value)才有数据绑定

## 3. ShopCart组件

    1). 使用vuex管理购物项数据: cartFoods
    2). 解决几个功能性bug

## 4. Food组件

    1). 父子组件:
        子组件调用父组件的方法: 通过props将方法传递给子组件
        父组件调用子组件的方法: 通过ref找到子组件标签对象

# day05

## 1. ShopRatings组件

    1). 列表的过滤显示
    2). 自定义过滤器

## 2. ShopInfo组件

    1). 使用better-scroll实现两个方向的滑动
    1). 通过JS动态操作样式
    2). 解决当前路由刷新异常的bug

## 3. Search组件

    1). 根据关键字来异步搜索显示匹配的商家列表
    2). 如实实现没有搜索结果的提示显示

## 4. 项目优化

    1). 缓存路由组件对象
    2). 路由组件懒加载
    3). 图片司加载: vue-lazyload
    4). 分析打包文件并优化 
