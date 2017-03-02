<template>
    <div id="login">
        <site-header></site-header>
        <div class="wrapper">
            <div class="login-page">
                <el-row :gutter="20">
                    <el-col :span="10" :offset="7">
                        <div class="login-header">
                            <div class="login-register">
                                <a class="active">登录</a>
                                <a>注册</a>
                            </div>
                        </div>
                        <div class="login-form">
                            <div class="form-group">
                                <label>用户名</label>
                                <el-input
                                        icon="search"
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
