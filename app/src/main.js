import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from '@/router'
//引入Vuex仓库
import store from './store'
//引入mock
import '@/mock/mockServe'
//引入swiper的css样式,样式直接引就可以
import 'swiper/css/swiper.css'
// 三级联动组件 --- 注册TypeNav为   全局组件
import TypeNav from '@/components/TypeNav';
//第一个参数：全局组件的名字  第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);

//注册 轮播图全局组件
import Carsousel from '@/components/Carsousel';
Vue.component(Carsousel.name,Carsousel);

//注册 全局组件--分页器Pagination
import Pagination from '@/components/Pagination';
Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
