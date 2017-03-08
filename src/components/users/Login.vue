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
                                            @click="show"

                                    >立即登录22</button>
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
    //webpack.base.config.js   resolve('src'),这个配置决定从src目录  引入vuex时注意不是在vex下的index.js
    //可以是vuex目录下的store.js
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from 'store/modules/login'
    import SiteHeader from 'components/common/SiteHeader'
    import { required,minLength,between,email,sameAs } from 'vuelidate/lib/validators'
    export default{
        data(){
            return{
               user:{
                email:'',
                password:'',
                remember:false
               },
               isError:false,
               isSubmit:false,//true为提交 false没有提交过
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
            ...mapActions([USER_SIGNIN]),
            show:function(){
                console.log("remember = "+sessionStorage.getItem("user"))
            },
            userLogin() {
				this.isSubmit = true
				this.USER_SIGNIN(this.user)
				this.$router.replace({ path: '/' })
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
