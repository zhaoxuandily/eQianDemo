// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Main'
import FlowDetail from './components/FlowDetail'
import DocView from './components/DocView'
import DocSign from './components/DocSign'
import SendSms from './components/SendSms'
import MyFiles from './components/MyFiles'
import UserList from './components/UserList'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/flowdetail/:type',
  component: FlowDetail
}, {
  path: '/docview/:id',
  component: DocView
}, {
  path: '/docsign',
  component: DocSign
}, {
  path: '/sendsms',
  component: SendSms
}, {
  path: '/myfiles',
  component: MyFiles
}, {
  path: '/userlist/:type',
  component: UserList
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
