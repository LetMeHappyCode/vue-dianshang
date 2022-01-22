import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

//引入动态组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register'

//以下代码为了防止编程式跳转的push方法，点击多次不会报错
//VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push;
//重写push||replace
//第一个参数：告诉原来push方法往哪里跳转（传递那些参数）
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && this.reject){
        //区分call 和 apply 的区别
        originPush.call(this,location,this.replace,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/search/:keyword",
            component:Search,
            name:"search",
            meta:{show:true},
            //函数写法，路由组件传参，可以传递params、query ，通过props传递给路由组件
            props:($router)=>{
                return {keyword:$router.params.keyword,k:$router.query.k}
            }
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        {
            path:"*",
            redirect:"/home"
        }
    ]
})