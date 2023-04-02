<template>
  <div id="app">
    <h1>我是APP组件</h1>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + id">用户</router-link>
    <!-- <router-link to="/profile">档案</router-link> -->
    <router-link :to="{path:'/profile',query:{
      name:'我是query的name',age:20,gender:'男'
    }}">档案</router-link>

    <!-- <router-link to="/about" custom v-slot="{ navigate }">
      <span @click="navigate" @keypress.enter="navigate" role="link">About Us</span>
    </router-link> -->
    <keep-alive>
    <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id:'用户姓名'
    }
  }
}
</script>

<style>

</style>
