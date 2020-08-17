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
let PDFJS = require('pdfjs-dist');
export default {
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
  methods: {
    get_pdfurl() {
      //获得pdf
      //例子:加载pdf线上示例
      this.pdf_src =
        "https://emier-md-pics.oss-cn-beijing.aliyuncs.com/pdf/%E7%A7%9F%E6%88%BF%E5%90%88%E5%90%8C.pdf";
      this._loadFile(this.pdf_src);
      return;

      //线上请求
      this.$axios.get("").then((res) => {
        this.pdf_src = res.url;
        this._loadFile(this.pdf_src);
      });
    },
    _loadFile (url) {  //初始化pdf
        let loadingTask = PDFJS.getDocument(url)
        loadingTask.promise
        .then((pdf) => {
          this.pdfDoc = pdf
          this.pdf_pages = this.pdfDoc.numPages
          this.$nextTick(() => {
            this._renderPage(1)
          })
        })
     },
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
//@import url()
#the-canvas {
  border: 1px solid black;
  direction: ltr;
}
</style>