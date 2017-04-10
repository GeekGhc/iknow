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
                            <div class="empty empty-wrapper" v-if="!collection.length">
                                <i>╮(╯∀╰)╭</i>
                                <span class="empty-tips">你还没有收藏帖子哦</span>
                            </div>

                            <ul class="collect-list" v-if="collection.length">
                                <li class="collect-post-item" v-for="(post,index) in collection">
                                    <em class="post-trash">
                                        <i
                                                class="trash outline icon"
                                                @click="deletePost(post.id,index)"
                                        >
                                        </i>
                                    </em>
                                    <div class="post-avatar" v-if="post.user">
                                        <img :src="post.user.avatar">
                                    </div>
                                    <router-link
                                            tag="div"
                                            class="post-content-main"
                                            :to="{ name: 'show', params: { id:post.id}}"
                                    >
                                        <div class="post-content">
                                            {{ post.body }}
                                        </div>
                                    </router-link>

                                    <div class="post-info">
                                        <div class="coll-from pull-left">来自：PHP 进阶问答 </div>
                                        <div class="coll-time pull-right">{{ post.created_at }}</div>
                                    </div>
                                </li>
                            </ul>

                            <div class="col-no-more" v-if="collection.length">╮(╯∀╰)╭ 没有更多了</div>
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
            collection(){
               return this.$store.state.collection
            },
            userAvatar(){
                return this.$store.state.user.avatar
            }
        },
        mounted(){
            this.getCollections()
        },
        methods:{
        ...mapActions(['USER_COLLECTION','COLLECT_DELETE']),
            favoriteDelete() {
                this.$message({
                  message: '已取消收藏该帖子',
                  type: 'success'
                });
            },
            getCollections(){
                var userId = this.$store.state.user.id
                this.USER_COLLECTION(userId)
            },
            deletePost(postId,index){
                console.log("post id = "+postId)
                var userId = this.$store.state.user.id
                this.COLLECT_DELETE({userId,postId,index})
                this.favoriteDelete()
            },
        },
        components:{
             SiteHeader
        }
    }
</script>
