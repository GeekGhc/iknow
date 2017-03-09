<template>
    <div class="site-header">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="head-nav">
                        <router-link :to="{ name: 'start'}"><h1>IKnow</h1></router-link>

                        <nav class="site-header-nav" role="navigation">
                            <router-link :to="{ name: 'start'}" class="site-header-nav-item active">首页</router-link>
                            <router-link :to="{ name: 'account'}" class="site-header-nav-item">帖子</router-link>
                        </nav>
                    </div>
                    <div class="header-user-panel">
                        <section>
                            <a class="message"><i class="fa fa-bell-o fa-header-bell"></i></a>
                            <el-dropdown>
                                <a class="avatar el-dropdown-link"><img src="../../assets/images/avatars/default/my-avatar.jpg"></a>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item><router-link :to="{name: 'account'}">我的主页</router-link></el-dropdown-item>
                                    <el-dropdown-item><router-link :to="{name: 'account'}">我的帖子</router-link></el-dropdown-item>
                                    <el-dropdown-item><router-link :to="{name: 'account'}">我的收藏</router-link></el-dropdown-item>
                                    <el-dropdown-item><router-link :to="{name: 'profile'}">账户设置</router-link></el-dropdown-item>
                                    <el-dropdown-item>退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </section>
                    </div>
                    <div class="header-user-login" v-if="false">
                        <router-link :to="{name: 'login'}">登录</router-link>
                        /
                        <router-link :to="{ name: 'register'}">注册</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        mounted:{
            userIsLogin(){

            }
        },
        computed:{
            isLogin(){
                return this.$store.state.login.isLogin
            }
        }
    }

</script>

