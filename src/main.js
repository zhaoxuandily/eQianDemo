// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import Vuex from 'vuex'
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
Vue.use(Vuex)

let store = new Vuex.Store({
})

Vue.use(store)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/flowdetail/:type/:id',
  component: FlowDetail
}, {
  path: '/docview/:type/:id',
  component: DocView
}, {
  path: '/docsign/:type/:id',
  component: DocSign
}, {
  path: '/sendsms/:id',
  component: SendSms
}, {
  path: '/myfiles',
  component: MyFiles
}, {
  path: '/userlist/:type/:id',
  component: UserList
}]

const router = new VueRouter({
  routes
})

store.registerModule('vux', {
  state: {
    direction: 'forward'
  },
  mutations: {
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
  }
})
// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})

router.beforeEach(function (to, from, next) {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', {direction: ''})
      } else {
        store.commit('updateDirection', { direction: 'reverse' })
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach(function (to) {
  isPush = false
  if (process.env.NODE_ENV === 'production') {
   // ga && ga('set', 'page', to.fullPath)
   // ga && ga('send', 'pageview')
  }
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
