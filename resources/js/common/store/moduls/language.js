import Axios from "axios"

export const language = {
    namespaced: true,
    state:{
        language: [],
    },
    getters: {
        languagesList(state){
            return state.language;
        },
        adminLanguagesList(state){
            return state.language;
        }
    },
    actions: {
        languagesList(context){
            Axios.get(`/api/admin/languages`)
            .then(res=>{
                context.commit('languagesList', res.data)
            })
        },
        adminLanguagesList(context){
            Axios.get(`/api/admin/languages/backend/language`)
            .then(res=>{
                context.commit('adminLanguagesList', res.data)
            })
        },

    },
    mutations: {
        languagesList(state, payload){
            return state.language = payload;
        },
        adminLanguagesList(state, payload){
            return state.language = payload;
        }
    }
}