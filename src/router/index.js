import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Start from 'components/Start'
import Header from 'components/common/SiteHeader'

Vue.use(Router)

export default new Router({
    mode: 'history',
    history: true,
    routes: [
        {
            path: '/',
            name: 'Start',
            component: Start
        }
    ]
})
