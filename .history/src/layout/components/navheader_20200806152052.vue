<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:41:55
 * @LastEditTime: 2020-08-06 15:20:52
 * @Description: 
-->
<template>
  <div class="navheader">
    <div class="top-header">
      avBar
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
  height: 115px;
//   background:burlywood;
  padding: 0 20px;
  box-sizing: border-box;
  overflow: hidden;
  .top-header {
    height: 60px;
    width: 100%;
    line-height: 60px;
    text-align: left;
    .right-menu {
      float: right;
    }
  }
}
</style>