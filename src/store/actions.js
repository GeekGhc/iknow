import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {
    USER_SIGNIN,
    USER_SIGNOUT,
    USER_PROFILE,
    PROFILE_EDIT,
    POST_GET,
    POST_CREATE,
    POST_DELETE,
    USER_POST_GET,
    USER_POST_DELETE,
    USER_POST_MODIFY,
    COMMENT_GET,
    COMMENT_CREATE,
    COLLECT_POST,
    USER_COLLECTION,
    COLLECT_DELETE,
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

    //用户资料
    [USER_PROFILE]({commit},userId){
        Vue.axios.get('http://localhost:8000/api/user/profile/'+userId).then(response => {
            if(response.data.status){
                console.log("response profile = "+response.data.profile)
                commit(USER_PROFILE,response.data.profile)
            }
        })
    },
    //用户资料的修改
    [PROFILE_EDIT]({commit},payload){
        Vue.axios.post('http://localhost:8000/api/user/profile',{userId:payload.userId,data:payload.data}).then(response => {
            if(response.data.status){
                commit(PROFILE_EDIT,response.data.user)
                console.log("资料更新成功！！！")
            }
        })
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
        Vue.axios.post('http://localhost:8000/api/user/post',{userId:context.state.user.id}).then(response => {
            if(response.data.status){
                context.commit(USER_POST_GET,response.data.posts)
            }
        })
    },
    //删除帖子
    [USER_POST_DELETE]({commit},payload) {
        console.log("payload index = "+payload.index+" delete id = "+payload.postId)
        Vue.axios.delete('http://localhost:8000/api/user/post/'+payload.postId).then(response => {
            if(response.data.status){
                commit(USER_POST_DELETE,payload.index)
            }
        })
    },
    //修改帖子
    [USER_POST_MODIFY]({commit},postId) {
        commit(USER_POST_MODIFY)
    },

    //加载用户对帖子的评论
    [COMMENT_GET]({commit},payload){
        Vue.axios.get('http://localhost:8000/api/post/'+payload.postId+'/comment').then(response => {
            if(response.data.status){
                payload.comments = response.data.comments
                console.log("comments = "+payload.comments)
            }
        })
    },
    //用户发表评论
    [COMMENT_CREATE](context,comments){
        context.state.newComment.user_id = context.state.user.id
        console.log("comment body = "+context.state.newComment.body+" user id = "+context.state.user.id)
        Vue.axios.post('http://localhost:8000/api/comment',{comment:context.state.newComment}).then(response => {
            if(response.data.status){
                comments.push(response.data.comment)
                console.log("评论成功")
            }
        })
    },

    //用户收藏帖子
    [COLLECT_POST](context,payload){

    },
    //用户收藏帖子列表
    [USER_COLLECTION]({commit},userId){
        Vue.axios.get('http://localhost:8000/api/user/'+userId+'/collect').then(response => {
            if(response.data.status){
                commit(USER_COLLECTION,response.data.collection)
            }
        })
    },
    //取消帖子的收藏
    [COLLECT_DELETE]({commit},payload) {
        Vue.axios.post('http://localhost:8000/api/post/collect',{userId:payload.userId,postId:payload.postId}).then(response => {
            if(response.data.status){
                commit(COLLECT_DELETE,payload.index)
            }
        })
    },
}
