import Vue from 'vue'
import Router from 'vue-router'

const Start = r => require.ensure([], () => r(require('components/Start')), 'start')
const Login = r => require.ensure([], () => r(require('components/users/Login')), 'login')
const Register = r => require.ensure([], () => r(require('components/users/Register')), 'register')
const Profile = r => require.ensure([], () => r(require('components/users/Profile')), 'profile')
const Account = r => require.ensure([], () => r(require('components/users/Account')), 'account')
const Collect = r => require.ensure([], () => r(require('components/users/Collect')), 'collect')
const Message = r => require.ensure([], () => r(require('components/users/Message')), 'message')
const Posts = r => require.ensure([], () => r(require('components/posts/List')), 'Posts')
const Like = r => require.ensure([], () => r(require('components/posts/Like')), 'Posts')
const Comment = r => require.ensure([], () => r(require('components/posts/Comment')), 'Posts')
const PostShow = r => require.ensure([], () => r(require('components/posts/Show')), 'PostShow')
const QEditor = r => require.ensure([], () => r(require('components/common/QEditor')), 'QEditor')

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
        {path: '/message', name: 'message', component: Message},
        {path: '/posts', name: 'posts', component: Posts},
        {path: '/post/:id', name: 'postShow', component: PostShow},
        {path: '/qeditor', name: 'qeditor', component: QEditor},
        // {path: '/test', name: 'test', component: Test},
        // {path: '*',redirect:'/login'}
    ]
})
