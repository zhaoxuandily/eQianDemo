<template>
  <div class="userlistPage" >
    <img class="page-img" v-show="type === '1' && !addUser" src="../assets/userlist0.png"> 
    <img class="page-img" v-show="type === '1' && addUser" src="../assets/userlist1.png"> 
    <img class="page-img" v-show="type === '3'" src="../assets/userlist2.png"> 
    <img class="bottom-img" src="../assets/myfiles_bottom.png"> 
    <router-link to="/docview/1" class="link-view"></router-link>
    <div class="link-add" @click="addUser = true"></div>
    <router-link to="/userlist/3" v-if="addUser" class="btn-sure" replace></router-link>
    <router-link to="/docsign" v-if="type === '3' || (type === '1' && !addUser)" class="btn-sure"></router-link>
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
      addUser: false
    }
  },
  computed: {
    type: function () {
      return this.$route.params.type
    }
  },
  methods: {
    back () {
      if (this.type === '1' && this.addUser) {
        this.addUser = false
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style>
.userlistPage{
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
.userlistPage .page-img{
  display: block;
  width: 100%;
}
.userlistPage .link-view{
  position: absolute;
  top: 46px;
  right: 0;
  width: 30%;
  height: 50px;
  height: 13vw;
}
.userlistPage .link-add{
  position: absolute;
  top: 96px;
  top: calc(13vw + 46px);
  right: 0;
  width: 30%;
  height: 50px;
  height: 13vw;
}
.userlistPage .btn-sure{
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 45px;
  height: 12vw;
}
.userlistPage .btn-cancel{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 45px;
  height: 12vw;
}
</style>
