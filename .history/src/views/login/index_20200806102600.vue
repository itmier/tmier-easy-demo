<!--
 * @Author: Tmier
 * @Date: 2020-08-05 15:47:09
 * @LastEditTime: 2020-08-06 10:26:00
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
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item label="">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="loginForm.region"></el-input>
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
      loginForm: {},
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
    padding: 0 35px 0;
    margin: 160px auto;
    overflow: hidden;
    // position: relative;
    background: rgba(0,0,0,0.1);
    // height:336px;
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: #fff;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }
  }
}
</style>