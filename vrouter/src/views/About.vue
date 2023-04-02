<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to='/about/tab1'>tab1</router-link> |
    <router-link to='/about/tab2'>tab2</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>
