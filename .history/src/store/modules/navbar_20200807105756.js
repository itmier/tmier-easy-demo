/*
 * @Author: Tmier
 * @Date: 2020-08-07 10:07:35
 * @LastEditTime: 2020-08-07 10:57:56
 * @Description: 
 */
const state = {
  isCollapse: false
}
const mutations = {
  SET_COLLAPSE_FALSE(state) {
    state.isCollapse = false
  },
  SET_COLLAPSE_TRUE(state) {
    state.isCollapse = true
  },
  GET_COLLAPSE(state) {
    return 222
  }
}
const getters = {
    getisCollapse(state) {
        return state.isCollapse
    }
}
export default {
  namespaced: true,
  state,
  mutations,
  getters
}
