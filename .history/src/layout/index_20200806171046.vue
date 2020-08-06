<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:40:36
 * @LastEditTime: 2020-08-06 16:46:56
 * @Description: 
-->
<template>
  <div class="layout">
    <div id="box">
      <!-- 控制数据的值切换显示隐藏 -->
      <button @click="show=!show">点我展示效果</button>

      <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
        <p v-show="show" class="animated"></p>
      </transition>
    </div>
    <div class="layout-sliderbar">
      <SideBar v-show="sideBarFlag"></SideBar>
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
      timer: false,
      sideBarFlag: true,
      screenWidth: document.body.clientWidth,
    };
  },
  computed: {},
  methods: {},
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          // 打印screenWidth变化的值
          console.log(that.screenWidth);
          if (val > 1010) {
            this.sideBarFlag = false;
          } else {
            this.sideBarFlag = true;
          }
          that.timer = false;
        }, 400);
      }
    },
  },
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
</style>