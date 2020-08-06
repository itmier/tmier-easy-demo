<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:42:40
 * @LastEditTime: 2020-08-06 17:13:31
 * @Description: 
-->
<template>
  <div class="appmain">
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
//import x from ''
export default {
  name: "appmain",
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
.appmain {
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 0 20px;
  box-sizing: border-box;
  background: burlywood;
}
</style>