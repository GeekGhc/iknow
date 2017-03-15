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
                                    @click="postPublish"
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
              postContent:{
                'body':'',
                'html_body':'',
              },
          }
        },
        methods:{
            ...mapActions(['POST_CREATE']),
            show(){
                this.$refs.qeditor.content = ''
                console.log("content =  "+ this.$store.state.user.id)
            },
            postPublish(){
                this.postContent.body = this.$refs.qeditor.body
                this.postContent.html_body = this.$refs.qeditor.html_body
                this.$refs.qeditor.content = ''
                console.log("body = "+this.postContent.body)
                this.POST_CREATE(this.postContent)
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