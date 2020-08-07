<!--
 * @Author: Tmier
 * @Date: 2020-08-07 15:24:44
 * @LastEditTime: 2020-08-07 15:49:14
 * @Description: 
-->
<template>
  <div class="Breadcrumb">
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
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
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      const first = matched[0];

      if (!this.isDashboard(first)) {
        matched = [{ path: "/dashboard", meta: { title: "Dashboard" } }].concat(
          matched
        );
      }

      this.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return (
        name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
      );
    },
  },
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      console.log(route.path);
      if (route.path.startsWith("/redirect/")) {
        return;
      }
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
    console.log(this.levelList)
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