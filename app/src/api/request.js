//二次封装axios
import axios from "axios";
//在当前模块中引入store
import store from '@/store'
//进度条  ------ start()开始  done()结束 
import nprogress, { start } from "nprogress";
import "nprogress/nprogress.css"
//利用axios方法的create创建一个axios实例
//request就是axios，只不过稍微配置一下
const requests = axios.create({
    //配置对象
    //基础路径 
    baseURL:"/api",
    //代表请求时间超时
    timeout:5000
});
//请求拦截器，发出请求之前可以拦截并且做一些事情
requests.interceptors.request.use((config)=>{
    if (store.state.detail.uuid_token){
        //请求头添加一个字段(userTempId):和后台老师商量好了
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    //进度条开始
    nprogress.start();
    //config  配置对象  对象中有一个属性重要，header请求头
    return config;
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    //进度条结束
    nprogress.done();
    //成功的回调函数
    return res.data;
},(error)=>{
    //失败的回调函数
    return Promise.reject(new Error('faile'));
})

export default requests;