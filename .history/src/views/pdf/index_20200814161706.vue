<!--
 * @Author: Tmier
 * @Date: 2020-08-07 15:02:29
 * @LastEditTime: 2020-08-14 16:17:06
 * @Description: 
-->

<template>
  <div class="pdf">
    <h1>页面PDF</h1>
    <canvas id="pdf-canvas"></canvas>
  </div>
</template>

<script>
//import x from ''
import PDFJS from "pdfjs-dist";
PDFJS.GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/pdf.worker.js";
export default {
  name: "PDF",
  components: {},
  data() {
    return {};
  },
  computed: {},
  beforeUpdate () {
    this.pdfInit()  
  },
  methods: {
    pdfInit() {
      var url = "Helloworld.pdf";

      PDFJS.getDocument(url)
        .then((pdf) => {
          return pdf.getPage(1);
        })
        .then((page) => {
          // 设置展示比例
          var scale = 1.5;
          // 获取pdf尺寸
          var viewport = page.getViewport(scale);
          // 获取需要渲染的元素
          var canvas = document.getElementById("pdf-canvas");
          var context = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          var renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          page.render(renderContext);
        });
    },
  },
};
</script>

<style lang='less' scoped>
//@import url()
</style>