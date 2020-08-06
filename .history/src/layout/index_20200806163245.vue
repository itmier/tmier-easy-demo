<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:40:36
 * @LastEditTime: 2020-08-06 16:32:45
 * @Description: 
-->
<template>
  <div class="layout">
    <div class="layout-sliderbar">
      <button v-on:click="sideBarFlag = !sideBarFlag">Toggle</button>
      <transition name="move">
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

@keyframes animationIn {
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes animationOut {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
}

.move-enter {
  transform: translate(-100%, 0);
  position: absolute !important;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
}
.move-enter-active {
  animation: animationIn 0.2s;
  position: absolute !important; // 进入的组件要覆盖掉移除的组件，参考 //https://cn.vuejs.org/v2/guide/transitions.html#%E8%BF%87%E6%B8%A1%E6%A8%A1%E5%BC%8F
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
}
.move-leave {
  transform: translate(0, 0);
}
.move-leave-active {
  animation: animationOut 0.2s;
}
</style>