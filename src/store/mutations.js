import {
    USER_SIGNIN,
    USER_SIGNOUT,
} from './mutation-types.js'

export default {
    //用户登录
    [USER_SIGNIN](state, user) {
        sessionStorage.setItem('user', JSON.stringify(user))
        state.isLogin = true
        console.log("登录成功了... and user login is "+state.isLogin)
    },
    //用户退出登录
    [USER_SIGNOUT](state) {
        sessionStorage.removeItem('user')
        state.isLogin = false
        console.log("退出成功了... and user login is "+state.isLogin)
    }
}