<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:40:56
 * @LastEditTime: 2020-08-07 09:24:54
 * @Description: 
-->
<template>
  <div class="sidebar">
    <div class="sidebar-logo">Logo</div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      text-color="#000"
      active-text-color="#ffd04b"
      unique-opened
    >
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
            {{ item.title }}
          </el-menu-item>
        </template>
      </template>
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
//import x from ''
import { getMenuInfo } from "@/api/menu.js";
export default {
  name: "sidebar",
  components: {},
  data() {
    return {
      menuBarList: [],
    };
  },
  computed: {},
  created() {
    this.toGetMenuInfo();
  },
  methods: {
    async toGetMenuInfo() {
      const res = await getMenuInfo({});
      if (res.data.code === 10000) {
        this.menuBarList = res.data.menuBarList;
        console.log(this.menuBarList);
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang='less' scoped>
//@import url()
.sidebar-logo {
  width: 210px;
  text-align: center;
  height: 90px;
  line-height: 90px;
  background: #67c23a;
}
.sidebar {
  height: 100%;
  width: 210px;
  background: rgb(84, 92, 100);
  box-sizing: border-box;
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
  color: #409EFF;
}
</style>