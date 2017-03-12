<template>
    <div id="collect">
        <site-header></site-header>
        <div class="wrapper">
            <div class="panel-page">
                <el-row :gutter="20">
                    <el-col :span="12" :offset="6">
                        <div class="panel-header">
                            <div class="ui big breadcrumb">
                                <a class="section">首页</a>
                                <i class="right chevron icon divider"></i>
                                <div class="active section">我的收藏</div>
                            </div>
                            <span>我的收藏</span>
                        </div>

                        <div class="collect-form">
                            <div class="empty empty-wrapper" style="display:none">
                                <i>╮(╯∀╰)╭</i>
                                <span class="empty-tips">你还没有收藏帖子哦</span>
                            </div>
                            <ul class="collect-list">
                                <li class="collect-post-item">
                                    <em class="post-trash"><i class="trash outline icon"></i></em>
                                    <div class="post-avatar">
                                        <img src="../../assets/images/avatars/elliot.jpg">
                                    </div>
                                    <div class="post-content-main">
                                        <div class="post-content">
                                            想用webpack + vuejs2.0 实现图片的懒加载，目前只找到了vue-lazyload-img，这样的话，如果当我下拉列表的时候，
                                            列表加载第二页数据，这时候列表的图片还会懒加载吗？在webpack中如何运用vue-lazyload-img呢？
                                        </div>
                                    </div>
                                    <div class="post-info">
                                        <div class="coll-from pull-left">来自：PHP 进阶问答 </div>
                                        <div class="coll-time pull-right">2016/12/8</div>
                                    </div>
                                </li>
                            </ul>

                            <div class="col-no-more">╮(╯∀╰)╭ 没有更多了</div>
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
                msg:'hello vue'
            }
        },
        components:{
             SiteHeader
        }
    }
</script>
