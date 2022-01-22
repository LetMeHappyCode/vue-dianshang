//统一管理api
import requests from "./request";
//引入mock
import mockRequests from './mockAjax';

//axios的返回结果是promise对象

//三级菜单的请求地址  /api/product/getBaseCategoryList   GET    没有任何参数
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});
export const reqGetBannerList = ()=>mockRequests.get("/banner");
export const reqFloorList = ()=>mockRequests({url:'/floor'});
//搜索界面 传递一个默认参数至少是空对象
export const reqSearchInfo =(params)=>requests({url:'/list',method:"post",data:params});
