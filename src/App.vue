<template>
  <div id="app">
    <x-header style="background-color:#fff;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 100;" :left-options="{backText: '',preventGoBack: preventGoBack,showBack:showBack }" :right-options="{showMore:false }" :title="title" @on-click-back='onClickBack'></x-header>
    <transition
        :name="viewTransition" :css="!!direction">      
      <router-view></router-view>      
    </transition>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    XHeader
  },
  computed: {
    ...mapState({
      direction: state => state.vux.direction
    }),
    title: function () {
      if (this.$route.path === '/') return 'e签宝'
      if (this.$route.path === '/flowdetail/1' || this.$route.path === '/docsign') return '签署'
      if (this.$route.path === '/flowdetail/2' || this.$route.path === '/flowdetail/3' || this.$route.path === '/flowdetail/4') return '流程详情'
      if (this.$route.path === '/docview/1' || this.$route.path === '/docview/2' || this.$route.path === '/docview/3') return '文档预览'
      if (this.$route.path === '/myfiles') return '我的文件'
      if (this.$route.path === '/userlist/1' || this.$route.path === '/userlist/2' || this.$route.path === '/userlist/3') return '添加签署人'
      return 'e签宝'
    },
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    },
    preventGoBack: function () {
      if (this.$route.params.type === '4' || this.$route.path === '/') {
        return true
      }
    },
    showBack: function () {
      if (this.$route.path === '/') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    onClickBack () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html,body,#app{
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
body {
  background-color: #f2f2f2;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: calc(100vh - 46px);     
  //top: 46px;
  position: absolute !important;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
