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
    [USER_SIGNIN]({commit}, user) {
        sessionStorage.setItem('user', JSON.stringify(user))
        commit(USER_SIGNIN,user)
    },
    [USER_SIGNOUT]({commit}) {
        sessionStorage.removeItem('user')
        commit(USER_SIGNOUT)
    },
    [POST_GET]({commit}) {
        Vue.axios.get('http://localhost:8000/api/post').then(response => {
            if(response.data.status){
                commit(POST_GET,response.data.posts)
            }
            console.log("post = "+response.data.posts)
        })
    },
    [POST_CREATE]({commit},post) {
        Vue.axios.post('http://localhost:8000/api/post',{post:post}).then(response => {
            commit(POST_CREATE,response.data)
            console.log("post data = "+response.data)
        })
    },
    [POST_MODIFY]({commit},postId) {
        commit(POST_MODIFY)
    },
    [POST_DELETE]({commit},postId) {
        commit(POST_DELETE)
    },
}