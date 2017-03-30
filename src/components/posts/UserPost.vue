<template>
    <div class="wrapper-small">
        <div class="panel-page">
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">
                    <div class="list-form">
                        <div class="panel-header">
                            <span>最新动态</span>
                        </div>
                        <div class="empty empty-wrapper" style="display:none">
                            <i>╮(╯∀╰)╭</i>
                            <span class="empty-tips">你还没有发表帖子哦</span>
                        </div>

                        <ul class="collect-list">
                            <li class="collect-post-item">
                                <div class="post-avatar">
                                    <img src="../../assets/images/avatars/default/my-avatar.jpg">
                                </div>
                                <div class="post-content-main">
                                    <router-link
                                            tag="div"
                                            class="post-content"
                                            :to="{name: 'posts'}"
                                    >
                                        和积分飞往南方new奶粉分那位妇女
                                    </router-link>
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
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
