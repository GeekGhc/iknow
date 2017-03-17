import Vue from 'vue'
import Router from 'vue-router'
import Start from 'components/Start'
import Login from 'components/users/Login'
import Register from 'components/users/Register'
import Profile from 'components/users/Profile'
import Account from 'components/users/Account'
import Collect from 'components/users/Collect'
import Posts from 'components/posts/List'
import PostShow from 'components/posts/Show'
import UEditor from 'components/common/UEditor'
import QEditor from 'components/common/QEditor'

Vue.use(Router)

export default new Router({
    mode: 'history',
    history: true,
    routes: [
        {path: '/', name: 'start', component: Start},
        {path: '/login', name: 'login', component: Login},
        {path: '/register', name: 'register', component: Register},
        {path: '/profile', name: 'profile', component: Profile},
        {path: '/account', name: 'account', component: Account},
        {path: '/collect', name: 'collect', component: Collect},
        {path: '/posts', name: 'posts', component: Posts},
        {path: '/post/:id', name: 'posts', component: PostShow},
        {path: '/ueditor', name: 'ueditor', component: UEditor},
        {path: '/qeditor', name: 'qeditor', component: QEditor},
        // {path: '/test', name: 'test', component: Test},
        // {path: '*',redirect:'/login'}
    ]
})
