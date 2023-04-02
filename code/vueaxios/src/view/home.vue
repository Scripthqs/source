<template>
  <div>

  </div>
</template>

<script>
import { reqPhoneLogin } from '@/network/home.js'
export default {
  data () {
    return {

    }
  },
  async created () {

    const { data: res } = await reqPhoneLogin
    console.log(res)

  },
  methods: {
  }
}
</script>

<style>
</style>