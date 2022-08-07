import Axios from "axios"

export const socialLink = {
    namespaced: true,
    state:{
        socialLinks : [],
        socialLink: {},
    },
    getters: {
        socialLinkList(state){
            return state.socialLinks;
        },
        singleSocialLink(state){
            return state.socialLink;
        }
    },
    actions: {
        socialLinkList(context, payload){
            return Axios.get('/api/admin/social-links/?page='+payload, )
            .then((result) => {

                context.commit('socialLinkList', result.data);

            }).catch((err) => {

            });
        },
        editSocialLink(context, payload){
            Axios.get(`/api/admin/social-links/${payload}`)
            .then(res=>{
                context.commit('singleSocialLink', res.data)
            })
        },

    },
    mutations: {
        socialLinkList(state, payload){
            return state.socialLinks = payload;
        },
        singleSocialLink(state, payload){
            return state.socialLink = payload;
        }
    }
}