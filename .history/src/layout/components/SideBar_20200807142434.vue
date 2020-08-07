<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:40:56
 * @LastEditTime: 2020-08-07 14:24:34
 * @Description: 
-->
<template>
    <div :class="{sidebar: true,isCollapse:isCollapse}" ref="sidebarRef">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        text-color="#000"
        active-text-color="#67c23a"
        unique-opened
        :collapse="isCollapse"
      >
        <div class="sidebar-logo">Logo</div>
        <template v-for="item in menuBarList">
          <template v-if="item.children && item.children.length > 0">
            <el-submenu :index="item.index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <template v-for="childitem in item.children">
                <el-menu-item :index="childitem.index">{{ childitem.title }}</el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
</template>

<script>
//import x from ''
import { mapGetters } from "vuex";
import { getMenuInfo } from "@/api/menu.js";
export default {
  name: "sidebar",
  components: {},
  data() {
    return {
      menuBarList: [],
      // isCollapse: this.$store.state.navbar.isCollapse,
    };
  },
  computed: {
    // ...mapGetters(["getisCollapse"])
    isCollapse() {
      return this.$store.state.navbar.isCollapse;
    },
  },
  created() {
    this.toGetMenuInfo();
    console.log("this.isCollapse");
    console.log(this.isCollapse);
  },
  methods: {
    async toGetMenuInfo() {
      const res = await getMenuInfo({});
      if (res.data.code === 10000) {
        this.menuBarList = res.data.menuBarList;
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  watch: {
    isCollapse(val) {
      if (val) {
        console.log(1);
      }
    },
  },
};
</script>

<style lang='less' scoped>
//@import url()
.isCollapse {
  width: 64px !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item i {
  color: #409eff;
}
.sidebar-logo {
  width: 100%;
  text-align: center;
  height: 90px;
  line-height: 90px;
  background: #67c23a;
}
.sidebar {
  height: 100%;
  width: 200px;
  // background: rgb(84, 92, 100);
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  animation: move 2s linear;
}
@media screen and (max-width: 1010px) {
  .sidebar {
    display: none;
  }
}
/deep/ .el-menu {
  border: 0;
}
/deep/ .el-submenu__title i {
  // color: rgba(255,255,255,.6);
  color: #409eff;
}
.el-menu-item.is-active {
  color: #6681fa;
  background-color: #eaeeff;
}
.sidebar /deep/.el-submenu__title:hover,
.sidebar /deep/.el-menu-item:hover {
  color: #fff !important;
  background: #b1bbe7;
  font-weight: 400;
}
@keyframes move {
  0% {
    width:200px;
  }
  100% {
    width:64px
  }
}
</style>