<!--
 * @Author: Tmier
 * @Date: 2020-08-07 15:02:29
 * @LastEditTime: 2020-08-17 09:32:47
 * @Description: 
-->
<template>
  <div class="PDF">
    <div id="netca_canvas" ref="netca_canvas"></div>
  </div>
  <!-- <div>
    111
  </div> -->
</template>

<script>
//import x from ''
import PDF from "../../../public/static/pdfjs-dist/pdf";
import pdfBase64 from "./pdf";
export default {
  name: "PDF",
  components: {},
  data() {
    return {
      pdfDoc: "",
      pages: 1,
    };
  },
  mounted() {
    // this.loadFile(pdfBase64.base64);
  },
  computed: {},
  methods: {
    /*加载PDF文件*/
    loadFile(mybase64) {
      this.$refs.netca_canvas.innerHTML = "";
      let decodedBase64 = atob(mybase64); //使用浏览器自带的方法解码
      let _this = this;

      PDF.getDocument({
        data: decodedBase64,
      }).then(function (pdf) {
        _this.pdfDoc = pdf;
        console.log(_this.pdfDoc);
        _this.pages = _this.pdfDoc.numPages;
        console.log(_this.pages);
        for (let i = 1; i <= _this.pages; i++) {
          _this.renderPage(i);
        }
      });
    },
        /*渲染PDF文件*/
    renderPage(num, curFile) {
      this.pdfDoc.getPage(num).then(function(page) {
        let netca_canvas = document.getElementById("netca_canvas");
        let canvas = document.createElement("canvas");
        canvas.className = "canvasCss";
        netca_canvas.appendChild(canvas);
        canvas.style.width = "60%";
        // let canvas = document.getElementById('canvas'+num+ curFile);
        let ctx = canvas.getContext("2d");
        let scale = 2.5; //缩放倍数
        let viewport = page.getViewport(scale);
        let context = canvas.getContext("2d"); //创建绘制canvas的对象
        canvas.height = viewport.height; //定义canvas高和宽
        canvas.width = viewport.width;

        var renderContext = {
          canvasContext: ctx,
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