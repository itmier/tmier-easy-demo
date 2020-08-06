<!--
 * @Author: Tmier
 * @Date: 2020-08-05 15:47:09
 * @LastEditTime: 2020-08-06 09:51:35
 * @Description: 
-->
<template>
  <div class="userlogin">

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
  background: url('~@/assets/img/bgTmier01.jpg') no-repeat center;
  background-size: cover;
//   background-color: #ccc;
  overflow: hidden;
}
</style>