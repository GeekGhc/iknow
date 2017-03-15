<template>
    <div id="start">
        <site-header></site-header>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="index-publish-box">
                            <!-- 加载编辑器的容器 -->
                            <qeditor ref="qeditor"></qeditor>
                        </div>
                        <div class="edit-control">
                            <button
                                    class="btn btn-primary btn-lg"
                                    @click="show"
                            >发布帖子</button>
                        </div>
                        <div class="feed-list">
                            <ul>
                                <post></post>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import SiteHeader from 'components/common/SiteHeader'
    import UEditor from 'components/common/UEditor'
    import QEditor from 'components/common/QEditor'
    import Post from 'components/posts/Post'
    import PostComment from 'components/posts/Comment'
    export default{
        name:'start',
        data(){
          return {
              posts:[],
              post:{
                'body':'',
                'html_body':'',
                'user_id': 0,
                'last_user_id': 0,
              },
              postTemp:{

              }
          }
        },
        methods:{
            ...mapActions(['POST_CREATE']),
            show(){
                this.$refs.qeditor.content = ''
                console.log("content =  "+ this.$store.state.user.id)
            },
            postPublish(){
                this.post.user_id = this.$store.state.user.id
                this.post.last_user_id = this.$store.state.user.id
                this.post.body = this.$refs.qeditor.body
                this.post.html_body = this.$refs.qeditor.html_body
                console.log("this post is "+this.post.user_id)
                this.$refs.qeditor.content = ''
                this.POST_CREATE(this.post)
            },
        },
        components:{
           Post,
           SiteHeader,
           'ueditor':UEditor,
           'qeditor':QEditor,
           'post-comment':PostComment
        }
    }
</script>