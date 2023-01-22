import Axios from "axios"

export const dashboard = {
    namespaced: true,
    state:{
        data: {},
        adminInfo: {},
        adminPassword: {},
    },
    getters: {
        getData(state){
            return state.data;
        },
   
        getAdminInfo(state){
            return state.adminInfo;
        },
        getAdminPassword(state){
            return state.adminPassword;
        }
    },
    actions: {
        getData(context, payload){
            return Axios.get('/api/admin/dashboards')
            .then((result) => {
                context.commit('getData', result.data);

            }).catch((err) => {

            });
        },
        getAdminInfo(context, payload){
            return Axios.get('/api/admin/dashboards/admin/profile')
            .then((result) => {
                context.commit('getAdminInfo', result.data);

            }).catch((err) => {

            });
        },
        getAdminPassword(context, payload){
            return Axios.get('/api/admin/dashboards/admin-password')
            .then((result) => {
                context.commit('getAdminPassword', result.data);

            }).catch((err) => {

            });
        },
    },
    mutations: {
    
        getData(state, payload){
            return state.data = payload;
        },
        getAdminInfo(state, payload){
            return state.adminInfo = payload;
        },
        getAdminPassword(state, payload){
            return state.adminPassword = payload;
        }
    }
}