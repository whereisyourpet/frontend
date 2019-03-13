<template>
 <p>
  <!-- <v-html-panel :url.asyc="url1"></v-html-panel> -->
 </p>
</template>
<style scoped>
 
 </style>
<script>
import htmlPanel from "./htmlPanel.vue";

 export default{
  data () {
   return {
    url1: '',
    url2: ''
   }
  },
  mounted () {
   this.url1 = './speed.html'
  },
  methods: {
  }
 }
</script>
