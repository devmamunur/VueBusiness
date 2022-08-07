import Axios from "axios"

export const slider = {
    namespaced: true,
    state:{
        sliders : [],
        slider: {},
    },
    getters: {
        sliderList(state){
            return state.sliders;
        },
        singleSlider(state){
            return state.slider;
        }
    },
    actions: {
        sliderList(context, payload){
            return Axios.get('/api/admin/sliders/?page='+payload, )
            .then((result) => {
                context.commit('sliderList', result.data);

            }).catch((err) => {

            });
        },
        editSlider(context, payload){
            Axios.get(`/api/admin/sliders/${payload}`)
            .then(res=>{
                context.commit('singleSlider', res.data)
            })
        },

    },
    mutations: {
        sliderList(state, payload){
            return state.sliders = payload;
        },
        singleSlider(state, payload){
            return state.slider = payload;
        }
    }
}