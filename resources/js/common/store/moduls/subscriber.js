import Axios from "axios"

export const subscriber = {
    namespaced: true,
    state:{
        subscribers : [],
    },
    getters: {
        subscriberList(state){
            return state.subscribers;
        }
    },
    actions: {
        subscriberList(context, payload){
            return Axios.get('/api/admin/newsletters/?page='+payload, )
            .then((result) => {

                context.commit('subscriberList', result.data);

            }).catch((err) => {

            });
        }
    },
    mutations: {
        subscriberList(state, payload){
            return state.subscribers = payload;
        }
    }
}