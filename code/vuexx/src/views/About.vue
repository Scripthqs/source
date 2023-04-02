<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="add">点击+</button>
    <button @click="jian">点击-</button>
    {{ $store.state.sum }}
    {{ count }}
    {{$store.getters.m10}}

  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    add () {
      console.log(this)
      this.$store.dispatch('add', 2)
      this.count = this.$store.state.sum
    },
    jian () {
      console.log(this)
      this.$store.commit('A', 2)
      this.count = this.$store.state.sum
    }
  }

}
</script>

<style lang="less">
</style>
