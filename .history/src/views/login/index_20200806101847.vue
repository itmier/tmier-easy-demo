<!--
 * @Author: Tmier
 * @Date: 2020-08-05 15:47:09
 * @LastEditTime: 2020-08-06 10:18:47
 * @Description: 
-->
<template>
  <div class="userlogin">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-container"
      autocomplete="on"
      :label-position="labelPosition"
      label-width="80px"
    >
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//import x from ''
import { login } from "@/api/user";
export default {
  name: "UserLogin",
  components: {},
  data() {
    return {
      labelPosition: "right",
      loginData: {
        username: "admin",
        password: "admin2",
      },
    };
  },
  created() {
    this.toLogin();
  },
  computed: {},
  methods: {
    async toLogin() {
      let res = await login(this.loginData);
      console.log(res);
    },
  },
};
</script>

<style lang='less' scoped>
//@import url()
.userlogin {
  width: 100%;
  max-width: 100%;
  min-height: 100%;
  background: url("~@/assets/img/bgTmier01.jpg") no-repeat center;
  background-size: cover;
  overflow: hidden;
  .login-container {
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    // position: relative;
    // background: #ccc;
    // height:336px;
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
}
</style>