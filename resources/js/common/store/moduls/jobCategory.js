import Axios from "axios"

export const jobCategory = {
    namespaced: true,
    state:{
        jobCategories : []
    },
    getters: {
        jobCategoryList(state){
            return state.jobCategories;
        }
    },
    actions: {
        jobCategoryList(context, payload){
            return Axios.get('/api/admin/job-categories/?page='+payload, )
            .then((result) => {
                context.commit('jobCategoryList', result.data);

            }).catch((err) => {

            });
        },
        jobCategoryListAll(context){
            Axios.get('/api/admin/all-job-categories')
            .then((result) => {
                context.commit('jobCategoryList', result.data);

            }).catch((err) => {

            });
        }
    },
    mutations: {
        jobCategoryList(state, payload){
            return state.jobCategories = payload;
        }
    }
}