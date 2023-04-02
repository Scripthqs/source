<template>
  <h1>ShallowRef</h1>
  <h4>当前的x.y值是：{{x.y}}</h4>
  <!-- 可以替换 -->
  <button @click="x={y:888}">点我替换x</button>
  <!-- 不能监测x.y的改变 -->
  <button @click="x.y++">点我x.y++</button>

  <h4>{{person}}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { shallowRef, shallowReactive, toRefs } from 'vue'
export default {
  name: 'ShallowRef',
  setup () {
    let x = shallowRef({
      y: 0
    })
    let person = shallowReactive({ //只考虑第一层数据的响应式
      // let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    return {
      x,
      person,
      ...toRefs(person)
    }
  }
}
</script>

<style>
</style>