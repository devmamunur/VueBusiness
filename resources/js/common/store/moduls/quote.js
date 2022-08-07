import Axios from "axios"

export const quote = {
    namespaced: true,
    state:{
        quotes : [],
        quote: {},
        QuoteView : {},
    },
    getters: {
        quoteList(state){
            return state.quotes;
        },
        QuoteView(state){
            return state.QuoteView;
        }
    },
    actions: {
        quoteList(context, payload){
            return Axios.get(`/api/admin/quotes/?page=${payload[0]}&status=${payload[1]}`)
            .then((result) => {
                (result.data);
                context.commit('quoteList', result.data);
            }).catch((err) => {

            });
        },
        QuoteView(context, payload){
            Axios.get(`/api/admin/quotes/${payload}`)
            .then(res=>{
                context.commit('QuoteView', res.data)
            })
        },
        QuoteStatus(context, payload){
            Axios.get(`/api/admin/quotes/status/${payload[0]}/${payload[1]}`)
            .then(res=>{
            })
        }
    },
    mutations: {
        quoteList(state, payload){
            return state.quotes = payload;
        },
        QuoteView(state, payload){
            return state.QuoteView = payload;
        }
    }
}