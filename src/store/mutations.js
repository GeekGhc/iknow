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
        console.log("posts length = "+state.posts.length)
    },
    //用户发表帖子
    [POST_CREATE](state,post){
        state.posts.push(post)
        console.log("post data second = "+state.posts.length)
    },
    //用户删除帖子
    [POST_DELETE](state,index){
        state.posts.splice(index,1)
    },

    //加载用户所有帖子
    [USER_POST_GET](state,posts){
        state.userPosts = posts
    },
    //用户删除帖子
    [USER_POST_DELETE](state,index){

    },
    //用户修改帖子
    [USER_POST_MODIFY](state,post){

    },

}