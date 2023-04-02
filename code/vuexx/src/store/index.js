import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 准备state，用于存储数据
const state = {
  sum: 0
}

// 准备actions，用于响应组件中的动作
const actions = {
  add (context, value) {
    console.log('add被调用', context, value)
    context.commit('ADD', value)
  }
}

// 准备 mutations，用于操作数据(state)
const mutations = {
  ADD (state, value) {
    console.log('ADD被调用', state, value)
    state.sum += value
  },
  A (state, value) {
    console.log('A被调用', state, value)
    state.sum -= value
  }

}

const getters = {
  m10 (state) {
    return state.sum * 10
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
