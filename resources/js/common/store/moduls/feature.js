import Axios from "axios"

export const feature = {
    namespaced: true,
    state:{
        features : [],
        feature: {},
    },
    getters: {
        featureList(state){
            return state.features;
        },
        singleFeature(state){
            return state.feature;
        }
    },
    actions: {
        featureList(context, payload){
            return Axios.get('/api/admin/features/?page='+payload, )
            .then((result) => {

                context.commit('featureList', result.data);

            }).catch((err) => {

            });
        },
        editFeature(context, payload){
            Axios.get(`/api/admin/features/${payload}`)
            .then(res=>{
                context.commit('singleFeature', res.data)
            })
        },

    },
    mutations: {
        featureList(state, payload){
            return state.features = payload;
        },
        singleFeature(state, payload){
            return state.feature = payload;
        }
    }
}