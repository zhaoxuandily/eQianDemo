<template>
  <div class="flowdetailPage" v-if=" type === '1' ">
    <router-link :to="{path:'/docview/2/'+id }" >
      <img class="page-img" v-if="id === '1' " src="../assets/flowdetail_top_1.png" >
      <img class="page-img" v-if="id === '2' " src="../assets/flowdetail_top_2.png" >
      <img class="page-img" v-if="id === '3' " src="../assets/flowdetail_top_3.png" >
    </router-link>
    <img class="page-img" src="../assets/flowdetail1.png">
    <img class="bottom-img" src="../assets/flowdetail1_bottom.png"> 
    <router-link :to="{path:'/docsign/2/'+id }" class="link-sign"></router-link>
  </div>
  <div class="flowdetailPage" v-else-if=" type === '2' ">
    <router-link :to="{path:'/docview/1/'+id }" >
      <img class="page-img" v-if="id === '1' " src="../assets/flowdetail_top_1.png" >
      <img class="page-img" v-if="id === '2' " src="../assets/flowdetail_top_2.png" >
      <img class="page-img" v-if="id === '3' " src="../assets/flowdetail_top_3.png" >
    </router-link>
    <img class="page-img" src="../assets/flowdetail2.png"> 
    <img class="bottom-img" src="../assets/flowdetail2_bottom.png"> 
    <div class="link-sign" @click="show = true"></div>

    <div v-transfer-dom>
      <confirm v-model="show"
      :title="`已提醒`">
        <p style="text-align:center;">{{ `e签宝已经为您提醒对方用户尽快签名`}}</p>
      </confirm>
    </div>
  </div> 
  <div class="flowdetailPage" v-else-if=" type === '3' ">
     <router-link :to="{path:'/docview/3/'+id}" >
      <img class="page-img" v-if="id === '1' " src="../assets/flowdetail_top_1.png" >
      <img class="page-img" v-if="id === '2' " src="../assets/flowdetail_top_2.png" >
      <img class="page-img" v-if="id === '3' " src="../assets/flowdetail_top_3.png" >
    </router-link>
    <img class="page-img" src="../assets/flowdetail3.png">
  </div> 
  <div class="flowdetailPage" v-else-if=" type === '4' ">
    <router-link :to="{path:'/docview/1/'+id}" >
      <img class="page-img" v-if="id === '1' " src="../assets/flowdetail_top_1.png" >
      <img class="page-img" v-if="id === '2' " src="../assets/flowdetail_top_2.png" >
      <img class="page-img" v-if="id === '3' " src="../assets/flowdetail_top_3.png" >
    </router-link>
    <img class="page-img" src="../assets/flowdetail4.png"> 
  </div>  
</template>

<script>
import {Confirm, TransferDomDirective as TransferDom} from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Confirm
  },
  data () {
    return {
      show: false,
      baseurl: '../static/images/flowdetail_top_1.png'
    }
  },
  computed: {
    type: function () {
      return this.$route.params.type
    },
    id: function () {
      return this.$route.params.id
    }
  }
}
</script>

<style>
.flowdetailPage {
  position: relative;
  padding-top: 46px;
  overflow: auto;
  box-sizing: border-box;
  height: 100%;
}
.bottom-img{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: block;
}
.flowdetailPage .page-img {
  width: 100%;
  display: block;
}
.flowdetailPage .link-view {
  position: absolute;
  top: 46px;
  left: 0;
  width: 100%;
  height: 100px;
  height: 27vw;
}
.flowdetailPage .link-sign {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  height: 13vw;
}
</style>
