import Vue from "vue";
import Vuex from "vuex"

//使用Vue插件
Vue.use(Vuex);

import home from './home'
import search from './search'
import detail from './detail'
import shopCart from './shopCart'

export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopCart
    }
})

