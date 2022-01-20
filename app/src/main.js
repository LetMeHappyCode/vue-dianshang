import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from '@/router'
//引入Vuex仓库
import store from './store'

// 三级联动组件 --- 注册TypeNav为   全局组件
import TypeNav from '@/pages/Home/TypeNav'
//第一个参数：全局组件的名字  第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
