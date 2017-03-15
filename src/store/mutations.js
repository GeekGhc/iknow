import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {
    USER_SIGNIN,
    USER_SIGNOUT,
    POST_GET,
    POST_CREATE,
    POST_MODIFY,
    POST_DELETE,
} from './mutation-types.js'

Vue.use(VueAxios, axios)

export default {
    //用户登录
    [USER_SIGNIN](state, user) {
        state.isLogin = true
        state.user = user
        console.log("登录成功了... and user login is "+state.isLogin)
    },
    //用户退出登录
    [USER_SIGNOUT](state) {
        state.isLogin = false
        console.log("退出成功了... and user login is "+state.isLogin)
    },
    //加载所有帖子
    [POST_GET](state,posts){
        state.posts = posts
    },
    //用户发表帖子
    [POST_CREATE](state,post){
        console.log("mutation post body = "+post.body)
        console.log("post data first = "+state.posts.length)
        state.posts.push(post)
        console.log("post data second = "+state.posts.length)
    },
    [POST_MODIFY](state,post){
        Vue.axios.patch('http://localhost:8000/api/post',{post:post}).then(response => {

        })
    },
    [POST_DELETE](state,postId){
        Vue.axios.delete('http://localhost:8000/api/post',{postId:postId}).then(response => {

        })
    },

}