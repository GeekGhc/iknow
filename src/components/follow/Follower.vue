<template>
    <div id="follower">
        <site-header></site-header>
        <div class="wrapper">
            <div class="panel-page follow-page">
                <el-row :gutter="20">
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :offset="6">
                        <h2 class="ui header">
                            <div class="content">粉丝列表</div>
                        </h2>
                        <div class="ui cards two column">
                            <div class="card column">
                                <div class="content">
                                    <img class="right floated mini ui image" src="/static/images/avatar/elliot.jpg">
                                    <div class="header">葛华春</div>
                                    <div class="meta">22个关注者</div>
                                    <div class="description">Elliot requested permission to view your contact details
                                    </div>
                                </div>
                                <div class="extra content user-follow-footer">
                                    <div class="user-follow-footer-panel">
                                        <a><i class="student icon"></i> 主页 </a>
                                    </div>
                                    <button class="ui button pull-right">Follow</button>
                                </div>
                            </div>

                            <div class="card column">
                                <div class="content">
                                    <img class="right floated mini ui image" src="/static/images/avatar/elliot.jpg">
                                    <div class="header">葛华春</div>
                                    <div class="meta">22个关注者</div>
                                    <div class="description">Elliot requested permission to view your contact details
                                    </div>
                                </div>
                                <div class="extra content user-follow-footer">
                                    <div class="user-follow-footer-panel">
                                        <a><i class="student icon"></i> 主页 </a>
                                    </div>
                                    <button class="ui button pull-right">Follow</button>
                                </div>
                            </div>

                            <div class="card column">
                                <div class="content">
                                    <img class="right floated mini ui image" src="/static/images/avatar/elliot.jpg">
                                    <div class="header">葛华春</div>
                                    <div class="meta">22个关注者</div>
                                    <div class="description">Elliot requested permission to view your contact details
                                    </div>
                                </div>
                                <div class="extra content user-follow-footer">
                                    <div class="user-follow-footer-panel">
                                        <a><i class="student icon"></i> 主页 </a>
                                    </div>
                                    <button class="ui button pull-right">Follow</button>
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
    import { mapActions } from 'vuex'
    import SiteHeader from '../common/SiteHeader'
    export default{
        data(){
            return{

            }
        },
        components:{
             SiteHeader
        }
    }



</script>
