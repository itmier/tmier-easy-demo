<template>
  <div class="PDF">
    <div class="pdf_down">
      <div class="pdf_set_left" @click="scaleD()">放大</div>
      <div class="pdf_set_middle" @click="scaleX()">缩小</div>
    </div>

    <div :style="{width:pdf_div_width,margin:'0 auto'}">
      <canvas v-for="page in pdf_pages" :id="'the-canvas'+page" :key="page"></canvas>
    </div>
  </div>
</template>

<script>
//import x from ''
var PDFJS = require("pdfjs-dist");
export default {
  name: "PDDF",
  components: {},
  data() {
    return {
      pdf_scale: 1.0, //pdf放大系数
      pdf_pages: [],
      pdf_div_width: "",
      pdf_src: null,
    };
  },
  computed: {},
  mounted () {
    this.get_pdfurl()
  },
  methods: {
    get_pdfurl() {
      //获得pdf
      //例子:加载pdf线上示例
      this.pdf_src =
        "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";
      this._loadFile(this.pdf_src);
      return;

      //线上请求
      this.$axios.get("").then((res) => {
        this.pdf_src = res.url;
        this._loadFile(this.pdf_src);
      });
    },
    _loadFile(url) {
      //初始化pdf
      let loadingTask = PDFJS.getDocument(url);
      loadingTask.promise.then((pdf) => {
        this.pdfDoc = pdf;
        this.pdf_pages = this.pdfDoc.numPages;
        this.$nextTick(() => {
          this._renderPage(1);
        });
      });
    },
    _renderPage(num) {
      //渲染pdf页
      const that = this;
      this.pdfDoc.getPage(num).then((page) => {
        let canvas = document.getElementById("the-canvas" + num);
        let ctx = canvas.getContext("2d");
        let dpr = window.devicePixelRatio || 1;
        let bsr =
          ctx.webkitBackingStorePixelRatio ||
          ctx.mozBackingStorePixelRatio ||
          ctx.msBackingStorePixelRatio ||
          ctx.oBackingStorePixelRatio ||
          ctx.backingStorePixelRatio ||
          1;
        let ratio = dpr / bsr;
        let viewport = page.getViewport({ scale: this.pdf_scale });

        canvas.width = viewport.width * ratio;
        canvas.height = viewport.height * ratio;

        canvas.style.width = viewport.width + "px";

        that.pdf_div_width = viewport.width + "px";

        canvas.style.height = viewport.height + "px";

        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        let renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };
        page.render(renderContext);
        if (this.pdf_pages > num) {
          this._renderPage(num + 1);
        }
      });
    },
  },
};
</script>

<style lang='less' scoped>
//@import url()
</style>