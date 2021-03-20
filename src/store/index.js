import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    ADD_POSTS(state, payload){
      state.posts.push(payload)
      console.log(state.posts)
    }
  },
  actions: {
    addPost(context, payload){
      context.commit('ADD_POSTS', payload)
    }
  },
  modules: {
  },
  getters: {
    Post(state){
      return state.posts
    }
  },
})
