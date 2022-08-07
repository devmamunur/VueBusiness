import Axios from "axios"

export const sectiontitle = {
    namespaced: true,
    state:{
        sectiontitle: {},
    },
    getters: {
        sectionTitle(state){
            return state.sectiontitle;
        }
    },
    actions: {
        sectionTitle(context, payload){
            return Axios.get('/api/admin/sectiontitles')
            .then((result) => {

                context.commit('sectionTitle', result.data);

            }).catch((err) => {

            });
        }
    },
    mutations: {
        sectionTitle(state, payload){
            return state.sectiontitle = payload;
        }
    }
}