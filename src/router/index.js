import Vue from 'vue'
import Router from 'vue-router'
import Start from 'components/Start'
import Login from 'components/users/Login'
import Register from 'components/users/Register'
import Profile from 'components/users/Profile'
import Account   from 'components/users/Account'

Vue.use(Router)

export default new Router({
    mode: 'history',
    history: true,
    routes: [
        {path: '/', name: 'Start', component: Start},
        {path: '/user/login', name: 'Login', component: Login},
        {path: '/user/register', name: 'Register', component: Register},
        {path: '/profile', name: 'Profile', component: Profile},
        {path: '/account', name: 'Account', component: Account},
    ]
})
