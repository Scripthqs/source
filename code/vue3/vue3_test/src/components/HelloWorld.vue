<template>
  <h1>我是HelloWorld组件</h1>
  <p>setup中的msg：{{msg}}</p>
  <p>setup中的方法：{{sayFun}}</p>
  <p>setup中的方法：{{sayFun()}}</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  setup (props, context) {
    // console.log(props, context)
    //数据
    let msg = 'hello world'
    //方法
    function sayFun () {
      // console.log(msg)
    }
    return {
      msg,
      sayFun
    }
    // return () => h('h1', 'hello world')
  }
}
</script>

<style>
</style>