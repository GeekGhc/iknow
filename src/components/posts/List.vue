<template>
    <div id="list">
        <site-header></site-header>
        <div class="wrapper">
            <div class="panel-page">
                <el-row :gutter="20">
                    <el-col :span="12" :offset="6">
                        <div class="panel-header">
                            <div class="ui big breadcrumb">
                                <a class="section">首页</a>
                                <i class="right chevron icon divider"></i>
                                <div class="active section">我的帖子</div>
                            </div>
                            <span>我的帖子</span>
                        </div>
                        <div class="list-form">
                            <div class="empty empty-wrapper" style="display:none">
                                <i>╮(╯∀╰)╭</i>
                                <span class="empty-tips">你还没有发表帖子哦</span>
                            </div>

                            <ul class="collect-list">
                                <li class="collect-post-item" v-for="(post,index) in posts">
                                    <em class="post-trash">
                                        <i
                                                class="trash outline icon"
                                                @click="deletePost(post.id,index)"
                                        >
                                        </i>
                                    </em>
                                    <div class="post-avatar">
                                        <img :src="userAvatar">
                                    </div>
                                    <div class="post-content-main">
                                        <router-link
                                                tag="div"
                                                class="post-content"
                                                :to="{ name: 'postShow', params: { id:post.id }}"
                                        >    
                                                {{ post.body }}
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
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import SiteHeader from '../common/SiteHeader'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        computed:{
            posts(){
               return this.$store.state.userPosts
            },
            userAvatar(){
                return this.$store.state.user.avatar
            }
        },
        mounted(){
            this.getPosts()
        },
        methods:{
        ...mapActions(['USER_POST_GET','USER_POST_DELETE']),
            deleteSuccess() {
                this.$message({
                  message: '帖子删除成功',
                  type: 'success'
                });
            },
            getPosts(){
                this.USER_POST_GET()
            },
            deletePost(postId,index){
                this.USER_POST_DELETE({postId,index})
                this.deleteSuccess()
            },
        },
        components:{
            SiteHeader
        }
    }

</script>
