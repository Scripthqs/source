<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg='message'/>
    <router-link to='/home/news'>新闻</router-link>
    <router-link to='/home/message'>信息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      message: '子组件可以访问父组件的message数据',
      path: '/home/news'
    }
  },
  created(){
    console.log('home create');
    document.title = 'Home'
  },
  // destroyed(){
  //   console.log('home destoryed');
  // },
  // activated(){
  //   console.log('actiavted');
  //   this.$router.push(this.path)
  // },
  // beforeRouterLeave(to,from,next){
  //   console.log(this.$route.path);
  //   this.path = this.$route.path
  //   next()
  // }
}
</script>
