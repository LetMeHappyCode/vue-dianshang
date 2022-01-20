import { reqCategoryList } from "@/api";
//home模块小仓库
const state={
    categoryList:[],
};
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList;
        console.log("调用categoryList  mutations")
    }
};
const actions ={
    //调用api中的接口，向服务器发送数据，获取数据
    async categoryList({commit}){
        let result =await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
            console.log("调用categoryList  action接口 数据成功")
        }
        else{
            console.log("调用categoryList  action接口 数据失败")
        }
        
    }
};
const getters={};

export default {
    state,
    mutations,
    actions,
    getters
}