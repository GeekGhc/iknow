<template>
    <div id="login">
        <site-header></site-header>
        <div class="wrapper">
            <div class="login-page">
                <el-row :gutter="20">
                    <el-col :span="10" :offset="7">
                        <div class="login-header">
                            <div class="login-register">
                                <router-link :to="{name: 'login'}" class="active">登录</router-link>
                                <router-link :to="{ name: 'register'}">注册</router-link>
                            </div>
                        </div>
                        <div class="login-form">
                            <div class="control-group" v-bind:class="{ 'form-group--error': $v.email.$error }">
                                <label class="control-label">邮箱</label>
                                <el-input
                                        placeholder="请输入你的邮箱"
                                        v-model.trim="email"
                                        @input="$v.email.$touch()"
                                >
                                </el-input>
                            </div>
                            <span class="form-group__message" v-if="!$v.email.required">邮箱不能为空</span>
                            <span class="form-group__message" v-if="!$v.email.email">请填写正确的邮箱格式</span>

                            <div class="control-group" v-bind:class="{ 'form-group--error': $v.password.$error }">
                                <label class="control-label">密码</label>
                                <el-input
                                        placeholder="请输入你的用户密码"
                                        type="password"
                                        v-model.trim="password"
                                        @input="$v.password.$touch()"
                                >
                                </el-input>
                            </div>
                            <span class="form-group__message" v-if="!$v.password.required">密码不能为空</span>
                            <span class="form-group__message" v-if="!$v.password.minLength">密码长度最少为6位</span>

                            <div class="control-group">
                                <button class="btn btn-primary btn-lg btn-block btn-login-register">立即登录</button>
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
                msg:'hello vue'
            }
        },
        validations: {
               email: {
                    required,email
               },
               password: {
                   required,
                   minLength: minLength(6)
               },
            }
        },
        components:{
             SiteHeader
        }
    }


</script>
