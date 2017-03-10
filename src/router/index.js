import Vue from 'vue'
import Router from 'vue-router'
import Start from 'components/Start'
import Login from 'components/users/Login'
import Register from 'components/users/Register'
import Profile from 'components/users/Profile'
import Account from 'components/users/Account'
import Collect from 'components/users/Collect'
import Test from 'components/users/Test'
import UEditor from 'components/common/UEditor'

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
        {path: '/editor', name: 'ueditor', component: UEditor},
        // {path: '/test', name: 'test', component: Test},
        {path: '*',redirect:'/login'}
    ]
})
