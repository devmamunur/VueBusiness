import Axios from "axios"

export const faq = {
    namespaced: true,
    state:{
        faqs : [],
        faq: {},
    },
    getters: {
        faqList(state){
            return state.faqs;
        },
        singleFaq(state){
            return state.faq;
        }
    },
    actions: {
        faqList(context, payload){
            return Axios.get('/api/admin/faqs/?page='+payload, )
            .then((result) => {

                context.commit('faqList', result.data);

            }).catch((err) => {

            });
        },
        editFaq(context, payload){
            Axios.get(`/api/admin/faqs/${payload}`)
            .then(res=>{
                context.commit('singleFaq', res.data)
            })
        },

    },
    mutations: {
        faqList(state, payload){
            return state.faqs = payload;
        },
        singleFaq(state, payload){
            return state.faq = payload;
        }
    }
}