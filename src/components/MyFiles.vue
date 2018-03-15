<template>
  <div class="myfilesPage" >
    <img class="page-img" src="../assets/myfiles1.png"> 
    <img class="selected-img" :class="'doc'+ selected" v-show="selected" src="../assets/myfiles2_radio_select.png"> 
    <img class="bottom-img" src="../assets/myfiles_bottom.png"> 
    <div class="link-doc1" @click=" selected = '1' " ></div>
    <div class="link-doc2" @click=" selected = '2' " ></div>
    <div class="link-doc3" @click=" selected = '3' " ></div>
    <router-link :to="{path:'/userlist/1/' + selected}" class="btn-sure"></router-link>
    <div class="btn-cancel" @click="back" ></div>
  </div>    
</template>

<script>
import {} from 'vux'

export default {
  components: {
  },

  data () {
    return {
      selected: 0
    }
  },
  computed: {
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.myfilesPage{
  position: relative;
  padding-top: 46px;
  overflow: auto;
  height: 100%;
  box-sizing: border-box;
}
.bottom-img{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: block;
}
.selected-img{
  position: absolute;
  right: 0;
  width: 64px;
  width: 17vw;
}
.selected-img.doc1 {
  top: 52px;
  top: calc(1.5vw + 46px);
}
.selected-img.doc2 {
  top: 132px;
  top: calc(21.5vw + 46px);
}
.selected-img.doc3 {
  top: 212px;
  top: calc(41.5vw + 46px);
}
.myfilesPage .page-img{
  display: block;
  width: 100%;
}
.link-doc1{
  position: absolute;
  top: 46px;
  left: 0;
  width: 100%;
  height: 80px;
  height: 20vw;
}
.link-doc2{
  position: absolute;
  top: 126px;
  top: calc( 20vw + 46px);
  left: 0;
  width: 100%;
  height: 80px;
  height: 20vw;
}
.link-doc3{
  position: absolute;
  top: 206px;
  top: calc( 40vw + 46px);
  left: 0;
  width: 100%;
  height: 80px;
  height: 20vw;
}
.myfilesPage .btn-sure{
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 50%;
  height: 45px;
  height: 12vw;
}
.myfilesPage .btn-cancel{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 45px;
  height: 12vw;
}
</style>
