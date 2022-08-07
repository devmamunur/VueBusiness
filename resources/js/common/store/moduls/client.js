import Axios from "axios"

export const client = {
    namespaced: true,
    state:{
        clients : [],
        client: {},
    },
    getters: {
        clientList(state){
            return state.clients;
        },
        singleClient(state){
            return state.client;
        }
    },
    actions: {
        clientList(context, payload){
            return Axios.get('/api/admin/clients/?page='+payload, )
            .then((result) => {

                context.commit('clientList', result.data);

            }).catch((err) => {

            });
        },
        editClient(context, payload){
            Axios.get(`/api/admin/clients/${payload}`)
            .then(res=>{
                context.commit('singleClient', res.data)
            })
        },

    },
    mutations: {
        clientList(state, payload){
            return state.clients = payload;
        },
        singleClient(state, payload){
            return state.client = payload;
        }
    }
}