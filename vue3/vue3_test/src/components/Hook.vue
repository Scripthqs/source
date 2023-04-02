<template>
  <h1>自定义Hook函数</h1>
  <h2>当前点击鼠标坐标：{{point}}</h2>
  <hr>
</template>

<script>
import usePoint from '../hooks/usePoint'
export default {
  name: 'Hook',
  setup () {
    let point = usePoint()
    return {
      point
    }
  }
}
</script>

<style>
</style>