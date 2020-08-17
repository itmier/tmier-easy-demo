<template>
  <div class="PDF">
    <el-card style="margin-right:20px" class="pdfMenu">
      <el-button type="primary" @click="resize('add')" :disabled="!big">放大</el-button>
      <el-button type="primary" @click="resize('minus')" :disabled="!small">缩小</el-button>
      <el-tag type="success">当前比例: {{ scale | toFixed }}</el-tag>
      <el-button type="success" @click="prevPage">上一页</el-button>
      <el-tag type="info">当前页面: {{ currentPage }}</el-tag>
      <el-button type="success" @click="nextPage">下一页</el-button>
    </el-card>
    <el-card class="Thumbnail">666</el-card>
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
  filters: {
    toFixed(num) {
      return num.toFixed(1);
    },
  },
  computed: {
    big() {
      if (this.scale > 2.8) {
        return false;
      } else {
        return true;
      }
    },
    small() {
      if (this.scale < 0.11) {
        return false;
      } else {
        return true;
      }
    },
  },
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
        this.renderText(page, viewport, pageDiv);
      } catch (e) {
        console.error("Pdf Render Error::", e);
      }
    },
    reRenderPdf() {
      for (let i = 1; i <= this.pdfData.numPages; i++) {
        this.renderPdf(this.pdfData, i);
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
    resize(type) {
      type === "add" ? (this.scale += 0.1) : (this.scale -= 0.1);

      this.$refs.container.innerHTML = "";
      this.$nextTick(() => {
        this.reRenderPdf();
      });
    },
    prevPage() {
      if (!this.checkPageValid("minus")) return;

      this.currentPage--;
      this.changePage();
    },
    nextPage() {
      if (!this.checkPageValid("add")) return;

      this.currentPage++;
      this.changePage();
    },
    changePage() {
      location.hash = `#page-${this.currentPage}`;
    },
    checkPageValid(type) {
      if (this.currentPage > 1 && this.currentPage < this.pdfData.numPages) {
        return true;
      }
      if (type === "minus" && this.currentPage === 1) {
        this.$message.info("已经是第一页了");
        return false;
      }
      if (type === "add" && this.currentPage === this.pdfData.numPages) {
        this.$message.info("已经是最后一页了");
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang='less' scoped>
//@import url()
.pdfMenu {
  position: fixed;
  top: 90px;
  z-index: 1000;
}
.PDF {
  width: 100%;
  height: 100%;
  display: block;
  overflow-y: auto;
  #container {
    width: 100%;
    padding-bottom: 50px;
  }
}
.Thumbnail {
  position: fixed;
  right: 15px;
  width: 120px;
  height: 100%;
}
/*滚动条整体部分*/
.PDF::-webkit-scrollbar {
  width: 14px;
  height: 10px;
}
/*滚动条的轨道*/
.PDF::-webkit-scrollbar-track {
  background-color: #ffffff;
}
/*滚动条里面的小方块，能向上向下移动*/
.PDF::-webkit-scrollbar-thumb {
  background-color: #67c23a;
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