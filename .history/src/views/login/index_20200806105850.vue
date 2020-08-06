<!--
 * @Author: Tmier
 * @Date: 2020-08-05 15:47:09
 * @LastEditTime: 2020-08-06 10:58:49
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
      label-width="0"
    >
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          ref="username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          ref="password"
          placeholder="Password"
          name="password"
          :key="passwordType"
          :type="passwordType"
          tabindex="2"
          autocomplete="on"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%" @click="toLogin" :loading="btnLoadingFlag">登 录</el-button>
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
      btnLoadingFlag: false,
      loginRules: {
        username: [{ required: true, trigger: "blur" }],
        password: [{ required: true, trigger: "blur" }],
      },
      passwordType: "password",
      loginForm: {},
      labelPosition: "right",
      loginData: {},
    };
  },
  created() {},
  computed: {},
  methods: {
    async toLogin() {
      this.btnLoadingFlag = true;
      let res = await login(this.loginForm);
      this.btnLoadingFlag = false;
      if (res.data.code === 10000) {
        this.$message.success(res.data.data.msg);
      } else {
        this.$message.error(res.data.msg);
      }
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
    max-width: 520px;
    // max-width: 100%;
    padding: 20px 35px;
    margin: 160px auto;
    overflow: hidden;
    // position: relative;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
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