<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:41:55
 * @LastEditTime: 2020-08-06 15:14:39
 * @Description: 
-->
<template>
    <div class='navheader'>
        avBar
        <div class="right-menu">
            right-menu
        </div>
    </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'navheader',
        components: {

        },
        data () {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style lang='less' scoped>
//@import url()
.navheader {
    width: 100%;
    height: 115px;
    background: sandybrown;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
    .right-menu {
        float: right;
    }
}
</style>