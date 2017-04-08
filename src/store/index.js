import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    isLogin:false,//用户是否已经登录
    user:{},//用户信息
    post:{},//当前用户浏览的帖子
    posts:[],//所有的帖子
    userPosts:[],//用户的帖子
    collection:[],//用户收藏的帖子
    followers:{},
    following:{},
    newPost:{//新的帖子
        'body':'',
        'html_body':'',
        'user_id': 0,
        'last_user_id': 0,
    },
    newComment:{//新的评论
        'post_id':0,
        'user_id':0,
        'to_user_id':0,
        'to_comment_id':0,
        'body':''
    },
    userProfile:null,//用户的资料
    notifications_count:null,
    messages:null,
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})

