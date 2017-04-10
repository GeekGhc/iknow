<template>
    <div class="wrapper-small">
        <div class="panel-page">
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">
                    <div class="list-form">
                        <div class="panel-header">
                            <span>最新动态</span>
                        </div>
                        <div class="empty empty-wrapper" v-if="!posts.length">
                            <i>╮(╯∀╰)╭</i>
                            <span class="empty-tips">你还没有发表帖子哦</span>
                        </div>

                        <ul class="collect-list" v-if="posts.length">
                            <li class="collect-post-item" v-for="(post,index) in posts">
                                <div class="post-avatar" v-if="post.user">
                                    <img :src="post.user.avatar">
                                </div>
                                <div class="post-content-main">
                                    <router-link
                                            tag="div"
                                            class="post-content"
                                            :to="{name: 'show',params: { id:post.id }}"
                                    >
                                        {{ post.body }}
                                    </router-link>
                                </div>
                                <div class="post-info">
                                    <div class="coll-from pull-left">来自：PHP 进阶问答 </div>
                                    <div class="coll-time pull-right">{{post.created_at}}</div>
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
    import { mapActions } from 'vuex'
    export default{
        data(){
            return{

            }
        },
        computed:{
            posts(){
               return this.$store.state.userPosts
            },
        },
        mounted(){
            this.getPosts()
        },
        methods:{
        ...mapActions(['USER_POST_GET']),
            getPosts(){
                this.USER_POST_GET()
            },
        },
        components:{

        }
    }
</script>
