import Axios from "axios"

export const application = {
    namespaced: true,
    state:{
        applications : [],
        application: {},
        applicationView : {},
    },
    getters: {
        applicationList(state){
            return state.applications;
        },
        singleJob(state){
            return state.application;
        },
        ApplicationView(state){
            return state.applicationView;
        }
    },
    actions: {
        applicationList(context, payload){
            return Axios.get(`/api/admin/applications/?page=${payload[0]}&status=${payload[1]}`)
            .then((result) => {
                context.commit('applicationList', result.data);
            }).catch((err) => {

            });
        },
        ApplicationView(context, payload){
            Axios.get(`/api/admin/applications/${payload}`)
            .then(res=>{
                context.commit('ApplicationView', res.data)
            })
        },
        ApplicationStatus(context, payload){
            Axios.get(`/api/admin/applications/status/${payload[0]}/${payload[1]}`)
            .then(res=>{
            })
        }
    },
    mutations: {
        applicationList(state, payload){
            return state.applications = payload;
        },
        singleJob(state, payload){
            return state.application = payload;
        },
        ApplicationView(state, payload){
            return state.applicationView = payload;
        }
    }
}