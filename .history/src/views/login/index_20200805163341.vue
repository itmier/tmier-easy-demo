<!--
 * @Author: Tmier
 * @Date: 2020-08-05 15:47:09
 * @LastEditTime: 2020-08-05 16:33:41
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

            };
        },
        created () {
          this.toLogin()  
        },
        computed: {

        },
        methods: {
            async toLogin() {
                let res = await login({a:1,b:2})
                console.log(res)
            }
        },
    }
</script>

<style lang='less' scoped>
//@import url()

</style>