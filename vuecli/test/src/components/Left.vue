<template>
  <div>
    <h1 v-color='color'>Left</h1>
    <h1 v-color="'red'">标题</h1>
    {{str}}
    <button @click="send">将诗句发给Right</button>
    {{count}}
    <button @click="count++">点击+1</button>
    <button @click="reset">重置</button>

    <!-- <slot></slot> -->
    <slot></slot>
    <slot name='default'>我是后背内容default</slot>
    <slot name='header' msg='hello world' :user='userInfo'>我是后背内容header</slot>
  </div>
</template>

<script>
import bus from './eventBus'
export default {
  name: 'Left',
  data () {
    return {
      str: '夜来风雨声，花落知多少',
      count: 0,
      userInfo: {
        name: 'zhangsan',
        gender: '男',
        age: 18
      },
      color: 'blue'
    }
  },
  created () {
    console.log('left被创建')
  },
  destroyed () {
    console.log('left被销毁了')
  },
  deactivated () {
    console.log('Left组件被缓存')
  },
  activated () {
    console.log('Left组件被激活')
  },
  methods: {
    send () {
      bus.$emit('share', this.str)
    },
    reset () {
      this.count = 0
    }
  },
  // directives: {
  //   color: {
  //     bind (el, binding) {
  //       console.log(binding)
  //       el.style.color = binding.value
  //     }
  //   },
  //   updated (el, binding) {
  //     el.style.color = binding.value
  //   },
  // },
  directives: {
    color (el, binding) {
      el.style.color = binding.value
    }
  }
}
</script>

<style lang="less" scoped>
</style>

