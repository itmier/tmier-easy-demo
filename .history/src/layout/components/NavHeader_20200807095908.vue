<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:41:55
 * @LastEditTime: 2020-08-07 09:59:08
 * @Description: 
-->
<template>
  <div class="navheader">
    <div class="top-header">
      <div class="showSideBar">
        <i class="el-icon-s-fold"></i>
      </div>
      <div class="right-menu">right-menu</div>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  name: "navheader",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
      text-align: center;
      cursor: pointer;
      &:hover {
        background:rgba(255,255,255,.1);
      }
    }
    .right-menu {
      float: right;
    }
  }
}
</style>