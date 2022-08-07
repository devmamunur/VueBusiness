import Axios from "axios"

export const testimonial = {
    namespaced: true,
    state:{
        testimonials : [],
        testimonial: {},
    },
    getters: {
        testimonialList(state){
            return state.testimonials;
        },
        singleTestimonial(state){
            return state.testimonial;
        }
    },
    actions: {
        testimonialList(context, payload){
            return Axios.get('/api/admin/testimonials/?page='+payload, )
            .then((result) => {
                context.commit('testimonialList', result.data);
            }).catch((err) => {

            });
        },
        editTestimonial(context, payload){
            Axios.get(`/api/admin/testimonials/${payload}`)
            .then(res=>{
                context.commit('singleTestimonial', res.data)
            })
        },
    },
    mutations: {
        testimonialList(state, payload){
            return state.testimonials = payload;
        },
        singleTestimonial(state, payload){
            return state.testimonial = payload;
        }
    }
}