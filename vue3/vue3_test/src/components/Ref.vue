<template>
  <hr>
  <h1>ref</h1>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <h2>{{job.type}}</h2>
  <h2>{{job.money}}</h2>

  <button @click="changeInfo">点击修改信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "Ref",
  setup () {
    // 数据
    let name = ref('zhangsan')
    let age = ref(20)
    let job = ref({
      type: '前端开发',
      money: '20k'
    })
    // 方法
    function changeInfo () {
      name.value = 'xiaoming'
      age.value = 18
      job.value.type = '后端开发'
      console.log(name, age, job)
      console.log(job.value)

    }
    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>

<style>
</style>