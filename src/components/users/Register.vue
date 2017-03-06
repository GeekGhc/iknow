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

                            <div class="control-group" v-bind:class="{ 'form-group--error': $v.newUser.name.$error }">
                                <label class="control-label">用户名2</label>
                                <el-input
                                        placeholder="请输入你的用户名"
                                        v-model="newUser.name"
                                        @input="$v.newUser.name.$touch()"
                                >
                                </el-input>
                            </div>
                            <span class="form-group__message" v-if="!$v.newUser.name.required">用户名不能为空</span>
                            <span class="form-group__message" v-if="!$v.newUser.name.minLength">用户名不能太短</span>
                            <span class="form-group__message" v-if="!$v.newUser.name.isUnique">用户名已经被注册</span>

                            <div class="control-group" v-bind:class="{ 'form-group--error': $v.newUser.email.$error }">
                                <label class="control-label">邮箱</label>
                                <el-input
                                        placeholder="请输入你的邮箱"
                                        v-model.trim="newUser.email"
                                        @input="$v.newUser.email.$touch()"
                                >
                                </el-input>
                            </div>
                            <span class="form-group__message" v-if="!$v.newUser.email.required">邮箱不能为空</span>
                            <span class="form-group__message" v-if="!$v.newUser.email.email">请填写正确的邮箱格式</span>

                            <div class="control-group" v-bind:class="{ 'form-group--error': $v.newUser.password.$error }">
                                <label class="control-label">密码</label>
                                <el-input
                                        placeholder="请输入你的用户密码"
                                        type="password"
                                        v-model.trim="newUser.password"
                                        @input="$v.newUser.password.$touch()"
                                >
                                </el-input>
                            </div>
                            <span class="form-group__message" v-if="!$v.newUser.password.required">密码不能为空</span>
                            <span class="form-group__message" v-if="!$v.newUser.password.minLength">密码长度最少为6位</span>

                            <div class="control-group" v-bind:class="{ 'form-group--error': $v.newUser.confirm_pwd.$error }">
                                <label class="control-label">密码确认</label>
                                <el-input
                                        placeholder="请确认用户密码"
                                        type="password"
                                        v-model.trim="newUser.confirm_pwd"
                                        @input="$v.newUser.confirm_pwd.$touch()"
                                >
                                </el-input>
                            </div>
                            <span class="form-group__message" v-if="!$v.newUser.confirm_pwd.sameAsPassword">确认密码不一致</span>

                            <div class="control-group">
                                <button
                                        class="btn btn-primary btn-lg btn-block btn-login-register"
                                >立即注册
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
    import { required,minLength,between,email,sameAs } from 'vuelidate/lib/validators'
    export default{
        data(){
            return{
                newUser: {
                    name:'',
                    email:'',
                    password:'',
                    confirm_pwd:''
                },
            }
        },
        validations: {
            newUser:{
               name: {
                    required,
                    minLength: minLength(4),
                    async isUnique (value) {
                       if (value === '') return true
                       const response = await fetch(`http://localhost:8000/api/unique/name/${value}`)
                       return Boolean(await response.json())
                    }
               },
               email: {
                    required,email
               },
               password: {
                   required,
                   minLength: minLength(6)
               },
               confirm_pwd: {
                    sameAsPassword: sameAs('password')
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
