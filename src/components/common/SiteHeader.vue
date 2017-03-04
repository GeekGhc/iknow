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
                   <!-- <div class="header-user-panel">
                        <section>
                            <a class="message"><i class="fa fa-bell-o fa-header-bell"></i></a>
                            <a class="avatar"><img src="../../assets/images/avatars/default/my-avatar.jpg"></a>
                        </section>
                    </div>-->
                    <div class="header-user-login" style="display:block;">
                        <router-link :to="{name: 'login'}">登录</router-link>/
                        <router-link :to="{ name: 'register'}">注册</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="../../assets/css/globals/header.css"></style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>

