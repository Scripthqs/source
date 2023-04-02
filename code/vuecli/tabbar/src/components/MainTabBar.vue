<!--  -->
<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="../assets/img/tabbar/Home0.svg" alt="" />
      <img slot="item-icon-active" src="../assets/img/tabbar/Home1.svg" alt="" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="../assets/img/tabbar/分类0.svg" alt="" />
      <img slot="item-icon-active" src="../assets/img/tabbar/分类1.svg" alt="" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="../assets/img/tabbar/Shop0.svg" alt="" />
      <img slot="item-icon-active" src="../assets/img/tabbar/Shop1.svg" alt="" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../assets/img/tabbar/Profile0.svg" alt="" />
      <img slot="item-icon-active" src="../assets/img/tabbar/Profile1.svg" alt="" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar.vue'
import TabBarItem from './tabbar/TabBarItem.vue'
export default {
  components: {
    TabBar,
    TabBarItem,
  }
};
</script>

<style scoped>

</style>