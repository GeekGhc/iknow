// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import VueQuillEditor from 'vue-quill-editor'



Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(Vuelidate)
Vue.use(VueQuillEditor)



/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {App}
})
