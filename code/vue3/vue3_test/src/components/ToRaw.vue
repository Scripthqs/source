<template>
  <h1>ToRaw</h1>

  <h2>{{num}}</h2>
  <button @click="num++">num++</button>
  <h4>{{person}}</h4>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}K</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
  <hr>
</template>

<script>
import { ref, reactive, toRefs, toRaw, } from 'vue'
export default {
  name: 'ToRaw',
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
    num = toRaw(num)

    // person = readonly(person)
    person = toRaw(person)


    return {
      num,
      person,
      // ...toRefs(person)
    }
  }
}
</script>

<style>
</style>