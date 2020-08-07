<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:41:55
 * @LastEditTime: 2020-08-07 15:26:25
 * @Description: 
-->
<template>
  <div class="navheader">
    <div class="top-header">
      <div class="showSideBar" @click="setCollapseTrue"  v-if = "!isCollapse">
        <i class="el-icon-s-fold"></i>
      </div>
      <div class="showSideBar" @click="setCollapseFalse" v-else>
        <i class="el-icon-s-unfold"></i>
      </div>
      <Breadcrumb></Breadcrumb>
      <div class="right-menu">right-menu</div>
    </div>
  </div>
</template>

<script>
//import x from ''
import Breadcrumb from './Breadcrumb.vue'
export default {
  name: "navheader",
  components: {
    Breadcrumb
  },
  data() {
    return {};
  },
  computed: {
    isCollapse() {
     return this.$store.state.navbar.isCollapse
    }
  },
  methods: {
    setCollapseTrue() {
      this.$store.commit('navbar/SET_COLLAPSE_TRUE')
      console.log(this.$store.state.navbar.isCollapse)
    },
    setCollapseFalse() {
      this.$store.commit('navbar/SET_COLLAPSE_FALSE')
      console.log(this.$store.state.navbar.isCollapse)
    }
  },
};
</script>

<style lang='less' scoped>
//@import url()
.navheader {
  width: 100%;
  height: 60px;
  line-height: 60px;
  // padding: 0 20px;
  box-sizing: border-box;
  overflow: hidden;
  .top-header {
    height: 60px;
    width: 100%;
    // background: burlywood;
    line-height: 60px;
    text-align: left;
    .showSideBar {
      width: 60px;
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      text-align: center;
      cursor: pointer;
      &:hover {
        background:rgba(0,0,0,.025);
      }
    }
    .right-menu {
      float: right;
    }
  }
}
</style>