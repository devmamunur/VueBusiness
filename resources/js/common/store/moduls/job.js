import Axios from "axios"

export const job = {
    namespaced: true,
    state:{
        jobs : [],
        job: {},
    },
    getters: {
        jobList(state){
            return state.jobs;
        },
        singleJob(state){
            return state.job;
        }
    },
    actions: {
        jobList(context, payload){
            return Axios.get('/api/admin/jobs/?page='+payload, )
            .then((result) => {
                context.commit('jobList', result.data);

            }).catch((err) => {

            });
        },
        editJob(context, payload){
            Axios.get(`/api/admin/jobs/${payload}`)
            .then(res=>{
                context.commit('singleJob', res.data)
            })
        },
    },
    mutations: {
        jobList(state, payload){
            return state.jobs = payload;
        },
        singleJob(state, payload){
            return state.job = payload;
        }
    }
}