<template>
  <h1>Readonly</h1>

  <h4>{{person}}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <hr>
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue'
export default {
  name: 'Readonly',
  setup () {
    let num = ref(0)
    let person = reactive({ //只考虑第一层数据的响应式
      // let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    num = readonly(num)
    // person = readonly(person)
    person = shallowReadonly(person)


    return {
      num,
      person,
      ...toRefs(person)
    }
  }
}
</script>

<style>
</style>