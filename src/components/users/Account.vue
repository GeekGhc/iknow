<template>
    <div id="account">
        <site-header></site-header>
        <div class="wrapper">
            <div class="account-page">
                <div class="user-banner">
                    <el-row :gutter="20">
                        <el-col :span="12" :offset="6">
                            <ul class="user-banner-tags">
                                <li class="tag-item"><a>Android</a></li>
                                <li class="tag-item"><a>Java</a></li>
                                <li class="tag-item"><a>Laravel</a></li>
                                <li class="tag-item"><a>PHP工程师</a></li>
                            </ul>
                            <div class="user-banner-info">
                                <div class="user-banner-left">
                                    <img src="../../assets/images/avatars/default/my-avatar.jpg">
                                </div>
                                <div class="user-banner-right">
                                    <h2>JellyBean</h2>
                                    <p>我是一个有追求的人</p>
                                    <ul class="user-info-ul">
                                        <li>
                                            <a href="#">
                                                <span>0</span>
                                                帖子
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>0</span>
                                                关注者
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>0</span>
                                                粉丝
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>0</span>
                                                收藏
                                            </a>
                                        </li>
                                    </ul>
                                    <router-link
                                            :to="{name: 'profile'}"
                                            class="modify-profile"
                                    >
                                        <i class="fa fa-pencil-square-o"></i>修改资料
                                    </router-link>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="user-banner-control">
                    <el-row :gutter="20">
                        <el-col :span="12" :offset="9">
                            <ul class="user-level-ul">
                                <li><a>我的帖子</a></li>
                                <li><a>我的收藏</a></li>
                            </ul>
                            <ul class="user-banner-button">
                                <li><button class="ui button">关注他</button></li>
                                <user-message></user-message>
                            </ul>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import SiteHeader from '../common/SiteHeader'
    import UserMessage from '../Message/UserMessage'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            SiteHeader,
            'user-message':UserMessage
        }
    }

</script>
