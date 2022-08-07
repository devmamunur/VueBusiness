import Axios from "axios"

export const gallery = {
    namespaced: true,
    state:{
        galleries : [],
        gallery: {},
    },
    getters: {
        galleryList(state){
            return state.galleries;
        },
        singleGallery(state){
            return state.gallery;
        }
    },
    actions: {
        galleryList(context, payload){
            return Axios.get('/api/admin/galleries/?page='+payload, )
            .then((result) => {
                context.commit('galleryList', result.data);

            }).catch((err) => {

            });
        },
        editGallery(context, payload){
            Axios.get(`/api/admin/galleries/${payload}`)
            .then(res=>{
                context.commit('singleGallery', res.data)
            })
        },
    },
    mutations: {
        galleryList(state, payload){
            return state.galleries = payload;
        },
        singleGallery(state, payload){
            return state.gallery = payload;
        }
    }
}