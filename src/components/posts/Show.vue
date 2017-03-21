<template>
    <div id="post-show">
        <site-header></site-header>
        <div class="wrapper">
            <div class="panel-page">
                <el-row :gutter="20">
                    <el-col :span="12" :offset="6">
                        <div class="panel-header">
                            <div class="ui big breadcrumb">
                                <a class="section">首页</a>
                                <i class="right chevron icon divider"></i>
                                <div class="active section">帖子详情</div>
                            </div>
                            <span>帖子详情</span>
                        </div>

                        <div class="feed-item-head">
                            <a class="avatar">
                                <img src="/static/images/avatar/elliot.jpg">
                            </a>
                            <a class="feed-item-author">Gavin</a>
                            <span class="time">4天前</span>
                            <div class="control-operator">
                                <el-dropdown :hide-on-click="false">
                                    <span class="el-dropdown-link">
                                        <a><i class="fa fa-chevron-down"></i></a>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>
                                            <div>收藏</div>
                                        </el-dropdown-item>
                                        <el-dropdown-item>
                                            <div>删除</div>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </div>

                        <div class="feed-item-body">
                            <div class="feed-item-body-wrapper">
                                <div class="feed-item-body-content">
                                    <p>这是一篇帖子</p>
                                </div>
                            </div>
                        </div>
                        <div class="feed-item-foot">
                            <div class="feed-item-foot-wrapper">
                                <a class="feed-item-thumbs">
                                    <i class="fa fa-thumbs-o-up"></i>34
                                </a>
                                <div class="feed-item-separation"></div>
                                <div class="feed-item-comment">
                                    <i
                                            class="fa fa-commenting-o"
                                            @click="toggle_post_comment"
                                    ></i>22
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
    import Comment from './Comment'
    import SiteHeader from '../common/SiteHeader'
    export default{
        data(){
            return{
                post:null,
                isCollect:false,
                comments:[],
                hasComments:false,
                show_post_comment:false,
                comment_content:'',
                reply_to_user:"回复"
            }
        },
        mounted(){
            this.getPost()
        },
        methods:{
        ...mapActions(['POST_SHOW','COMMENT_CREATE']),
            getPost(){
                var post = this.post
                var postId = this.$route.params.id
                this.POST_SHOW(post,postId)
            },
            async hasCollected(){
                 var userId = this.$store.state.user.id
                 var postId = this.post.id
                 const response = await fetch(`http://localhost:8000/api/user/${userId}/post/${postId}`)
                 this.isCollect = Boolean(await response.json())
                 console.log("this post collect is "+this.isCollect)
            },
            postComment(){
                this.$store.state.newComment.post_id = this.postId
                this.$store.state.newComment.body = this.comment_content
                this.COMMENT_CREATE(this.comments)
                this.show_post_comment = false
            },
            toggle_post_comment(){
                if(this.comments.length == 0){
                    this.hasComments = !this.hasComments
                }
                this.show_post_comment = !this.show_post_comment
            },
        },
        components:{
            SiteHeader,
            'comment':Comment
        }
    }




</script>
