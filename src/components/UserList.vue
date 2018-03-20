<template>
  <div class="userlistPage" >
    <img class="page-img" v-if="id === '1' " src="../assets/userlist0_top_1.png" >
    <img class="page-img" v-if="id === '2' " src="../assets/userlist0_top_2.png" >
    <img class="page-img" v-if="id === '3' " src="../assets/userlist0_top_3.png" >
    <img class="page-img" v-show="type === '1' && !addUser" src="../assets/userlist0.png"> 
    <img class="page-img" v-show="type === '1' && addUser && !selectUser" src="../assets/userlist1.png"> 
    <img class="page-img" v-show="type === '1' && addUser && selectUser" src="../assets/userlist1_1.png"> 
    <img class="page-img" v-show="type === '3'" src="../assets/userlist2.png"> 
    <img class="bottom-img" src="../assets/myfiles_bottom.png"> 
    <router-link :to="{ path:'/docview/2/' + id}" class="link-view"></router-link>
    <div class="link-add" @click="addUser = true"></div>
    <div class="link-select" v-if=" type === '1' && addUser " @click="selectUser = true"></div>
    <router-link :to="{path:'/userlist/3/' + id}" v-if="addUser" class="btn-sure" replace></router-link>
    <router-link :to="{path:'/docsign/2/'+id }" v-if="type === '3'" class="btn-sure"></router-link>
    <div v-if="type === '1' && !addUser" class="btn-sure" @click="addUser = true"></div>
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
      addUser: false,
      selectUser: false
    }
  },
  computed: {
    type: function () {
      return this.$route.params.type
    },
    id: function () {
      return this.$route.params.id
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
.userlistPage .link-select{
  position: absolute;
  top: 186px;
  top: calc(37vw + 46px);
  left: 0;
  width: 100%;
  height: 45px;
  height: 12vw;
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
