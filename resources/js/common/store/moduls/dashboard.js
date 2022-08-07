import Axios from "axios"

export const dashboard = {
    namespaced: true,
    state:{
        data: {},
        isAdmin: {},
        adminInfo: {},
        adminPassword: {},
    },
    getters: {
        getData(state){
            return state.data;
        },
        getIsAdmin(state){
            return state.isAdmin;
        },
        getAdminInfo(state){
            return state.adminInfo;
        },
        getAdminPassword(state){
            return state.adminPassword;
        }
    },
    actions: {
        getIsAdmin(context, payload){
            return Axios.get('/api/admin/isadmin')
            .then((result) => {
                context.commit('getIsAdmin', result.data);
            }).catch((err) => {
            });
        },
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
        getIsAdmin(state, payload){
            return state.isAdmin = payload;
        },
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