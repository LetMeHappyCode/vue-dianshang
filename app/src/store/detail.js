import {reqGoodsInfo,reqAddOrUpdateShopCart} from "@/api";
//封装游客身份的uuid，生成一个随机字符串
import {getUUID} from "@/utils/uuid_token";

const state={
    goodInfo:{},
    //游客身份
    uuid_token:getUUID()
};

const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo=goodInfo;
    }
};
const actions={
    async getGoodInfo({commit},skuId){
        let result=await reqGoodsInfo(skuId);
        if (result.code==200){
            commit("GETGOODINFO",result.data)
        }
    },
    //加入购物车 || 修改某一个商品的个数
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        //发请求:前端带一些参数给服务器【需要存储这些数据】，存储成功了，没有给返回数据
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
        if (result.code == 200){
            return "ok"
        }else {
            return Promise.reject(new Error("faile"))
        }
    }
};
const getters={
    categoryView(state){
        return state.goodInfo.categoryView || {};
    },
    //简化产品信息数据
    skuInfo(state){
        return state.goodInfo.skuInfo ||{};
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || [];
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}