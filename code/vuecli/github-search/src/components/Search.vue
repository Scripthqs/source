<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
      <button @click='searchUsers'>Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "search",
  data(){
      return {
          keyWord: ''
      }
  },
  methods: {
      searchUsers(){
          axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
              res => {
                  console.log('请求成功');
                  this.$bus.$emit('getUsers',res.data.items)
              },
              err => {
                  console.log('请求失败',err.message);
              }
          )
      }
  },
};
</script>

<style>
</style>