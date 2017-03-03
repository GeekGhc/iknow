<template>
    <div id="profile">
        <site-header></site-header>
        <div class="wrapper">
            <div class="profile-page">
                <el-row :gutter="20">
                    <el-col :span="12" :offset="6" style="padding-left:0;padding-right:0;">
                        <div class="profile-header">
                            <div class="ui big breadcrumb">
                                <a class="section">首页</a>
                                <i class="right chevron icon divider"></i>
                                <div class="active section">我的资料</div>
                            </div>
                            <span>我的资料</span>
                        </div>
                        <div class="profile-form">
                            <div class="control-group">
                                <label class="control-label">头像</label>
                                <div class="controls">
                                    <img class="avatar" src="../../assets/images/avatars/default/my-avatar.jpg">
                                    <a>修改头像</a>
                                </div>
                            </div>

                            <div class="control-group group-box">
                                <label class="control-label">昵称</label>
                                <div class="controls">
                                    <input type="text" placeholder="请输入你的昵称">
                                    <p class="help-block">默认使用微信昵称</p>
                                </div>
                            </div>

                            <div class="control-group group-box">
                                <label class="control-label">手机号码</label>
                                <div class="controls">
                                    <input type="text" placeholder="请填写手机号">
                                    <p class="help-block">用于找回账号</p>
                                </div>
                            </div>

                            <div class="control-group group-box">
                                <label class="control-label">邮箱</label>
                                <div class="controls">
                                    <input type="text" placeholder="请填写邮箱">
                                    <p class="help-block">验证账号邮箱</p>
                                </div>
                            </div>

                            <div class="control-group group-box">
                                <label class="control-label">个人介绍</label>
                                <div class="controls">
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 2, maxRows: 4}"
                                            placeholder="请输入内容"
                                            v-model="textarea3">
                                    </el-input>
                                    <p class="help-block">必要的说明可以让别人更好的认识你</p>
                                </div>
                            </div>

                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<style src="../../assets/css/globals/common.css"></style>
<style src="../../assets/css/pages/profile.css"></style>
<style>
   .el-col {
    background: #fff;
    border: 1px solid #e5e5e5;
    padding:0;
    }


</style>
<script>
    import SiteHeader from '../common/SiteHeader'
    export default{
        data(){
            return{
                 textarea3: ''
            }
        },
        components:{
            SiteHeader
        }
    }



</script>
