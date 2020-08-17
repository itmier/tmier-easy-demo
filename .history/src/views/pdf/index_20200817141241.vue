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
export default {
  name: "PDDF",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang='less' scoped>
//@import url()
</style>