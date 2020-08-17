<!--
 * @Author: Tmier
 * @Date: 2020-08-07 15:02:29
 * @LastEditTime: 2020-08-17 09:07:48
 * @Description: 
-->
<template>
  <div class="PDF">
    <div id="netca_canvas" ref="netca_canvas"></div>
  </div>
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
  computed: {},
  methods: {},
  mounted() {
    this.loadFile(pdfBase64.base64);
  }
};
</script>

<style lang='less' scoped>
//@import url()
</style>