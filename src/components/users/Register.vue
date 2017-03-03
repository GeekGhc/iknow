<template>
    <div id="register">
        <site-header></site-header>
        <div class="wrapper">
            <div class="login-page">
                <el-row :gutter="20">
                    <el-col :span="10" :offset="7">
                        <div class="login-header">
                            <div class="login-register">
                                <router-link :to="{name: 'login'}">登录</router-link>
                                <router-link :to="{ name: 'register'}" class="active">注册</router-link>
                            </div>
                        </div>
                        <div class="login-form">
                            <div class="control-group">
                                <label class="control-label">用户名</label>
                                <el-input
                                        placeholder="请输入你的用户名"
                                >
                                </el-input>
                            </div>
                            <div class="control-group">
                                <label class="control-label">邮箱</label>
                                <el-input
                                        placeholder="请输入你的邮箱"
                                >
                                </el-input>
                            </div>
                            <div class="control-group">
                                <label class="control-label">密码</label>
                                <el-input
                                        placeholder="请输入你的用户密码"
                                        type="password"
                                >
                                </el-input>
                            </div>
                            <div class="control-group">
                                <label class="control-label">密码确认</label>
                                <el-input
                                        placeholder="请确认用户密码"
                                        type="password"
                                >
                                </el-input>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<style src="../../assets/css/globals/common.css"></style>
<style src="../../assets/css/pages/login.css"></style>
<script>
    import SiteHeader from '../common/SiteHeader'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            SiteHeader
        }
    }
</script>
