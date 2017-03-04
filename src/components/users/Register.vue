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
                                        v-model="newUser.name"
                                >
                                </el-input>
                            </div>
                            <div class="control-group">
                                <label class="control-label">邮箱</label>
                                <el-input
                                        placeholder="请输入你的邮箱"
                                        v-model="newUser.email"
                                >
                                </el-input>
                            </div>
                            <div class="control-group">
                                <label class="control-label">密码</label>
                                <el-input
                                        placeholder="请输入你的用户密码"
                                        type="password"
                                        v-model="newUser.password"
                                >
                                </el-input>
                            </div>
                            <div class="control-group">
                                <label class="control-label">密码确认</label>
                                <el-input
                                        placeholder="请确认用户密码"
                                        type="password"
                                        v-model="newUser.confirm_pwd"
                                >
                                </el-input>
                            </div>
                            <div class="control-group">
                                <button
                                        class="btn btn-primary btn-lg btn-block btn-login-register"
                                        @click="register()">立即注册
                                </button>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
    import SiteHeader from '../common/SiteHeader'
    export default{
        data(){
            return{
                newUser: {
                    name:'',
                    email:'',
                    password:'',
                    confirm_pwd:''
                }
            }
        },
        methods:{
            register:function(){
                console.log("name = "+this.newUser.name)
                this.axios.post('http://localhost:8000/api/user/register',{user:this.newUser}).then(response => {
                  console.log("data = "+response.data.title)
                })
            }
        },
        components:{
            SiteHeader
        }
    }
</script>
