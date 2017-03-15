<template>
    <div id="post">
        <li class="feed-item" v-for="(post,index) in posts">
            <div class="feed-item-head">
                <a class="avatar">
                    <img src="../../assets/images/avatars/default/my-avatar.jpg">
                </a>
                <a class="feed-item-author">{{ post.user.name }}</a>
                <span class="time" id="aaa">4天前</span>
                <div class="control-operator">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <a><i class="fa fa-chevron-down"></i></a>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">收藏</el-dropdown-item>
                            <el-dropdown-item command="b" @click="deletePost(post.id)">删除</el-dropdown-item>
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
                <a class="feed-item-thumbs">
                    <i class="fa fa-thumbs-o-up"></i>{{ post.vote_count}}
                </a>
                <div class="feed-item-separation"></div>
                <div class="feed-item-comment">
                    <i class="fa fa-commenting-o"></i>{{ post.comment_count }}
                </div>
            </div>
        </li>

        <div class="comments-list" v-if="false">
            <div class="comment-wrapper">
                <div class="ui comments">
                <comment></comment>
                </div>
            </div>
        </div>
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
            ...mapActions(['POST_GET']),
            getPosts(){
              this.POST_GET()
            },
            deletePost(postId){
              console.log("delete post id = "+postId)
            }
        },
        components:{
            Comment
        }
    }

</script>
