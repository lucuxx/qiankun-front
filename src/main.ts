import './public-path'
import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import routes from './router'
import store from './store'
import util from './util'
import axios from './axios'
import Components from './components/index'
// @ts-ignore
import VueParticles from 'vue-particles'

import VueRouter from 'vue-router'


Vue.config.productionTip = false

Vue.use(Element, { size: 'small' })
Vue.use(VueParticles)
Vue.use(util)
Vue.use(axios)
// 注册全局组件
Vue.use(Components)

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app')
let instance:any = null


function render(props = {}) {
     // @ts-ignore：无法被执行的代码的错误
  const { container,routerBase } = props
  const router = new VueRouter({
     // @ts-ignore：无法被执行的代码的错误
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: 'history',
     // @ts-ignore：无法被执行的代码的错误
    routes,
  })

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

 // @ts-ignore：无法被执行的代码的错误
if (!window.__POWERED_BY_QIANKUN__) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑

  // 独立运行时，也注册一个名为global的store module
  // commonStore.globalRegister(store)
  // 模拟登录后，存储用户信息到global module
  // const userInfo = { name: '我是独立运行时名字叫张三' } // 假设登录后取到的用户信息
  // store.commit('global/setGlobalState', { user: userInfo })
 // @ts-ignore：无法被执行的代码的错误
  render()
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

export async function mount(props:any) {
  console.log('[vue] props from main framework', props)

  // commonStore.globalRegister(store, props)

  render(props)
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
