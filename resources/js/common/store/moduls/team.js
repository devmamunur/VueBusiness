import Axios from "axios"

export const team = {
    namespaced: true,
    state:{
        teams : [],
        team: {},
    },
    getters: {
        teamList(state){
            return state.teams;
        },
        singleTeam(state){
            return state.team;
        }
    },
    actions: {
        teamList(context, payload){
            return Axios.get('/api/admin/teams/?page='+payload, )
            .then((result) => {

                context.commit('teamList', result.data);

            }).catch((err) => {

            });
        },
        editTeam(context, payload){
            Axios.get(`/api/admin/teams/${payload}`)
            .then(res=>{
                context.commit('singleTeam', res.data)
            })
        },

    },
    mutations: {
        teamList(state, payload){
            return state.teams = payload;
        },
        singleTeam(state, payload){
            return state.team = payload;
        }
    }
}