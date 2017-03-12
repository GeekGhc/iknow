import Vue from 'vue'
import Vuex from 'vuex'
export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default{
    state: {
        isLogin:true
    },
    mutations: {
        [USER_SIGNIN](state, user) {
            sessionStorage.setItem('user', JSON.stringify(user))
            state.isLogin = true
            console.log("登录成功了... and user login is "+state.isLogin)
        },
        [USER_SIGNOUT](state) {
            sessionStorage.removeItem('user')
            state.isLogin = false
        }
    },
    actions: {
        [USER_SIGNIN]({commit}, user) {
           commit(USER_SIGNIN,user)
        },
        [USER_SIGNOUT]({commit}) {
            commit(USER_SIGNOUT)
        }
    }
}
