import Axios from "axios"

export const blogCategory = {
    namespaced: true,
    state:{
        blogCategories : []
    },
    getters: {
        blogCategoryList(state){
            return state.blogCategories;
        }
    },
    actions: {
        blogCategoryList(context, payload){
            return Axios.get('/api/admin/bcategories/?page='+payload, )
            .then((result) => {
                context.commit('blogCategoryList', result.data);

            }).catch((err) => {

            });
        },
        blogCategoryListAll(context){
            Axios.get('/api/admin/all-bcategories')
            .then((result) => {
                context.commit('blogCategoryList', result.data);

            }).catch((err) => {

            });
        }
    },
    mutations: {
        blogCategoryList(state, payload){
            return state.blogCategories = payload;
        }
    }
}