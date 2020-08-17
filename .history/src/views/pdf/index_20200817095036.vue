<template>
  <div class="PDF">
    <div class="pdf-container">
      <canvas v-for="page in pages" :id="'canvas' + page" :key="page"></canvas>
    </div>
  </div>
</template>

<script>
//import x from ''
import PDF from "../../../public/static/pdfjs-dist/pdf";
PDF.disableWorker = true;
export default {
  name: "PDF",
  components: {},
  data() {
    return {
      width: 100,
      pdfDoc: null,
      pages: 0,
    };
  },
  computed: {},
  methods: {
    loadFile(url) {
      PDF.getDocument(url).then((pdf) => {
        this.pdfDoc = pdf;
        this.pages = this.pdfDoc.numPages;
        this.$nextTick(() => {
          this.renderPage(1);
        });
      });
    },
    /*
     * 渲染PDF文件
     * */
    renderPage(num) {
      this.pdfDoc.getPage(num).then((page) => {
        let canvas = document.getElementById("canvas" + num);
        let ctx = canvas.getContext("2d");
        let dpr = window.devicePixelRatio || 1; // 设备像素比
        let bsr =
          ctx.webkitBackingStorePixelRatio ||
          ctx.mozBackingStorePixelRatio ||
          ctx.msBackingStorePixelRatio ||
          ctx.oBackingStorePixelRatio ||
          ctx.backingStorePixelRatio ||
          1; // 浏览器在渲染canvas之前会用几个像素来来存储画布信息,类似img
        let ratio = dpr / bsr;
        let viewport = page.getViewport(1.5);
        canvas.width = viewport.width * ratio; // 画布大小,默认值是width:300px,height:150px
        canvas.height = viewport.height * ratio;
        canvas.style.width = viewport.width + "px"; // 画布的框架大小
        canvas.style.height = viewport.height + "px";
        let renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };
        page.render(renderContext);
        if (this.pages > num) {
          this.renderPage(num + 1);
        } else {
          this.closeServerLoadingHandle();
        }
      });
    },
  },
  mounted () {
      this.loadFile('https://test.aiosign.com:2900/filePath2/group1/M00/56/E5/wKgRDF82MfiADQzeAAFObNwlsiI693.pdf?token=b97202139319265ed835a0ba48e17db6&ts=1597628850')
  }
};
</script>

<style lang='less' scoped>
//@import url()
.pdf-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>