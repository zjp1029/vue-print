// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Layout from './pages/layout'
import IndexPage from './pages/IndexPage'
import PrintFile from './pages/PrintFilePage'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: IndexPage
        },
        {
            path: '/printFile',
            component: PrintFile
        }
    ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
