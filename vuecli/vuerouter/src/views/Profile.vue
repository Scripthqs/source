<!--  -->
<template>
  <div>
      <h2>我是Profile用户页面</h2>
      <h2>我是Profile用户页面的内容</h2>
      <h2>{{ $route.query}}</h2>
      <h2>{{ $route.query.name}}</h2>
      <h2>{{ $route.query.age}}</h2>
      <h2>{{ $route.query.gender}}</h2>

  </div>
</template>

<script>
export default {
    name: 'Profile',
    computed: {

    }
}

</script>

<style scoped>
    
</style>