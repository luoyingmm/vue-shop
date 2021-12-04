import { reqCategoryList } from "@/api";
//Home模块
const state = {
    categoryList:[],
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        categoryList.pop()
         state.categoryList = categoryList
    }
};
const actions = {
   async categoryList({commit}){
        let result = await reqCategoryList()
        if (result.code === 200) {
        
            commit('CATEGORYLIST',result.data)
        }
    }
};
const getters = {};


export default{
    state,
    mutations,
    actions,
    getters
}