<template>
  <h1>CustomRaw</h1>
  <input type="text" v-model="keyword">
  <h3>{{keyword}}</h3>
  <hr>
</template>

<script>
import { ref, customRef } from 'vue'
export default {
  name: 'CustomRaw',
  setup () {
    // let keyword = ref('hello') //使用Vue准备好的内置ref
    //自定义一个myRef
    function myRef (value) {
      return customRef((track, trigger) => {
        return {
          get () {
            track()
            return value
          },
          set (newValue) {
            value = newValue
            trigger()
          }
        }
      })
    }
    let keyword = myRef('hello') //使用程序员自定义的ref
    return {
      keyword
    }
  }
}
</script>