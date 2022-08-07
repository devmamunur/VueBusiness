import Axios from "axios"

export const galleryCategory = {
    namespaced: true,
    state:{
        galleryCategories : []
    },
    getters: {
        galleryCategoryList(state){
            return state.galleryCategories;
        }
    },
    actions: {
        galleryCategoryList(context, payload){
            return Axios.get('/api/admin/gcategories/?page='+payload, )
            .then((result) => {
                context.commit('galleryCategoryList', result.data);

            }).catch((err) => {

            });
        },
        galleryCategoryListAll(context){
            Axios.get('/api/admin/all-gcategories')
            .then((result) => {
                context.commit('galleryCategoryList', result.data);

            }).catch((err) => {

            });
        }
    },
    mutations: {
        galleryCategoryList(state, payload){
            return state.galleryCategories = payload;
        }
    }
}