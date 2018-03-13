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
  height: 620px;
  height: 93vh;
  overflow: auto;
}
.docviewPage .page-img {
  width: 100%;
  display: block;
}
</style>
