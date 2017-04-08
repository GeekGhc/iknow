import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {
    USER_SIGNIN,
    USER_SIGNOUT,
    USER_PROFILE,
    PROFILE_EDIT,
    POST_GET,
    POST_CREATE,
    POST_DELETE,
    USER_POST_GET,
    USER_POST_DELETE,
    USER_POST_MODIFY,
    COMMENT_CREATE,
    USER_COLLECTION,
    COLLECT_DELETE,
    USER_FOLLOW,
    FOLLOWERS_GET,
    FOLLOWING_GET,
    NOTIFICATIONS_COUNT,
    NOTIFY_MESSAGE_GET,
    MARK_NOTIFY_MESSAGE
} from './mutation-types.js'

Vue.use(VueAxios, axios)

export default {
    //用户登录
    [USER_SIGNIN](state, user) {
        state.isLogin = true
        state.user = user
        console.log("登录成功了... and user login is "+state.isLogin)
    },
    //用户退出登录
    [USER_SIGNOUT](state) {
        state.isLogin = false
        console.log("退出成功了... and user login is "+state.isLogin)
    },

    //用户资料
    [USER_PROFILE](state,profile) {
        state.userProfile = profile
        console.log("this profile description is "+state.userProfile.name)
    },
    //用户资料修改
    [PROFILE_EDIT](state,user) {
        state.user.name = user
    },


    //加载所有帖子
    [POST_GET](state,posts){
        state.posts = posts
        console.log("posts length = "+state.posts.length)
    },
    //用户发表帖子
    [POST_CREATE](state,post){
        state.posts.push(post)
        console.log("post data second = "+state.posts.length)
    },
    //用户删除帖子
    [POST_DELETE](state,index){
        state.posts.splice(index,1)
    },

    //加载用户所有帖子
    [USER_POST_GET](state,posts){
        state.userPosts = posts
    },
    //用户删除帖子
    [USER_POST_DELETE](state,index){
        state.userPosts.splice(index,1)
    },
    //用户修改帖子
    [USER_POST_MODIFY](state,post){

    },

    //用户发表评论
    [COMMENT_CREATE](state,comment){

    },

    //用户收藏的帖子
    [USER_COLLECTION](state,collection){
        state.collection = collection
    },
    //用户取消收藏的帖子
    [COLLECT_DELETE](state,index){
        state.collection.splice(index,1)
    },

    [USER_FOLLOW](state,follow){
        follow.isFollowed = ! follow.isFollowed
        console.log("mutation follow  = "+follow.isFollowed)
    },
    [FOLLOWERS_GET](state,follow){
        follow.isFollowed = ! follow.isFollowed
        console.log("mutation follow  = "+follow.isFollowed)
    },
    [FOLLOWING_GET](state,follow){
        follow.isFollowed = ! follow.isFollowed
        console.log("mutation follow  = "+follow.isFollowed)
    },

    //用户粉丝
    [FOLLOWERS_GET](state,followers){
        state.followers = followers
        console.log("followers = "+followers)
    },
    //用户关注的人
    [FOLLOWING_GET](state,following){
        state.following = following
        console.log("followers = "+following)
    },

    //用户的消息通知
    [NOTIFICATIONS_COUNT](state,count){
        state.notifications_count = count
    },
    [NOTIFY_MESSAGE_GET](state,messages){
        state.messages = messages
    },
    [MARK_NOTIFY_MESSAGE](state){
        state.messages = null
        state.notifications_count = 0
    }



}