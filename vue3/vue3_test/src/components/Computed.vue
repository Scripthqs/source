<template>
  <h1>Computed</h1>
  姓：<input type="text" v-model="person.firstName" />
  <br>
  名：<input type="text" v-model="person.lastName" />
  <br>
  <span>全名：{{person.fullName}}</span>
  <br>
  <input type="text" v-model="person.fullName">
  <input type="text" v-model="person.fullName2">

  <hr>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'Computed',
  // computed: {
  //   fullName () {
  //     return this.person.firstName + this.person.lastName
  //   }
  // },
  setup () {
    let person = reactive({
      firstName: '张',
      lastName: '三'
    })
    //computed简写
    person.fullName = computed(() => {
      return person.firstName + '-' + person.lastName
    })
    //computed完整的写法
    person.fullName2 = computed({
      get () {
        return person.firstName + '-' + person.lastName
      },
      set (value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })
    return {
      person
    }
  }
}
</script>

<style>
</style>