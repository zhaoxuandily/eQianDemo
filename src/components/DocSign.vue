<template>
  <div class="docsignPage">
    <img class="page-img" src="../assets/doc1.png">
    <img class="sign_middle" src="../assets/sign_middle.png">
    <div class="seal-drag" v-drag id="sealdrag" v-show="showSeal"><img src="../assets/seal.png"></div>
    <div class="bottom-bar">
      <img src="../assets/sign_bottom.png">
      <div class="seal1" @click="onShowSeal"></div>
      <div class="seal2"></div>
      <div class="seal3"></div>
      <div class="btn-sure" @click="show = true"></div>   
    </div>
    <div v-transfer-dom>
      <confirm v-model="show"
      :title="`提示`" @on-confirm="onConfirm">
        <p style="text-align:center;">{{ `本文档将加盖以下印章，请确定`}}</p>
        <div style="text-align:center;">
          <img style="width:50%" src="../assets/seal_confirm.png">
        </div>
      </confirm>
    </div>
  </div>    
</template>

<script>
import {Confirm, TransferDomDirective as TransferDom} from 'vux'

export default {
  components: {
    Confirm
  },
  data () {
    return {
      show: false,
      showSeal: false
    }
  },
  methods: {
    onConfirm () {
      this.$router.replace({ path: '/sendsms' })
    },
    onShowSeal () {
      this.showSeal = true
      document.getElementsByClassName('docsignPage')[0].scrollTop = 800
    }
  },
  directives: {
    TransferDom,
    drag (el, bindings) {
      el.ontouchstart = function (e) {
        let touch = e.targetTouches[0]
        var disx = touch.pageX - el.offsetLeft
        var disy = touch.pageY - el.offsetTop
        document.ontouchmove = function (e) {
          e.preventDefault()
          let touch = e.targetTouches[0]
          el.style.left = touch.pageX - disx + 'px'
          el.style.top = touch.pageY - disy + 'px'
        }
        document.ontouchend = function () {
          document.ontouchmove = document.ontouchstart = null
        }
      }
    }
  }
}
</script>

<style>
.docsignPage{
  position: relative;
  height: 620px;
  height: 93vh;
  overflow: auto;
}
.docsignPage .page-img{
  width: 100%;
  display: block;
  margin-bottom: 130px;
  margin-bottom: 35vw;
}
.sign_middle{
  position: fixed;
  top: 240px;
  top: 36vh;
  width: 30px;
  right: 0;
}
.bottom-bar{
  position: fixed;
  bottom: 0;
}
.bottom-bar img{
  width: 100%;
  display: block;
}
.seal1{
  position: absolute;
  bottom: 45px;
  bottom: 12vw;
  height: 85px;
  height: 23vw;
  width: 82px;
  width: 22vw;
  left: 70px;
  left: 19vw;
}
.seal2{
  position: absolute;
  bottom: 45px;
  bottom: 12vw;
  height: 85px;
  height: 23vw;
  width: 72px;
  width: 19vw;
  left: 152px;
  left: 41vw;
}
.seal3{
  position: absolute;
  bottom: 45px;
  bottom: 12vw;
  height: 85px;
  height: 23vw;
  width: 82px;
  width: 22vw;
  left: 222px;
  left: 60vw;
}

.btn-sure{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45px;
  height: 12vw;
}
.seal-drag{
  position: absolute;
  top: 1100px;
  top: 300vw;
  left: 50%;
  width: 70px;
  background: rgba(255,255,255,0.5);
  touch-action: none;
}
.seal-drag img{
  width: 100%;
  display: block;
}
</style>
