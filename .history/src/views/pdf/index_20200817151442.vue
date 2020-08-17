<template>
  <div class="PDF">
    <div id="container" ref="container"></div>
  </div>
</template>

<script>
//import x from ''
import PDFJS from "pdfjs-dist";
import { TextLayerBuilder } from "pdfjs-dist/web/pdf_viewer";
// 用于渲染文本的样式和canvas上的字体一一对应
import "pdfjs-dist/web/pdf_viewer.css";
// 某些情况下无法读取到本地的pdf.worker.js，若无法读取该文件则使用cdn里的pdf.worker.js，版本需要对应上
PDFJS.GlobalWorkerOptions.workerSrc =
  "//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.worker.js";
export default {
  name: "PDF",
  components: {},
  data() {
    return {
      pdfData: "",
      url:
        "https://emier-md-pics.oss-cn-beijing.aliyuncs.com/pdf/%E7%A7%9F%E6%88%BF%E5%90%88%E5%90%8C.pdf",
      scale: 1,
      currentPage: 1,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang='less' scoped>
//@import url()
</style>