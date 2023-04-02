<!--  -->
<template>
  <div>
      <h2>我是User用户页面</h2>
      <h2>我是User用户页面的内容</h2>
      <h2>{{ $route.params.id}}</h2>
      <button @click='btnClick'>按钮获取$router</button>

  </div>
</template>

<script>
export default {
    name: 'User',
    computed: {
        id(){
           return this.$route.params.id
        }
    },
    methods: {
        btnClick(){
            console.log(this.$router);
            console.log(this.$route);

        }
    },
//     created(){
//     console.log('create');
//     document.title = '用户'
//   }
}

</script>

<style scoped>
    
</style>