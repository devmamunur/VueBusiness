import Axios from "axios"

export const setting = {
    namespaced: true,
    state:{
        setting: {},
    },
    getters: {
        settingList(state){
            return state.setting;
        }
    },
    actions: {
        settingList(context, payload){
            return Axios.get('/api/admin/settings')
                .then((result) => {
                    context.commit('settingList', result.data);
                }).catch((err) => {
            });
        }
    },
    mutations: {
        settingList(state, payload){
            return state.setting = payload;
        }
    }
}