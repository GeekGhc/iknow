import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Login from 'store/modules/login'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
Vue.use(Router)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions:{

    },
    getters:{

    },
    modules:{
        login:Login,
    }
})

