import Axios from "axios"

export const pricingPlan = {
    namespaced: true,
    state:{
        packages : [],
        package: {},
    },
    getters: {
        packageList(state){
            return state.packages;
        },
        singlePackage(state){
            return state.package;
        }
    },
    actions: {
        packageList(context, payload){
            return Axios.get('/api/admin/packages/?page='+payload, )
            .then((result) => {

                context.commit('packageList', result.data);

            }).catch((err) => {

            });
        },
        editPackage(context, payload){
            Axios.get(`/api/admin/packages/${payload}`)
            .then(res=>{
                context.commit('singlePackage', res.data)
            })
        },

    },
    mutations: {
        packageList(state, payload){
            return state.packages = payload;
        },
        singlePackage(state, payload){
            return state.package = payload;
        }
    }
}