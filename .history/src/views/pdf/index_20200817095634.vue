<template>
  <div class="PDF">
    <canvas id="pdf-canvas"></canvas>
  </div>
</template>

<script>
//import x from ''
import PDFJS from "../../../public/static/pdfjs-dist/pdf";
PDFJS.GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/pdf.worker.js";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    renderPDF(url) {
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
  mounted () {
      this.renderPDF('https://emier-md-pics.oss-cn-beijing.aliyuncs.com/pdf/%E7%A7%9F%E6%88%BF%E5%90%88%E5%90%8C.pdf')
  }
};
</script>

<style lang='less' scoped>
//@import url()
</style>