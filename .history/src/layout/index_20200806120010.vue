<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:40:36
 * @LastEditTime: 2020-08-06 12:00:10
 * @Description: 
-->
<template>
  <div class="layout">
    <div class="layout-sliderbar"></div>
  </div>
</template>

<script>
//import x from ''
import {SideBar} from "@/layout/components";
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
  .layout-sliderbar {
    height: 100%;
  }
}
</style>