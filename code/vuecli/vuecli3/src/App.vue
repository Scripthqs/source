<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
   <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  components: {
    
  },
  methods: {
    getStudents(){ 
      axios.get('http://localhost:8080/students').then(
        res => {
          console.log('请求成功',res.data);
        },
        err => {
          console.log('请求失败',err.message);
        }
      )
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
