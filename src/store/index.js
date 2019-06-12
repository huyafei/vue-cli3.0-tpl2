import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import pages from './modules/pages'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    pages
  },
  state: {
    projectName:'智能家居后台'
  },
  mutations: {},
  actions: {},
  getters
})
