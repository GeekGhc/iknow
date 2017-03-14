import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {
    USER_SIGNIN,
    USER_SIGNOUT,
    POST_CREATE,
    POST_MODIFY,
    POST_DELETE,
} from './mutation-types.js'

Vue.use(VueAxios, axios)

export default {
    //用户登录
    [USER_SIGNIN](state, user) {
        sessionStorage.setItem('user', JSON.stringify(user))
        state.isLogin = true
        state.user = user
        console.log("登录成功了... and user login is "+state.isLogin)
    },
    //用户退出登录
    [USER_SIGNOUT](state) {
        sessionStorage.removeItem('user')
        state.isLogin = false
        console.log("退出成功了... and user login is "+state.isLogin)
    },
    //用户发表帖子
    [POST_CREATE](state,post){
        Vue.axios.post('http://localhost:8000/api/post',{post:post}).then(response => {
            console.log("post data = "+response.data)
        })
    },
    [POST_MODIFY](state,post){
        this.axios.post('http://localhost:8000/api/post',{post:post}).then(response => {

        })
    },
    [POST_DELETE](state,post){
        this.axios.delete('http://localhost:8000/api/post',{post:post}).then(response => {

        })
    },

}