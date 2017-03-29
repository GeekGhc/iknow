<template>
    <div id="profile">
        <site-header></site-header>
        <div class="wrapper">
            <div class="panel-page">
                <el-row :gutter="20">
                    <el-col :span="12" :offset="6">
                        <div class="panel-header">
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
                                    <input 
                                        type="text" 
                                        placeholder="请输入你的昵称"
                                        v-model="user.name"
                                        >
                                    <p class="help-block">默认使用微信昵称</p>
                                </div>
                            </div>

                            <div class="control-group group-box">
                                <label class="control-label">手机号码</label>
                                <div class="controls">
                                    <input 
                                        type="text" 
                                        placeholder="请填写手机号"
                                        v-model="user.phone"
                                        >
                                    <p class="help-block">用于找回账号</p>
                                </div>
                            </div>

                            <div class="control-group group-box">
                                <label class="control-label">城市</label>
                                <div class="controls">
                                    <input 
                                        type="text" 
                                        placeholder="请填写你所在的城市"
                                        v-model="user.city"
                                        >
                                    <p class="help-block">show出你的定位</p>
                                </div>
                            </div>

                            <div class="control-group group-box">
                                <label class="control-label">站点</label>
                                <div class="controls">
                                    <input 
                                        type="text"
                                        placeholder="http://example.com"
                                        v-model="user.site"
                                     >
                                    <p class="help-block">让别人更加了解你</p>
                                </div>
                            </div>

                            <div class="control-group group-box">
                                <label class="control-label">个人介绍</label>
                                <div class="controls">
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 2, maxRows: 4}"
                                            placeholder="请输入内容"
                                            v-model="user.description">
                                    </el-input>
                                    <p class="help-block">必要的说明可以让别人更好的认识你</p>
                                </div>
                            </div>

                            <div class="control-group group-box">
                                <button class="ui blue medium button floated right">保存</button>
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
                 user:{
                    name:'',
                    phone:'',
                    city:'',
                    site:'',
                    description:''
                 },
            }
        },
        components:{
            SiteHeader
        }
    }



</script>
