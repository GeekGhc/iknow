import Vue from 'vue'
import Vuex from 'vuex'
export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default{
    state: {
        isLogin:false
    },
    mutations: {
        [USER_SIGNIN](state, user) {
            Vue.axios.post('http://localhost:8000/api/user/login/',{user:user}).then(response => {
                //如果验证成功
                if(response.data.status){
                    this.$router.push('/')
                }
                console.log("登录成功了... and user login is "+state.isLogin)
            })
            state.isLogin = true
        },
        [USER_SIGNOUT](state) {

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
