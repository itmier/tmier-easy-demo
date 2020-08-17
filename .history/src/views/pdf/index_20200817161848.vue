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
  mounted() {
    this.getPDF();
  },
  data() {
    return {
      pdfData: "",
      url:
        "https://emier-md-pics.oss-cn-beijing.aliyuncs.com/pdf/%E7%A7%9F%E6%88%BF%E5%90%88%E5%90%8C.pdf",
      scale: 1,
      currentPage: 1,
      pdfText: {
        items: [],
      },
    };
  },
  computed: {},
  methods: {
    async getPDF(fileData = null) {
      let pdf = null;
      fileData
        ? (pdf = await PDFJS.getDocument(fileData))
        : (pdf = await PDFJS.getDocument(this.url));

      this.pdfData = pdf;
      // pdf数据页数从1开始
      for (let i = 1; i <= pdf.numPages; i++) {
        this.renderPdf(pdf, i);
      }
    },
    async renderPdf(pdf, num) {
      try {
        const page = await pdf.getPage(num);

        const viewport = page.getViewport(this.scale);
        // 存放canvas的元素
        const container = this.$refs.container;
        const pageDiv = document.createElement("div");
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        pageDiv.setAttribute("id", `page-${page.pageIndex + 1}`);
        pageDiv.setAttribute(
          "style",
          ` position: relative;
            display: flex;
            justify-content: center;
            padding-top: 50px `
        );
        pageDiv.appendChild(canvas);

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport,
        };

        page.render(renderContext);
        container.appendChild(pageDiv);
        // this.renderText(page, viewport, pageDiv);
      } catch (e) {
        console.error("Pdf Render Error::", e);
      }
    },
    async renderText(page, viewport, pageDiv) {
      try {
        const textContent = await page.getTextContent();
        const textLayerDiv = document.createElement("div");

        this.pdfText.items = this.pdfText.items.concat(textContent.items);

        // 用于文字层与canvas层文字对齐
        textLayerDiv.setAttribute("class", "textLayer");
        textLayerDiv.setAttribute(
          "style",
          `width: ${viewport.width}px; margin: 0 auto; margin-top: 50px`
        );

        const textLayer = new TextLayerBuilder({
          textLayerDiv: textLayerDiv,
          pageIndex: page.pageIndex,
          viewport,
        });

        textLayer.setTextContent(textContent);
        textLayer.render();
        pageDiv.appendChild(textLayerDiv);
      } catch (e) {
        console.error("Text Render Error::", e);
      }
    },
  },
};
</script>

<style lang='less' scoped>
//@import url()
.PDF {
  width: 100%;
  height: 100%;
  display: block;
  overflow-y: auto;
  #container {
    width: 100%;
  }
}
/*滚动条整体部分*/
.PDF::-webkit-scrollbar {
  width: 12px;
  height: 10px;
}
/*滚动条的轨道*/
.PDF::-webkit-scrollbar-track {
  background-color: #ffffff;
}
/*滚动条里面的小方块，能向上向下移动*/
.PDF::-webkit-scrollbar-thumb {
  background-color:#67C23A;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.PDF::-webkit-scrollbar-thumb:hover {
  background-color: #a8a8a8;
}
.PDF::-webkit-scrollbar-thumb:active {
  background-color: #787878;
}
/*边角，即两个滚动条的交汇处*/
.PDF::-webkit-scrollbar-corner {
  background-color: #ffffff;
}
</style>