<template>
  <div class="flowdetailPage" v-if=" type === '1' ">
    <img class="page-img" src="../assets/flowdetail1.png">
    <img class="bottom-img" src="../assets/flowdetail1_bottom.png"> 
    <router-link to="/docview/1" class="link-view"></router-link>
    <router-link to="/docsign" class="link-sign"></router-link>
  </div>
  <div class="flowdetailPage" v-else-if=" type === '2' ">
    <img class="page-img" src="../assets/flowdetail2.png"> 
    <img class="bottom-img" src="../assets/flowdetail2_bottom.png"> 
    <router-link to="/docview/2" class="link-view"></router-link>
    <div class="link-sign" @click="show = true"></div>

    <div v-transfer-dom>
      <confirm v-model="show"
      :title="`已提醒`">
        <p style="text-align:center;">{{ `e签宝已经为您提醒对方用户尽快签名`}}</p>
      </confirm>
    </div>
  </div> 
  <div class="flowdetailPage" v-else-if=" type === '3' ">
    <img class="page-img" src="../assets/flowdetail3.png"> 
    <router-link to="/docview/3" class="link-view"></router-link>
  </div> 
  <div class="flowdetailPage" v-else-if=" type === '4' ">
    <img class="page-img" src="../assets/flowdetail4.png"> 
    <router-link to="/docview/1" class="link-view"></router-link>
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
      show: false
    }
  },
  computed: {
    type: function () {
      return this.$route.params.type
    }
  }
}
</script>

<style>
.flowdetailPage {
  position: relative;
  height: 620px;
  height: 93vh;
  overflow: auto;
}
.bottom-img{
  position: fixed;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  height: 27vw;
}
.flowdetailPage .link-sign {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 33.3%;
  height: 50px;
  height: 13vw;
}
</style>
