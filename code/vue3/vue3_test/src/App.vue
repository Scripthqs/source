<template>
  <!-- <Suspense1></Suspense1> -->

  <Suspense>
    <template v-slot:default>
      <Suspense1></Suspense1>
    </template>
    <template v-slot:fallback>
      <h3>加载中.....</h3>
    </template>
  </Suspense>
  <Teleport1></Teleport1>
  <Inject></Inject>
  <Custom-ref></Custom-ref>
  <To-raw></To-raw>
  <Readonly></Readonly>
  <Shallow-ref></Shallow-ref>
  <To-ref></To-ref>
  <Hook v-if="isShow"></Hook>
  <button @click="isShow = !isShow">点击切换隐藏组件</button>
  <Life-cycle v-if="isShow"></Life-cycle>
  <Watch-effect></Watch-effect>
  <Watch></Watch>
  <Computed></Computed>
  <Proxy msg='你好' age='22'></Proxy>
  <Reactive2></Reactive2>
  <Reactive></Reactive>
  <Ref></Ref>
  <Hello-world></Hello-world>
</template>

<script>
import { ref, reactive, provide, defineAsyncComponent } from 'vue'
import Ref from './components/Ref.vue'
import Reactive from './components/Reactive.vue'
import Reactive2 from './components/Reactive2.vue'
import Proxy from './components/Proxy.vue'
import Computed from './components/Computed.vue'
import Watch from './components/Watch.vue'
import WatchEffect from './components/WatchEffect.vue'
import LifeCycle from './components/LifeCycle.vue'
import HelloWorld from './components/HelloWorld.vue'
import Hook from './components/Hook.vue'
import ToRef from './components/ToRef.vue'
import ShallowRef from './components/ShallowRef1.vue'
import Readonly from './components/Readonly.vue'
import ToRaw from './components/ToRaw.vue'
import CustomRef from './components/CustomRef.vue'
import Inject from './components/Inject.vue'
import Teleport1 from './components/Teleport1.vue'
import Suspense1 from './components/Suspense1.vue'
// const Suspense1 = defineAsyncComponent(() => import('./components/Suspense1.vue'))


export default {
  name: 'App',
  components: {
    HelloWorld,
    Ref,
    Reactive,
    Reactive2,
    Proxy,
    Computed,
    Watch,
    WatchEffect,
    LifeCycle,
    Hook,
    ToRef,
    ShallowRef,
    Readonly,
    ToRaw,
    CustomRef,
    Inject,
    Teleport1,
    Suspense1
  },
  setup () {
    let isShow = ref(true)
    let car = reactive({ name: '奔驰', price: '40万' })
    provide('aaa', car)
    return {
      isShow
    }
  }

}
</script>

<style>
</style>
