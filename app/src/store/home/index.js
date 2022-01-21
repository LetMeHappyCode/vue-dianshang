import { reqCategoryList,reqGetBannerList} from "@/api";
//home模块小仓库
const state={
    categoryList:[],
    bannerList:[]
};
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList;
        console.log("调用categoryList  mutations")
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList;
    }
};
const actions ={
    //调用api中的接口，向服务器发送数据，获取数据
    async categoryList({commit}){
        let result =await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
        else{
        }
        
    },

    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code==200){
            commit("GETBANNERLIST",result.data)
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