import {reqCartList,reqUpdateCheckedByid,reqDeleteCartById} from '@/api'
import el from "element-ui/src/locale/lang/el";
const state={
    cartList:[]
};
const mutations={
    GETCARTLIST(state,cartList){
        state.cartList=cartList
    }
};
const actions={
    //获取购物车列表数据
    async getCartList({commit}){
        let result = await reqCartList();
        if (result.code == 200){
            commit("GETCARTLIST",result.data)
        }
    },
    //修改购物车某一个产品的选中状态
    async updateCheckedById({commit},{skuId,isChecked}){
        let result =await reqUpdateCheckedByid(skuId,isChecked);
        if (result.code == 200){
            return "ok"
        }else {
            return Promise.reject(new Error("faile"))
        }
    },

    //修改全部产品的状态
    updateAllCartIsChecked({dispatch,state},isChecked){
        //数组
        let  promiseAll=[];
        state.cartList[0].cartInfoList.forEach((item)=>{
            let promise = dispatch("updateCheckedById",{
                skuId:item.skuId,
                isChecked
            });
            // console.log("promise值")
            // console.log(promise)

            promiseAll.push(promise)
            // console.log("promiseAll")
            // console.log(promiseAll)
        });
        return Promise.all(promiseAll)
    },
    //删除某一个产品的操作
    ///api/cart/deleteCart/{skuId}
    async deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200){
            return  "ok"
        }else {
            return  Promise.reject(new Error("faile"))
        }
    },
    //删除选中产品的操作
    deleteAllCheckedCart({dispatch,getters}){
        //遍历cart列表中的，每一个值，找出选中的删除
        let PromiseAll=[];
        getters.cartList.cartInfoList.forEach((item)=>{
            let promise=item.isChecked==1 ? dispatch("deleteCartListBySkuId",item.skuId) :"";
            //每一次返回添加到数组
            PromiseAll.push(promise);
        });
        //全部成功  返回成功
        console.log(Promise.all(PromiseAll))

        return Promise.all(PromiseAll)
    }
};
const getters={
    cartList(state){
        return state.cartList[0] || {}
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}