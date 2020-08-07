<!--
 * @Author: Tmier
 * @Date: 2020-08-07 15:24:44
 * @LastEditTime: 2020-08-07 15:40:43
 * @Description: 
-->
<template>
  <div class="Breadcrumb">
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
          <span
            v-if="item.redirect==='noRedirect'||index==levelList.length-1"
            class="no-redirect"
          >{{ item.meta.title }}</span>
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
//import x from ''
export default {
  name: "Breadcrumb",
  components: {},
  data() {
    return {
      levelList: null,
    };
  },
  computed: {},
  methods: {},
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      console.log(route.path)
      if (route.path.startsWith("/redirect/")) {
        return;
      }
      this.getBreadcrumb();
    },
  },
};
</script>

<style lang='less' scoped>
//@import url()
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
.Breadcrumb {
  height: 60px;
  line-height: 60px;
  display: flex;
  align-items: center;
}
</style>