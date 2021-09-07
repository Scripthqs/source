# Vue指令

指令（Directives）是 vue 为开发者提供的**模板语法**，用于辅助开发者渲染页面的基本结构。

vue 中的指令按照不同的用途可以分为如下 6 大类：

1. **内容渲染**指令
2. **属性绑定**指令
3. **事件绑定**指令
4. **双向绑定**指令
5. **条件渲染**指令
6. **列表渲染**指令

## 1 内容渲染指令

**内容渲染指令**用来辅助开发者**渲染 DOM 元素的文本内容**。常用的内容渲染指令：

### 1.1 `v-text`

- `v-text="msg"`可以将一个变量的值渲染到指定的元素中
- `v-text`**会覆盖元素中原本的内容**
- `v-text`没有闪烁的问题，因为它是放在属性里的

### 1.2 `{{}}`

- 插值表达式，也称Mustache语法（也就是双大括号）**很常用**
- 数据绑定最常见的形式就是使用双大括号的文本插值
- 插值处的内容都会自动更新
- `{{}}`之间**可以使用表达式**，比如复杂的3元表达式

### 1.3 `v-html`

- `v-html="msg"`可以将msg解析成html元素
- 使用v-html渲染数据可能会非常危险，因为它很容易导致XSS（跨站脚本）攻击
- 使用的时候请谨慎，能够使用{{}}或者v-text实现的不要使用v-html

### 1.4  `v-pre`

- 将插值表达式原封不动的显示

### 1.5 `v-cloak`

- `v-cloak`保持和元素实例的关联，直到结束编译自动消失
- 和CSS 规则一起用的时候，能够解决差值表达式闪烁的问题
- 即可以隐藏未编译的标签直到实例准备完毕）

````js
<style>
    [v-cloak]{
        display:none;
    }
</style>
````

## 2 属性绑定指令

### 2.1 `v-bind:`

>  注意：插值表达式只能用在元素的**内容节点**中，不能用在元素的**属性节点**中！

+ 在 vue 中，可以使用 `v-bind:` 指令，为元素的**属性动态绑定值**；

+ 简写是英文的 `:`

+ 在使用 v-bind 属性绑定期间，如果绑定内容需要进行动态拼接，则字符串的外面应该包裹单引号，例如：

  ```xml
  <div :title="'box' + index">这是一个 div</div>
  ```

最常用的场景：

1. v-bind动态绑定`class`属性
2. v-bind动态绑定`style`属性

## 3 事件绑定指令

### 3.1 `v-on:`

vue 提供了 v-on 事件绑定指令，为 DOM 元素绑定事件监听。

注意：原生 DOM 对象有 **onclick、oninput、onkeyup** 等原生事件，替换为 vue 的事件绑定形式后，分别为：**v-on:click、v-on:input、v-on:keyup**

通过 v-on 绑定的事件处理函数，需要在 methods 节点中进行声明

1. **简写是 `@`**

2. **绑定传参( )：**

   ```xml
   <button @click="add"></button>
   
   methods: {
      add() {
   			// 如果在方法中要修改 data 中的数据，可以通过 this 访问到
   			this.count += 1
      }
   }
   ```

   - 在使用 v-on 指令绑定事件时，可以使用 **( ) 进行传参**
   - methods中配置的函数，不要用箭头函数，否则this就不是vm
   - methods中配置的函数，都是Vue所管理的函数，this的指向都是vm或组件的实例对象

3. **`$event` ：**

   Vue会默认将浏览器生成的event事件对象作为参数传入到方法。

   如果默认的事件对象 e 被覆盖了，则可以手动传递一个  $event。例如：

   ```xml
   <button @click="add(3, $event)"></button>
   
   methods: {
      add(n, e) {
   			// 如果在方法中要修改 data 中的数据，可以通过 this 访问到
   			this.count += 1
      }
   }
   ```

4. **事件修饰符**：

   + `.prevent`阻止默认事件（默认行为）

     ```xml
     <a @click.prevent="xxx">链接</a>
     ```

   + `.stop`阻止冒泡

     ```xml
     <button @click.stop="xxx">按钮</button>
     ```


   - `@keyup.enter`检测回车键按下时
   - `.once`事件只触发一次
   - 一个事件，允许同时使用多个事件修饰符

## 4 双向绑定指令

### 4.1 `v-model:`

v-model指令**配合表单使用**，实现双向绑定。

表单：

1. input 输入框
   + type="radio"
   + type="checkbox"
   + type="xxxx"
2. textarea
3. select

**v-model 指令的修饰符：**

为了方便对用户输入的内容进行处理，vue 为 v-model 指令提供了 3 个修饰符：

1. `.lazy`默认情况下，data中的数据会和input中的数据同步变化，`.lazy`修饰符可以在数据失去焦点或者回车时才更新
2. `.number`输入框中输入元素的值总会返回字符串类型，`.number`修饰符可以将用户的输入值转为数值类型
3. `.trim`自动过滤用户输入的首尾空白字符

**v-model 指令的原理：**

`v-model` 实质是语法糖 `:value` + `@input`。

1.原生DOM

```vue
<input v-model="message">
<!-- 基本等价于，因为内部还有一些其他的处理 -->
<input :value="message" @input="message = $event.target.value">
//$event 指代当前触发的事件对象;
//$event.target 指代当前触发的事件对象的dom;
//$event.target.message 就是当前dom的message值;
```

2.自定义组件

```vue
<v-input v-model="val"></v-input>
<!-- 等价于 -->
<v-input :value="val" @input="val = $event"></v-input>
```

## 5 条件渲染指令

条件渲染指令用来辅助开发者按需控制 DOM 的显示与隐藏

### 5.1 `v-if`

- `v-if` `v-else``v-else-if`条件判断
- Vue 会尽可能高效地渲染元素，通常**会复用已有元素**而不是从头开始渲染
- Vue 提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需**添加一个具有唯一值的 key** 即可

v-if 指令在使用的时候，有两种方式：

1. 直接给定一个布尔值 true 或 false

   ```xml
   <p v-if="true">被 v-if 控制的元素</p>
   ```

2. 给 v-if 提供一个判断条件，根据判断的结果是 true 或 false，来控制元素的显示和隐藏

   ```xml
   <p v-if="type === 'A'">良好</p>
   ```


v-if 可以单独使用，或配合 v-else 指令一起使用

v-else 指令必须配合 v-if 指令一起使用，否则它将不会被识别

v-else-if 指令必须配合 v-if 指令一起使用，否则它将不会被识别

### 5.2 `v-show`

`v-show` 的原理是：动态为元素添加或移除 **`display: none`** 样式，来实现元素的显示和隐藏

+ 如果要频繁的切换元素的显示状态，用 v-show 性能会更好

性能消耗不同：

-  v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。
- 如果需要**非常频繁地切换，则使用 v-show 较好** 
- 如果在运行时条件很少改变，则使用 v-if 较好

> 在实际开发中，绝大多数情况，不用考虑性能问题，直接使用 v-if 就好了！！！因为一般需要根据服务器传的数据决定要不要渲染

**v-if在显示隐藏过程中有DOM的添加和删除，v-show只是操作css。**

## 6.列表渲染指令

### 6.1 `v-for`

vue 提供了 v-for 列表渲染指令，用来基于一个数组和对象**（大多数情况是数组）**来循环**渲染一个列表**结构。v-for 指令需要使 用 **item in items** 形式的特殊语法，其中：

- items 是待循环的数组
- item 是被循环的每一项

v-for 指令还支持一个可选的第二个参数，即当前项的索引。语法格式为 **(item, index) in items**

**也可以用 `of` 替代 `in` 作为分隔符**

**使用 key 维护列表的状态**

在使用 v-for 时，一般需要提供 key

```vue
<ul>
	<li v-for="(item,index) in list" :key="item.id">{{index+1}}:{{item.name}}</li>
</ul>

data: {
    list: [
        { id: 1, name: 'zhangsan' },
        { id: 2, name: 'lisi' },
        { id: 3, name: 'xiaoming' }
    ]
}
```

- 插入数组时，没有key会很笨，有key在复用时，会对比key值，key需要保证一个唯一item.id
- key的作用主要是为了高效的更新虚拟DOM

总结：

- key只能是**数字或者字符串**
- key要求是**独一无二的**，一般都使用id
- 一般将**循环项的id**作为key
- 都**不要使用索引**作为key，没有意义

- 在vue文件中，使用v-for不加key会报错

