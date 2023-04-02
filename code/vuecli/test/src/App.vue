<template>
  <div id="app">
    

    <a href="#/Left">Left</a>
    <a href="#/Right">Right</a>
    <component :is='comName'></component>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <left ref="comLeft"></left>
    <right></right>
    <h1 ref="aaa" v-aa="'pink'">App根组件</h1>
    <button @click="showThis">打印</button>
    <button @click='resetLeft'>重置left组件的count</button>
    {{aa}}

    <hr />
    <input type="text" v-if="inputVisible" @blur="showBtn" ref="inputRef">
    <button v-else @click="showInput">展示输入框</button>
    <hr />

    <button @click="componentId = 'Left'">展示Left</button>
    <button @click="componentId = 'Right'">展示Right</button>
    <hr />
    <keep-alive include="Left">
      <component :is="componentId">
        <template v-slot:default>
          <p>我是组件里的p标签</p>
        </template>
        <p>我是组件里的p标签</p>
        <p>我是组件里的p标签</p>
        <p>我是组件里的p标签</p>

        <!-- <template #header='scope'>
          {{scope.user.name}}
        </template> -->
        <template #header='{msg,user}'>
          {{msg}}
          {{user}}
        </template>
      </component>
    </keep-alive>
    <hr />
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

import Left from './components/Left.vue'
import Right from './components/Right.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Left,
    Right
  },
  data: function () {
    return {
      aa: 0,
      inputVisible: false,
      componentId: 'Left',
      comName: 'Left'
    }
  },
  created () {
    window.onhashchange = () => {
      switch (location.hash) {
        case '#/Left':
          this.comName = 'Left'
          break
        case '#/Right':
          this.comName = 'Right'
          break
      }
    }
  },
  methods: {
    showThis () {
      console.log(this)
      console.log(this.$refs.aaa)
      this.$refs.aaa.style.color = 'red'
    },
    resetLeft () {
      this.aa = this.$refs.comLeft.count
    },
    showInput () {
      this.inputVisible = true
      console.log(this.$refs.inputRef)
      this.$nextTick(() => {
        console.log(this.$refs.inputRef)
        this.$refs.inputRef.focus()
      })

    },
    showBtn () {
      this.inputVisible = false
    }
  },

}
</script>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
