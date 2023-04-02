<template>
  <h1>WatchEffect</h1>
  <h2>sum{{sum}}</h2>
  <button @click="sum++">点击+1</button>
  <br>
  <h2>msg{{msg}}</h2>
  <button @click="msg+='!'">点击+1</button>
  <h2>{{person}}</h2>
  <h2>{{person.name}}</h2>
  <h2>{{person.age}}</h2>
  <h2>{{person.job.j1.salary}}K</h2>
  <button @click="person.age+=1">点击修改人age</button>
  <button @click="person.job.j1.salary +=10">点击修改人salary</button>
  <hr>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'
export default {
  name: 'WatchEffect',
  setup () {
    let sum = ref(0)
    let msg = ref('你好')
    const person = reactive({
      name: '小明',
      age: 20,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    watchEffect(() => {
      let x = sum.value
      // console.log('watchEffect监听到了' + x)
    })

    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style>
</style>