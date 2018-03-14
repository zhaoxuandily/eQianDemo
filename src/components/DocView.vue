<template>
  <div class="docviewPage" v-if=" id === '1' ">
    <img class="page-img" src="../assets/doc1.png"> 
  </div>
  <div class="docviewPage" v-else-if=" id === '2' ">
    <img class="page-img" src="../assets/doc2.png"> 
  </div>  
  <div class="docviewPage" v-else-if=" id === '3' ">
    <img class="page-img" src="../assets/doc3.png"> 
  </div>   
</template>

<script>
import {} from 'vux'

export default {
  components: {
  },

  data () {
    return {
    }
  },
  computed: {
    id: function () {
      return this.$route.params.id
    }
  }
}
</script>

<style>
.docviewPage {
  position: relative;
  padding-top: 46px;
  height: 100%;
  overflow: auto;
}
.docviewPage .page-img {
  width: 100%;
  display: block;
}
</style>
