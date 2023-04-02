<template>
  <h1>Suspense</h1>
  <div class="box"></div>
  <h2>{{sum}}</h2>
  <hr>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Teleport1',
  setup () {

    let sum = ref(0)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum })
      }, 1000)
    })
  }
}
</script>

<style>
.box {
  width: 300px;
  height: 300px;
  background-color: red;
}
</style>