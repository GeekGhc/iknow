import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {
    USER_SIGNIN,
    USER_SIGNOUT,
    POST_GET,
    POST_CREATE,
    POST_DELETE,
    USER_POST_GET,
    USER_POST_DELETE,
    USER_POST_MODIFY,
} from './mutation-types.js'

Vue.use(VueAxios, axios)

export default {
    //用户登陆
    [USER_SIGNIN]({commit}, user) {
        sessionStorage.setItem('user', JSON.stringify(user))
        commit(USER_SIGNIN,user)
    },
    //用户退出登录
    [USER_SIGNOUT]({commit}) {
        sessionStorage.removeItem('user')
        commit(USER_SIGNOUT)
    },
    //加载所有帖子数据
    [POST_GET]({commit}) {
        Vue.axios.get('http://localhost:8000/api/post').then(response => {
            if(response.data.status){
                commit(POST_GET,response.data.posts)
            }
        })
    },
    //帖子创建
    [POST_CREATE](context,postContent) {
        context.state.newPost.user_id = context.state.user.id
        context.state.newPost.last_user_id = context.state.user.id
        context.state.newPost.body = postContent.body
        context.state.newPost.html_body = postContent.html_body
        Vue.axios.post('http://localhost:8000/api/post',{post:context.state.newPost}).then(response => {
            if(response.data.status){
                context.commit(POST_CREATE,response.data.post)
            }
        })
    },
    //删除帖子
    [POST_DELETE]({commit},payload) {
        console.log("payload index = "+payload.index+" delete id = "+payload.postId)
        Vue.axios.delete('http://localhost:8000/api/post/'+payload.postId).then(response => {
            if(response.data.status){
                commit(POST_DELETE,payload.index)
            }
        })
    },

    //加载用户的帖子
    [USER_POST_GET](context) {
        console.log("user id = "+context.state.user.id)
        Vue.axios.post('http://localhost:8000/api/user/post',{userId:context.state.user.id}).then(response => {
            if(response.data.status){
                context.commit(USER_POST_GET,response.data.posts)
            }
        })
    },
    //删除帖子
    [USER_POST_DELETE]({commit},payload) {

    },
    //修改帖子
    [USER_POST_MODIFY]({commit},postId) {
        commit(USER_POST_MODIFY)
    },
}