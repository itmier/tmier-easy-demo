<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:40:36
 * @LastEditTime: 2020-08-06 14:21:17
 * @Description: 
-->
<template>
  <div class="layout">
    <div class="layout-sliderbar"></div>
    <div class="layout-container">
      <router-view />
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
  }
}
</style>