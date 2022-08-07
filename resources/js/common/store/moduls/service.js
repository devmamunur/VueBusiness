import Axios from "axios"

export const service = {
    namespaced: true,
    state:{
        services : [],
        service: {},
    },
    getters: {
        serviceList(state){
            return state.services;
        },
        singleService(state){
            return state.service;
        }
    },
    actions: {
        serviceList(context, payload){
            return Axios.get('/api/admin/services/?page='+payload, )
            .then((result) => {

                context.commit('serviceList', result.data);

            }).catch((err) => {

            });
        },
        serviceListAll(context){
            Axios.get('/api/admin/all-services')
            .then((result) => {
                context.commit('serviceList', result.data);

            }).catch((err) => {

            });
        },
        editService(context, payload){
            Axios.get(`/api/admin/services/${payload}`)
            .then(res=>{
                context.commit('singleService', res.data)
            })
        },

    },
    mutations: {
        serviceList(state, payload){
            return state.services = payload;
        },
        singleService(state, payload){
            return state.service = payload;
        }
    }
}