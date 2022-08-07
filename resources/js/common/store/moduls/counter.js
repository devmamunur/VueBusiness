import Axios from "axios"

export const counter = {
    namespaced: true,
    state:{
        counters : [],
        counter: {},
    },
    getters: {
        counterList(state){
            return state.counters;
        },
        singleCounter(state){
            return state.counter;
        }
    },
    actions: {
        counterList(context, payload){
            return Axios.get('/api/admin/counters/?page='+payload, )
            .then((result) => {

                context.commit('counterList', result.data);

            }).catch((err) => {

            });
        },
        editCounter(context, payload){
            Axios.get(`/api/admin/counters/${payload}`)
            .then(res=>{
                context.commit('singleCounter', res.data)
            })
        },

    },
    mutations: {
        counterList(state, payload){
            return state.counters = payload;
        },
        singleCounter(state, payload){
            return state.counter = payload;
        }
    }
}