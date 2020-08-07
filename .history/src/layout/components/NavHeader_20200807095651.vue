<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:41:55
 * @LastEditTime: 2020-08-07 09:56:51
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
  padding: 0 20px;
  box-sizing: border-box;
  overflow: hidden;
  .top-header {
    height: 60px;
    width: 100%;
    // background: burlywood;
    line-height: 60px;
    text-align: left;
    .showSideBar {
      width: 50px;
      height: 50px;
      text-align: center;
      &:hover {
        background:#ccc;
      }
    }
    .right-menu {
      float: right;
    }
  }
}
</style>