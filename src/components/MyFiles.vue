<template>
  <div class="myfilesPage" >
    <img class="page-img" v-show="!selected" src="../assets/myfiles1.png"> 
    <img class="page-img" v-show="selected" src="../assets/myfiles2.png"> 
    <img class="bottom-img" src="../assets/myfiles_bottom.png"> 
    <div class="link-doc" @click=" selected = !selected" ></div>
    <router-link to="/userlist/1" class="btn-sure"></router-link>
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
      selected: false
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
.myfilesPage .page-img{
  display: block;
  width: 100%;
}
.link-doc{
  position: absolute;
  top: 46px;
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
