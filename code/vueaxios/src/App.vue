<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <img alt="Vue logo" :src=" result " />
    <div>{{ result }}</div>
    <div>{{ data }}</div>
    <Home></Home>
  </div>
</template>

<script>
import axios from "axios"
import Home from '@/view/home.vue'
export default {
  // name: "App",
  components: {
    Home
  },
  data () {
    return {
      result: '',
      data: []
    }
  },
  // created () {
  //   axios({
  //     url: "https://autumnfish.cn/banner",
  //   }).then((res) => {
  //     console.log(res)
  //     // console.log(res.data.banners[0])
  //     // this.result = res.data.banners[0].imageUrl
  //   })
  // },
  async created () {
    // axios({
    //   // 请求方式
    //   method: 'GET',
    //   // 请求的地址
    //   url: 'https://autumnfish.cn/top/playlist',
    //   // URL 中的查询参数
    //   params: {
    //     limit: 10,
    //     order: 'new'
    //   }
    // }).then(function (result) {
    //   console.log(result)
    // })
    // axios("https://autumnfish.cn/top/playlist", {
    //   // 请求方式
    //   method: 'GET',
    //   params: {
    //     limit: 10,
    //     order: 'new'
    //   }
    // }).then(function (result) {
    //   console.log(result)
    // })
    // axios.get('https://autumnfish.cn/top/playlist', {
    //   // URL 中的查询参数
    //   params: {
    //     limit: 10,
    //     order: 'new'
    //   }
    // }).then(function (result) {
    //   console.log(result)
    // })
    const { data: res } = await axios.post("https://autumnfish.cn/login/cellphone", {
      phone: '18325142633',
      password: '18325142633hqs'
    }, {

    })
    console.log(res)
  },
  methods: {

  }

};
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
