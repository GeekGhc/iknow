<template>
    <div id="login">
        <site-header></site-header>
        <div class="wrapper">
            <div class="login-page">
                <el-row :gutter="20">
                    <el-col :span="10" :offset="7">
                        <el-alert
                                title="用户名或者邮箱错误"
                                type="error"
                                class="show-login-error"
                                v-show="isError"
                                show-icon>
                        </el-alert>
                        <div class="login-header">
                            <div class="login-register">
                                <router-link :to="{name: 'login'}" class="active">登录</router-link>
                                <router-link :to="{ name: 'register'}">注册</router-link>
                            </div>
                        </div>
                        <div class="login-form">
                            <div class="control-group" v-bind:class="{ 'form-group--error': $v.user.email.$error }">
                                <label class="control-label">邮箱</label>
                                <el-input
                                        placeholder="请输入你的邮箱"
                                        v-model.trim="user.email"
                                        @input="$v.user.email.$touch()"
                                >
                                </el-input>
                            </div>
                            <span class="form-group__message" v-if="!$v.user.email.required">邮箱不能为空</span>
                            <span class="form-group__message" v-if="!$v.user.email.email">请填写正确的邮箱格式</span>

                            <div class="control-group" v-bind:class="{ 'form-group--error': $v.user.password.$error }">
                                <label class="control-label">密码</label>
                                <el-input
                                        placeholder="请输入你的用户密码"
                                        type="password"
                                        v-model.trim="user.password"
                                        @input="$v.user.password.$touch()"
                                >
                                </el-input>
                            </div>
                            <span class="form-group__message" v-if="!$v.user.password.required">密码不能为空</span>
                            <span class="form-group__message" v-if="!$v.user.password.minLength">密码长度最少为6位</span>

                            <div class="control-group ui grid login-group">
                                <div class="twelve wide column">
                                    <el-checkbox
                                            label="记住登录状态"
                                            name="type"
                                            class="login-remember"
                                            v-model="user.remember"
                                    ></el-checkbox>
                                </div>
                                <div class="four wide column">
                                    <button
                                            class="ui button linkedin btn-login"
                                            @click="login($v.user)"

                                    >立即登录</button>
                                </div>
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
               user:{
                email:'',
                password:'',
                remember:false
               },
               isError:false
            }
        },
        validations: {
           user:{
               email: {
                    required,email
               },
               password: {
                   required,
                   minLength: minLength(6)
               },
           }
        },
        methods:{
            show:function(){
                console.log("remember = "+this.user.remember)
            },
            login:function(value){
                value.$touch();//验证所有信息
                if(!value.$error){
                     this.axios.post('http://localhost:8000/api/user/login',{user:this.user}).then(response => {
                        if(response.data.status){

                        }
                        this.isError = !data.status
                    })
                }
            }
        },
        components:{
             SiteHeader
        }
    }


</script>
