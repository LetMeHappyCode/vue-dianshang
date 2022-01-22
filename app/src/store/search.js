//search模块小仓库
import { reqSearchInfo } from '@/api/index'
const state = {
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
        console.log("调用mutations")
    }
};
const actions = {
    //reqSearchInfo
    async getSearchList({ commit }, params = {}) {
        let result = await reqSearchInfo(params);
        if (result.code == 200) {
            console.log("调用actions");
            commit("GETSEARCHLIST", result.data);
        }
    }
};
const getters = {
    goodsList(state){
        //如果网路不好，返回空数组
        return state.searchList.goodsList || [];
    },
    attrsList(state){
        return state.searchList.attrsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}