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
    userPosts:[],//用户的帖子
    newPost:{//新的帖子
        'body':'',
        'html_body':'',
        'user_id': 0,
        'last_user_id': 0,
    },
    newComment:{
        'post_id':0,
        'user_id':0,
        'to_user_id':0,
        'to_comment_id':0,
        'body':''
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})

