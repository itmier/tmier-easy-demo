<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:40:36
 * @LastEditTime: 2020-08-06 15:02:41
 * @Description: 
-->
<template>
  <div class="layout">
    <div class="layout-sliderbar">
      <SideBar></SideBar>
      <TabItem></TabItem>
    </div>
    <div class="layout-container">
      <NavHeader></NavHeader>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script>
//import x from ''
import SideBar from "@/layout/components/SideBar";
import AppMain from "@/layout/components/AppMain";
import NavHeader from "@/layout/components/NavHeader";
import TabItem from "@/layout/components/TabItem";
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
  }
}
</style>