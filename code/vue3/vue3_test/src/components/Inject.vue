<template>
  <h1>inject</h1>
  {{car}}
  <hr>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'Inject',
  setup () {
    let car = inject('aaa')
    return {
      car
    }
  }
}
</script>

<style>
</style>