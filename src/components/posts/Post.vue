<template>
    <div id="post">
        <div class="feed-item-head">
            <a class="avatar">
                <img :src="post.user.avatar">
            </a>
            <a class="feed-item-author">{{ post.user.name }}</a>
            <span class="time">{{post.created_at}}</span>
            <div class="control-operator">
                <el-dropdown :hide-on-click="false">
                        <span class="el-dropdown-link">
                            <a><i class="fa fa-chevron-down"></i></a>
                        </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <div @click="collect()">收藏</div>
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
                <post-like :post="post"></post-like>
                <div class="feed-item-separation"></div>
                <div class="feed-item-comment">
                    <i
                            class="fa fa-commenting-o"
                            @click="toggle_post_comment"
                    ></i>{{ post.comment_count }}
                </div>
            </div>
        </div>
        <div class="comments-list" v-show="hasComments">
            <div class="comment-wrapper">
                <div class="ui comments">
                    <form class="ui reply form" v-if="show_post_comment">
                        <div class="field">
                            <el-input
                                    type="textarea"
                                    autosize
                                    :placeholder="reply_to_user"
                                    v-model="comment_content">
                            </el-input>
                            <div
                                    class="ui primary button pull-right"
                                    @click="postComment"
                            >回复</div>
                        </div>
                    </form>
                    <ul>
                        <li v-for="(comment,index) in comments">
                            <comment :postId="post.id" :comment="comment" :comments="comments"></comment>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import Comment from './Comment'
    import Like from './Like'
    export default{
        props:['post','index'],
        data(){
            return{
                isCollect:false,
                hasComments:false,
                show_post_comment:false,
                comment_content:'',
                comments:[],
                postData:{},
                reply_to_user:"回复"+this.post.user.name+":"
            }
        },
        computed:{
            postId(){
               return this.post.id
            },
        },
        mounted(){
            this.getComments()
            this.hasCollected()
        },
        methods:{
            ...mapActions(['POST_GET','POST_DELETE','COMMENT_GET','COMMENT_CREATE','COLLECT_POST']),
            getComments(){
                this.axios.get('http://localhost:8000/api/post/'+this.postId+'/comment').then(response => {
                    if(response.data.status){
                        this.comments = response.data.comments
                        if(this.comments.length>0){
                           this.hasComments = true
                        }else{
                           this.hasComments = false
                        }
                    }
                })
            },
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
            favoriteWarning() {
                this.$message({
                  message: '你已经收藏过该帖子了',
                  type: 'warning'
                });
            },
            deletePost(postId,index){
                this.POST_DELETE({postId,index})
                this.deleteSuccess()
            },
            async hasCollected(){
                 var userId = this.$store.state.user.id
                 var postId = this.post.id
                 const response = await fetch(`http://localhost:8000/api/user/${userId}/post/${postId}`)
                 this.isCollect = Boolean(await response.json())
            },
            collect(){

                if(this.isCollect){
                    this.favoriteWarning()
                }else{
                    this.axios.post('http://localhost:8000/api/post/collect',{userId:this.$store.state.user.id,postId:this.post.id}).then(response => {
                        if(response.data.status){
                            this.isCollect = response.data.isCollect
                        }
                    })
                    this.favoriteSuccess()
                }
            },
            postComment(){
                this.$store.state.newComment.post_id = this.postId
                this.$store.state.newComment.body = this.comment_content
                this.COMMENT_CREATE(this.comments)
                this.show_post_comment = false
                this.comment_content = ''
            },
            toggle_post_comment(){
                if(this.comments.length == 0){
                    this.hasComments = !this.hasComments
                }
                this.show_post_comment = !this.show_post_comment
            },
        },
        components:{
            'comment':Comment,
            'post-like':Like
        }
    }
</script>
