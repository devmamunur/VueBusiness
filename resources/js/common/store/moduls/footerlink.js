import Axios from "axios"

export const footerlink = {
    namespaced: true,
    state:{
        footerlinks : [],
        footerlink: {},
    },
    getters: {
        footerlinkList(state){
            return state.footerlinks;
        },
        singleFooterlink(state){
            return state.footerlink;
        }
    },
    actions: {
        footerlinkList(context, payload){
            return Axios.get('/api/admin/footerlinks/?page='+payload, )
            .then((result) => {

                context.commit('footerlinkList', result.data);

            }).catch((err) => {

            });
        },
        editFooterlink(context, payload){
            Axios.get(`/api/admin/footerlinks/${payload}`)
            .then(res=>{
                context.commit('singleFooterlink', res.data)
            })
        },

    },
    mutations: {
        footerlinkList(state, payload){
            return state.footerlinks = payload;
        },
        singleFooterlink(state, payload){
            return state.footerlink = payload;
        }
    }
}