<template>
  <hr>
  <h1> Reactive2 </h1>
  <h2>{{person.name}}</h2>
  <h2>{{person.age}}</h2>
  <h2>{{person.job.type}}</h2>
  <h2>{{person.job.money}}</h2>
  <h2>{{person.hobby}}</h2>
  <h2>{{person.a.b.c}}</h2>
  

  <button @click="changeInfo">点击修改信息</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: "Reactive2",
  setup () {
    let person = reactive({
      name: 'zhangsan',
      age: 20,
      job: {
        type: '前端开发',
        money: '20k'
      },
      a: {
        b: {
          c: 666
        }
      },
      hobby: ['吃饭', '睡觉', '喝水']
    })
    // 方法
    function changeInfo () {
      person.name = 'xiaoming'
      person.age = 18
      person.job.type = '后端开发'
      person.job.money = '30k'
      person.hobby[0] = '修仙'
    }
    return {
      person,
      changeInfo
    }
  }
}
</script>

<style>
</style>