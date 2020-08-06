<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:42:40
 * @LastEditTime: 2020-08-06 15:42:55
 * @Description: 
-->
<template>
    <div class='appmain'>
        <router-view />
    </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'appmain',
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
.appmain {
    width: 100%;
    height: 100%;
    flex: 1;
    padding: 0 20px;
    box-sizing: border-box;
    background: burlywood;
}
</style>