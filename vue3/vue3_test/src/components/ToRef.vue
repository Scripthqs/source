<template>
  <h1>toRef</h1>
  <h2>人的信息{{person}}</h2>
  <h2>人的name{{person.name}}</h2>
  <h2>人的age{{person.age}}</h2>
  <h2>人的salary{{person.job.j1.salary}}K</h2>
  <button @click="person.age++">点击修改name</button>
  <button @click="person.name+ '!'">点击修改age</button>
  <button @click="job.j1.salary += 0.5">点击修改salary</button>
  <h2>toRef</h2>
  <ul>
    <li>{{person}}</li>
    <li>person.name:{{name1}}</li>
    <li>toRef(person, 'name'):{{name2}}</li>
    <li>ref(person.name){{name3}}</li>
  </ul>
  <h2>toRefs</h2>
  <ul>
    <li>{{person}}</li>
    <li>{{x}}</li>
    <li>{{name}}</li>
    <li>{{age}}</li>
    <li>{{job.j1.salary}}</li>
  </ul>
  <hr>
</template>

<script>
import { ref, reactive, toRef, toRefs } from 'vue'
export default {
  name: "toRef",
  setup () {
    // 数据
    let person = reactive({
      name: '小明',
      age: 22,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    const name1 = person.name
    // console.log('%%%', name1)
    const name2 = toRef(person, 'name')
    // console.log('toRef', name2)
    const name3 = ref(person.name)
    const x = toRefs(person)
    console.log('toRefs', x)
    return {
      person,
      name1,
      name2,
      name3,
      x,
      ...toRefs(person)
    }
  }
}
</script>

<style>
</style>