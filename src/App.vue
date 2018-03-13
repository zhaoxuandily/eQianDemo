<template>
  <div id="app">
    <x-header style="background-color:#fff;" :left-options="{backText: '',preventGoBack: preventGoBack }" :right-options="{showMore:false }" :title="title" @on-click-back='onClickBack'></x-header>
    <router-view></router-view>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  name: 'app',
  components: {
    XHeader
  },
  computed: {
    title: function () {
      if (this.$route.path === '/') return 'e签宝'
      if (this.$route.path === '/flowdetail/1' || this.$route.path === '/docsign') return '签署'
      if (this.$route.path === '/flowdetail/2' || this.$route.path === '/flowdetail/3' || this.$route.path === '/flowdetail/4') return '流程详情'
      if (this.$route.path === '/docview/1' || this.$route.path === '/docview/2' || this.$route.path === '/docview/3') return '文档预览'
      if (this.$route.path === '/myfiles') return '我的文件'
      if (this.$route.path === '/userlist/1' || this.$route.path === '/userlist/2' || this.$route.path === '/userlist/3') return '添加签署人'
      return 'e签宝'
    },
    preventGoBack: function () {
      if (this.$route.path === '/flowdetail/4' || this.$route.path === '/') {
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

body {
  background-color: #f2f2f2;
}
</style>
