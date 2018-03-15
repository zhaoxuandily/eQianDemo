<template>
  <div class="sendsmsPage" >
    <img class="page-img" src="../assets/sms.png"> 
    <router-link  :to="{path:'/flowdetail/4/'+id }"  class="link-done"></router-link>
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
  .sendsmsPage{
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 199;
  }
  .page-img{
    width: 100%;
    display: block;
  }
  .link-done{
    position: absolute;
    top: 64vw;
    left: 50vw;
    width: 36%;
    height: 45px;
    height: 12vw;
  }
</style>
