import Axios from "axios"

export const mailConfiguration = {
    namespaced: true,
    state:{
        mailConfiguration: {},
    },
    getters: {
        mailConfiguration(state){
            return state.mailConfiguration;
        }
    },
    actions: {
        mailConfiguration(context){
            return Axios.get('/api/admin/mails')
            .then((result) => {
                context.commit('mailConfiguration', result.data);
            }).catch((err) => {

            });
        },
    },
    mutations: {
        mailConfiguration(state, payload){
            return state.mailConfiguration = payload;
        }
    }
}