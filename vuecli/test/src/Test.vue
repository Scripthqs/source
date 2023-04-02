<template>
  <div>
    <h3>用户自定义的test.vue</h3>
    {{init}}
    {{typeof init}}
    {{count}}
    <button @click="count++">点击+1</button>

    {{num}}
    <button @click="add">num+1</button>
  </div>
</template>

<script>
export default {
  name: '',
  // props: ['init']
  props: {
    init: {
      default: 'hello world',
      type: String,
      required: true
    }
  }
  ,
  data () {
    return {
      count: this.init,
      num: 0
    }
  },
  created () {

  },
  methods: {
    add () {
      this.num++
      this.$emit('numChange', this.num)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
