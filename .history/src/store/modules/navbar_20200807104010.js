/*
 * @Author: Tmier
 * @Date: 2020-08-07 10:07:35
 * @LastEditTime: 2020-08-07 10:40:10
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
export default {
  namespaced: true,
  state,
  mutations
}
