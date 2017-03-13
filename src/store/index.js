import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
Vue.use(Router)

const state = {
    isLogin:false,//用户是否已经登录
    user:{

    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})

