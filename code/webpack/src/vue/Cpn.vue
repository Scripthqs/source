<!--  -->
<template>
  <div>
      <h2>我是cpn组件中的标题</h2>
      <p>{{ name }}</p>
  </div>
</template>

<script>

export default {
    data(){
        return {
            name: '我是cpn组件中的name'
        }
    }


}

</script>
<style  scoped>
  *  {
    color: red
  }
</style>