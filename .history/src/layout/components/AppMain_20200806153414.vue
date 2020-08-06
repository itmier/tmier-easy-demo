<!--
 * @Author: Tmier
 * @Date: 2020-08-06 11:42:40
 * @LastEditTime: 2020-08-06 15:34:14
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
    padding: 0 20px;
}
</style>