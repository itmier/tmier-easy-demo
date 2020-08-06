<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:41:55
 * @LastEditTime: 2020-08-06 15:24:18
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
  padding: 0 20px;
  box-sizing: border-box;
  overflow: hidden;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  .top-header {
    height: 60px;
    width: 100%;
    // background: burlywood;
    line-height: 60px;
    text-align: left;
    
    .right-menu {
      float: right;
    }
  }
}
</style>