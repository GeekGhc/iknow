<template>
    <div id="post">
        <ul>
            <li class="feed-item" v-for="(post,index) in posts">
                <div class="feed-item-head">
                    <a class="avatar">
                        <img :src="post.user.avatar">
                    </a>
                    <a class="feed-item-author" @click="favorite">{{ post.user.name }}</a>
                    <span class="time">4天前</span>
                    <div class="control-operator">
                        <el-dropdown :hide-on-click="false">
                        <span class="el-dropdown-link">
                            <a><i class="fa fa-chevron-down"></i></a>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <div @click="favorite(post.id)">收藏</div>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <div @click="deletePost(post.id,index)">删除</div>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <div class="feed-item-body">
                    <div class="feed-item-body-wrapper">
                        <div class="feed-item-body-content">
                            <p v-html="post.html_body"></p>
                        </div>
                    </div>
                </div>
                <div class="feed-item-foot">
                    <div class="feed-item-foot-wrapper">
                        <a class="feed-item-thumbs">
                            <i class="fa fa-thumbs-o-up"></i>{{ post.vote_count}}
                        </a>
                        <div class="feed-item-separation"></div>
                        <div class="feed-item-comment">
                            <i class="fa fa-commenting-o"></i>{{ post.comment_count }}
                        </div>
                    </div>
                </div>
                <div class="comments-list" v-if="true">
                    <div class="comment-wrapper">
                        <div class="ui comments">
                            <comment></comment>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import Comment from './Comment'
    export default{
        data(){
            return{

            }
        },
        computed:{
            posts(){
               return this.$store.state.posts
            }
        },
        mounted(){
              this.getPosts()
        },
        methods:{
            ...mapActions(['POST_GET','POST_DELETE']),
            deleteSuccess() {
                this.$message({
                  message: '帖子删除成功',
                  type: 'success'
                });
            },
            favoriteSuccess() {
                this.$message({
                  message: '帖子收藏成功',
                  type: 'success'
                });
            },
            getPosts(){
              this.POST_GET()
            },
            deletePost(postId,index){
                console.log("delete postId = "+postId+"  index = "+index)
                this.POST_DELETE({postId,index})
                this.deleteSuccess()
            },
            favorite(postId){
                console.log("你已经成功收藏了。。。"+postId)
                this.favoriteSuccess()
            }
        },
        components:{
            Comment
        }
    }



</script>
