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

                        <div class="post-page">
                            <div class="feed-item-head">
                                <a class="avatar">
                                    <img :src="postUser.avatar">
                                </a>
                                <a class="feed-item-author">{{postUser.name}}</a>
                                <span class="time">4天前</span>
                                <div class="control-operator">
                                    <el-dropdown :hide-on-click="false">
                                    <span class="el-dropdown-link">
                                        <a><i class="fa fa-chevron-down"></i></a>
                                    </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>
                                                <div @click="collect()">收藏</div>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </div>

                            <div class="feed-item-body">
                                <div class="feed-item-body-wrapper">
                                    <div class="feed-item-body-content">
                                        <div v-html="post.html_body">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="feed-item-foot">
                                <div class="feed-item-foot-wrapper">
                                    <post-like :post="post" v-if="post"></post-like>
                                    <div class="feed-item-separation"></div>
                                    <div class="feed-item-comment">
                                        <i
                                                class="fa fa-commenting-o"
                                                @click="toggle_post_comment"
                                        ></i>{{post.comment_count}}
                                    </div>
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
                                            >回复
                                            </div>
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

                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import Comment from './Comment'
    import Like from './Like'
    import SiteHeader from '../common/SiteHeader'
    export default{
        data(){
            return{
                post:{},
                postUser:{},
                isCollect:false,
                comments:[],
                hasComments:false,
                show_post_comment:false,
                comment_content:'',
                reply_to_user:"回复"
            }
        },
        beforeRouteEnter (to, from, next) {
            var postId = to.params.id
            next()
        },
        created(){
            this.fetchData()
            this.hasCollected()
            this.getComments()
        },
        mounted(){

        },
        methods:{
        ...mapActions(['COMMENT_CREATE']),
           getPost(){
                var postId = this.$route.params.id
                this.axios.get('http://localhost:8000/api/post/'+postId).then(response => {
                    if(response.data.status){
                          this.post=response.data.post
                          this.postUser = response.data.post.user
                    }

                })
            },
            async fetchData(){
                var postId = this.$route.params.id
                const response = await fetch(`http://localhost:8000/api/post/${postId}`).then((response) =>
                {
                    return response.json()
                })
                .then(data=>{
                     this.post = data.post
                     this.postUser = data.post.user
                })
            },
            getComments(){
                var postId = this.$route.params.id
                this.axios.get('http://localhost:8000/api/post/'+postId+'/comment').then(response => {
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
            async hasCollected(){
                 var userId = this.$store.state.user.id
                 var postId = this.$route.params.id
                 const response = await fetch(`http://localhost:8000/api/user/${userId}/post/${postId}`)
                 this.isCollect = Boolean(await response.json())
                 console.log("this post collect is "+this.isCollect+" and  post id = "+postId)
            },
            postComment(){
                this.$store.state.newComment.post_id = this.post.id
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
        },
        components:{
            SiteHeader,
            'comment':Comment,
            'post-like':Like
        }
    }


</script>
