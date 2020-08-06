<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:40:36
 * @LastEditTime: 2020-08-06 16:09:47
 * @Description: 
-->
<template>
  <div class="layout">
    <div class="layout-sliderbar">
      <transition name="slide-fade">
        <SideBar v-show="sideBarFlag"></SideBar>
      </transition>
    </div>
    <div class="layout-container">
      <NavHeader></NavHeader>
      <TabItem></TabItem>
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
    TabItem,
  },
  data() {
    return {
      sideBarFlag: true,
    };
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
  }
  .layout-container {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>