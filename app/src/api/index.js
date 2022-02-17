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
export const reqGoodsInfo=(skuId)=>requests({url:`/item/${skuId}`,method:'get'})

//加入购物车
export const reqAddOrUpdateShopCart =(skuId,skuNum) =>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

//获取购物车列表数据接口
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'})

//修改购物车某一个产品的选中状态
///api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCheckedByid=(skuId,isChecked) =>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
//删除某一个产品的操作
///api/cart/deleteCart/{skuId}
export const reqDeleteCartById=(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
