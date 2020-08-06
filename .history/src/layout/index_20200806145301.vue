<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:40:36
 * @LastEditTime: 2020-08-06 14:53:01
 * @Description: 
-->
<template>
  <div class="layout">
    <div class="layout-sliderbar"></div>
    <div class="layout-container">
      <div class="container-header">
        <div class="container-navheader-left">container-navheader</div>
        <div class="container-navheader-right">container-navheader</div>
      </div>
      <div class="container-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
//import x from ''
import SideBar from "@/layout/components/SideBar";
import AppMain from "@/layout/components/AppMain";
import NavHeader from "@/layout/components/NavHeader";
export default {
  name: "layout",
  components: {
    SideBar,
    AppMain,
    NavHeader,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang='less' scoped>
//@import url()
.layout {
  height: 100%;
  display: flex;

  .layout-sliderbar {
    height: 100%;
    width: 210px;
    background: #ccc;
  }
  .layout-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .container-header {
      display: flex;
      justify-content: space-between;
      .container-navheader-left {
        height: 115px;
        box-sizing: border-box;
        width: 100%;
        background: burlywood;
        padding: 20px;
      }
      .container-navheader-right {
        height: 115px;
        box-sizing: border-box;
        width: 200px;
        background: burlywood;
        padding: 20px;
      }
    }
    .container-main {
    }
  }
}
</style>