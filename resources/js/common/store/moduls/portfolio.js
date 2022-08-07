import Axios from "axios"

export const portfolio = {
    namespaced: true,
    state:{
        portfolios : [],
        portfolio: {},
    },
    getters: {
        portfolioList(state){
            return state.portfolios;
        },
        singlePortfolio(state){
            return state.portfolio;
        }
    },
    actions: {
        portfolioList(context, payload){
            return Axios.get('/api/admin/portfolios/?page='+payload, )
            .then((result) => {
                context.commit('portfolioList', result.data);

            }).catch((err) => {

            });
        },
        editPortfolio(context, payload){
            Axios.get(`/api/admin/portfolios/${payload}`)
            .then(res=>{
                context.commit('singlePortfolio', res.data)
            })
        },
    },
    mutations: {
        portfolioList(state, payload){
            return state.portfolios = payload;
        },
        singlePortfolio(state, payload){
            return state.portfolio = payload;
        }
    }
}