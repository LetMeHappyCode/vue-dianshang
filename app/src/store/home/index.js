import { reqCategoryList,reqGetBannerList,reqFloorList} from "@/api";
//home模块小仓库
const state={
    categoryList:[],
    bannerList:[],
    floorList:[]
};
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList;
        console.log("调用categoryList  mutations")
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList;
    },
    GETFLOORLIST(state,FloorList){
       state.floorList= FloorList;
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
//获取轮播图bannerList数据
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code==200){
            commit("GETBANNERLIST",result.data)
        }
    },
//获取floor数据
    async getFloorList({commit}){
        let result = await reqFloorList();
        if(result.code==200){
            commit("GETFLOORLIST",result.data)
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