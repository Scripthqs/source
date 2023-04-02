<template>
  <div>
    <h1>Rihgt</h1>
    msg{{msg}}
  </div>
</template>

<script>
import bus from './eventBus'

export default {
  name: 'Right',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    bus.$on('share', (val) => {
      this.msg = val
    })
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
</style>
