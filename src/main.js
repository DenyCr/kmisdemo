import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Record from './components/Record.vue'
// import ListOfArmor from './components/ListOfArmor.vue'
Vue.use(Router)

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })


const router = new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: App,
    },
    {
      path: '/post/:id',
      name:'post',
      component:  require('./components/ListOfArmor.vue'),
      props: true,
    },
  ]
 })
 
 new Vue({
  el: '#app',
  render: h => h(App),
  router
 })