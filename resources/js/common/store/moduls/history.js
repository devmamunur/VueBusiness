import Axios from "axios"

export const history = {
    namespaced: true,
    state:{
        histories : [],
        history: {},
    },
    getters: {
        historyList(state){
            return state.histories;
        },
        singleHistory(state){
            return state.history;
        }
    },
    actions: {
        historyList(context, payload){
            return Axios.get('/api/admin/histories/?page='+payload, )
            .then((result) => {

                context.commit('historyList', result.data);

            }).catch((err) => {

            });
        },
        editHistory(context, payload){
            Axios.get(`/api/admin/histories/${payload}`)
            .then(res=>{
                context.commit('singleHistory', res.data)
            })
        },

    },
    mutations: {
        historyList(state, payload){
            return state.histories = payload;
        },
        singleHistory(state, payload){
            return state.history = payload;
        }
    }
}