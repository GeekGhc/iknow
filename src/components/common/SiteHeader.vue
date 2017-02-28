<template>
    <div class="site-header">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="head-nav">
                        <a href="#"><h1>IKnow</h1></a>
                        <nav class="site-header-nav" role="navigation">
                            <a class="site-header-nav-item active">首页</a>
                            <a class="site-header-nav-item">帖子</a>
                            <a class="site-header-nav-item">文章</a>
                        </nav>
                    </div>
                    <div class="header-user-panel">
                        <section>
                            <a class="message"><i class="fa fa-bell-o fa-header-bell"></i></a>
                            <a class="avatar"><img src="../../assets/images/avatars/default/my-avatar.jpg"></a>
                        </section>
                    </div>
                    <div class="header-user-login" style="display:none;">
                        <a>登录</a>
                        <a>注册</a>
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
<style>
body{
background: rgb(245, 248, 250);
}
</style>

