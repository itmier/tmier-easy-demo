<!--
 * @Author: Tmier
 * @Date: 2020-08-07 15:02:29
 * @LastEditTime: 2020-08-14 16:11:45
 * @Description: 
-->

<template>
    <div class='pdf'>
        <h1>页面PDF</h1>
        <canvas id="pdf-canvas"></canvas>
    </div>
</template>

<script>
    //import x from ''
    import PDFJS from 'pdfjs-dist';
    PDFJS.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.js';
    export default {
        name: 'PDF',
        components: {

        },
        data () {
            return {

            };
        },
        computed: {

        },
        methods: {
            pdfInit() {
                
            }
        },
    }
</script>

<style lang='less' scoped>
//@import url()

</style>