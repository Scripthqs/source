<template>
    <div class="container">
      <Search />
      <List />
    </div>
</template>

<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";
// import './assets/css/bootstrap.css'
export default {
  name: "App",
  components: { Search, List },
};
</script>

<style>
</style>
