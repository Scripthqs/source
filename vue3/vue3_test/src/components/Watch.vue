<template>
  <h1>Watch</h1>
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
import { reactive, ref, watch } from 'vue'
export default {
  name: 'Watch',
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
    //监视ref所定义的一个响应式数据
    watch(sum, (n, o) => {
      console.log(n, o)
    })
    //监视ref所定义的多个响应式数据
    watch([sum, msg], (n, o) => {
      console.log(n, o)
    })
    //监视reactive定义的响应式数据，无法获取 o,强制开启 deep
    watch(person, (n, o) => {
      console.log(n, o)
    })
    //监视reactive定义的数据中的某个属性
    watch(() => person.age, (n, o) => {
      console.log(n, o)
    })
    //监视reactive定义的数据中的多个属性
    watch([() => person.age, () => person.job.j1.salary], (n, o) => {
      console.log(n, o)
    })
    //监视reactive定义的数据中的某个属性，这个属性依然是对象
    watch([() => person.age, () => person.job.j1.salary], (n, o) => {
      console.log(n, o)
    }, { deep: true })
    return {
      sum,
      msg,
      person
    }
  },
  //vue2写法
  // watch: {
  //   // sum (n, o) {
  //   //   console.log(n, o)
  //   // }
  //   sum: {
  //     immediate: true,
  //     deep: true,
  //     handler (n, o) {
  //       console.log(n, o)

  //     }
  //   }
  // }
}
</script>

<style>
</style>