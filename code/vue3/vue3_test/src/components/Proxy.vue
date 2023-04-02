<template>
  <h1>demo</h1>
  <h2>{{msg}}</h2>
  <h2>{{age}}</h2>

</template>

<script>
export default {
  props: ['msg', 'age'],
  beforeCreate () {
    // console.log('------beforeCreate---------')
  },
  setup (props, context) {
    // console.log('------setup---------')
    // console.log(props, context)
    // console.log(context)

  }
}
</script>

<style>
</style>