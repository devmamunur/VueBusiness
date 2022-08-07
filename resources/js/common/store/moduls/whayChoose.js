import Axios from "axios"

export const whayChoose = {
    namespaced: true,
    state:{
        whayChooses : [],
        whayChoose: {},
    },
    getters: {
        whayChooseList(state){
            return state.whayChooses;
        },
        singleWhayChoose(state){
            return state.whayChoose;
        }
    },
    actions: {
        whayChooseList(context, payload){
            return Axios.get('/api/admin/whay-chooses/?page='+payload, )
            .then((result) => {

                context.commit('whayChooseList', result.data);

            }).catch((err) => {

            });
        },
        editWhayChoose(context, payload){
            Axios.get(`/api/admin/whay-chooses/${payload}`)
            .then(res=>{
                context.commit('singleWhayChoose', res.data)
            })
        },

    },
    mutations: {
        whayChooseList(state, payload){
            return state.whayChooses = payload;
        },
        singleWhayChoose(state, payload){
            return state.whayChoose = payload;
        }
    }
}