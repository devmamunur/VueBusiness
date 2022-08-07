import Axios from "axios"

export const admin = {
    namespaced: true,
    state:{
        admin : {}
    },
    getters: {
        getAuthAdmin(state){
            return state.admin;
        }
    },
    actions: {
        getAdmin(context){
            Axios.get('/api/admin/user')
            .then((result) => {
                context.commit('getAdmin', result.data.admin)
            }).catch((err) => {

            });
        }
    },
    mutations: {
        getAdmin(state, payload){
            return state.admin = payload;
        }
    }
}