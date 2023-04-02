<template>
  <h1>LifeCycle</h1>
  <button @click="msg += msg">点击修改</button>
  <h2>你好{{msg}}</h2>
  <hr>
</template>

<script>
import { reactive, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default {
  name: 'LifeCycle',
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
    //组合式 API 生命周期
    onBeforeMount(() => {
      console.log('------onBeforeMount---------')
    })
    onMounted(() => {
      console.log('------onMounted---------')
    })
    onBeforeUpdate(() => {
      console.log('------onBeforeUpdate---------')
    })
    onUpdated(() => {
      console.log('------onUpdated---------')
    })
    onBeforeUnmount(() => {
      console.log('------onBeforeUnmount---------')
    })
    onUnmounted(() => {
      console.log('------onUnmounted---------')
    })
    return {
      sum,
      msg,
      person
    }
  },
  //通过配置项使用生命周期
  beforeCreate () {
    console.log('---------beforeCreate-----')
  },
  created () {
    console.log('---------created-----')
  },
  beforeMount () {
    console.log('---------beforeMount-----')
  },
  mounted () {
    console.log('---------mounted-----')
  },
  beforeUpdate () {
    console.log('---------beforeUpdate-----')
  },
  updated () {
    console.log('---------updated-----')
  },
  beforeUnmount () {
    console.log('---------beforeUnmount-----')
  },
  unmounted () {
    console.log('---------unmounted-----')
  },
}
</script>

<style>
</style>