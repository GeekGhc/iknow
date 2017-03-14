import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    isLogin:false,//用户是否已经登录
    user:{},//用户信息
    posts:[],//所有的帖子
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})

