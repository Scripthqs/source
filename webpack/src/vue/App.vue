<!--  -->
<template>
  <div>
      <h1 class='title'>{{ message }}</h1>
      <button @click='btnClick'>按钮</button>
      <h2>{{ name }}</h2>
      <Cpn></Cpn>
  </div>
  
</template>

<script>
import Cpn from './Cpn.vue'
export default {
  data(){
        return {
            message: '你好，我是App中的message',
            name: '我是App中的name'
        }
    },    
    methods: {
        btnClick(){
            console.log('我是App中的btnclick');
        }
    },
    components: {
      Cpn
    }
}

</script>
<style scoped>
  .title {
    color: green
  }
</style>
