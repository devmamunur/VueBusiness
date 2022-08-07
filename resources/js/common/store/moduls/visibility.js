import Axios from "axios"

export const visibility = {
    namespaced: true,
    state:{
        visibility: {},
    },
    getters: {
        visibilityList(state){
            return state.visibility;
        }
    },
    actions: {
        visibilityList(context, payload){
            return Axios.get('/api/admin/visibilities')
                .then((result) => {
                    context.commit('visibilityList', result.data);
                }).catch((err) => {
            });
        }
    },
    mutations: {
        visibilityList(state, payload){
            return state.visibility = payload;
        }
    }
}