<template>
  <div class="PDF">
    <script src="//mozilla.github.io/pdf.js/build/pdf.js"></script>

    <h1>PDF.js Previous/Next example</h1>

    <div>
      <button id="prev">Previous</button>
      <button id="next">Next</button>
      &nbsp; &nbsp;
      <span>
        Page:
        <span id="page_num"></span> /
        <span id="page_count"></span>
      </span>
    </div>

    <canvas id="the-canvas"></canvas>
  </div>
</template>

<script>
//import x from ''
import './test'
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
  },
  mounted() {
   
  },
};
</script>

<style lang='less' scoped>
//@import url()
#the-canvas {
  border: 1px solid black;
  direction: ltr;
}
</style>