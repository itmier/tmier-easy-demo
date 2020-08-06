<!--
 * @Author: Tmier
 * @Date: 2020-08-05 15:47:09
 * @LastEditTime: 2020-08-06 09:00:16
 * @Description: 
-->
<template>
    <div class=''>
        <h1>登录页面</h1>
    </div>
</template>

<script>
    //import x from ''
    import { login } from '@/api/user'
    export default {
        components: {

        },
        data () {
            return {
                loginData: {
                    username: 'admin',
                    password: 'admin'
                }
            };
        },
        created () {
          this.toLogin()  
        },
        computed: {

        },
        methods: {
            async toLogin() {
                let res = await login(this.loginData)
                console.log(res)
            }
        },
    }
</script>

<style lang='less' scoped>
//@import url()

</style>