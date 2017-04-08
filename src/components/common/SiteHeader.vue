<template>
    <div class="site-header">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="head-nav">
                        <router-link :to="{ name: 'start'}"><h1>IKnow</h1></router-link>

                        <nav class="site-header-nav" role="navigation">
                            <router-link :to="{ name: 'start'}" class="site-header-nav-item active">首页</router-link>
                            <router-link :to="{ name: 'start'}" class="site-header-nav-item">名人圈</router-link>
                        </nav>
                    </div>
                    <div class="header-user-panel" v-if="isLogin">
                        <section>
                            <router-link :to="{ name: 'message'}" class="message">
                                <i class="fa fa-bell-o fa-header-bell"></i>
                                <span class="badge bell-badge" v-if="notifications_count > 0">{{ notifications_count }}</span>
                            </router-link>
                            <el-dropdown>
                                <a class="avatar el-dropdown-link"><img
                                        :src="userAvatar"></a>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>
                                        <router-link :to="{name: 'account',params: { id:userId }}">我的主页</router-link>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <router-link :to="{name: 'posts'}">我的帖子</router-link>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <router-link :to="{name: 'collect'}">我的收藏</router-link>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <router-link :to="{name: 'profile'}">账户设置</router-link>
                                    </el-dropdown-item>
                                    <el-dropdown-item divided><a @click="logout">退出</a></el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </section>
                    </div>
                    <div class="header-user-login" v-if="!isLogin">
                        <router-link :to="{ name: 'login'}">登录</router-link>
                        /
                        <router-link :to="{ name: 'register'}">注册</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default{
        data(){
            return{

            }
        },
        mounted(){
              if(sessionStorage.getItem('user')){
                this.$store.state.isLogin = true
                this.$store.state.user = JSON.parse(sessionStorage.getItem('user'))
              }
              this.getNotificationsCount()
        },
        computed:{
            isLogin(){
                return this.$store.state.isLogin
            },
            userAvatar(){
                return this.$store.state.user.avatar
            },
            userId(){
                return this.$store.state.user.id
            },
            notifications_count(){
                return this.$store.state.notifications_count
            },

        },
        methods:{
            ...mapActions(['USER_SIGNOUT','NOTIFICATIONS_COUNT']),
            logout(){
                 //退出登录
                 this.USER_SIGNOUT()
                 this.$router.push('/')
            },
            getNotificationsCount(){
                 let userId = this.$store.state.user.id
                 this.NOTIFICATIONS_COUNT(userId)
            }
        }
    }


</script>

