import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store';
//三级联动全局组件
import TypeNav from '@/components/TypeNav';
Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
