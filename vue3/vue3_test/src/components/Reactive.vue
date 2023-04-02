<template>
  <hr>
  <h1>Reactive</h1>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <h2>{{job.type}}</h2>
  <h2>{{job.money}}</h2>
  <h2>{{hobby}}</h2>

  <button @click="changeInfo">点击修改信息</button>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: "Reactive",
  setup () {
    // 数据
    let name = ref('zhangsan')
    let age = ref(20)
    let job = reactive({
      type: '前端开发',
      money: '20k'
    })
    let hobby = reactive(['吃饭', '睡觉', '喝水'])
    // 方法
    function changeInfo () {
      name.value = 'xiaoming'
      age.value = 18
      job.type = '后端开发'
      job.money = '30k'
      console.log(name, age, job)
      hobby[0] = '修仙'
    }
    return {
      name,
      age,
      job,
      hobby,
      changeInfo
    }
  }
}
</script>

<style>
</style>