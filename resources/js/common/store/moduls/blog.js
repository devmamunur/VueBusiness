import Axios from "axios"

export const blog = {
    namespaced: true,
    state:{
        blogs : [],
        blog: {},
    },
    getters: {
        blogList(state){
            return state.blogs;
        },
        singleBlog(state){
            return state.blog;
        }
    },
    actions: {
        blogList(context, payload){
            return Axios.get('/api/admin/blogs/?page='+payload, )
            .then((result) => {
                context.commit('blogList', result.data);

            }).catch((err) => {

            });
        },
        editBlog(context, payload){
            Axios.get(`/api/admin/blogs/${payload}`)
            .then(res=>{
                context.commit('singleBlog', res.data)
            })
        },
    },
    mutations: {
        blogList(state, payload){
            return state.blogs = payload;
        },
        singleBlog(state, payload){
            return state.blog = payload;
        }
    }
}