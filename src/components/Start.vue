<template>
    <div id="start">
        <site-header></site-header>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="index-publish-box">
                            <!-- 加载编辑器的容器 -->
                            <ueditor></ueditor>
                        </div>
                        <div class="edit-control">
                            <button
                                    class="btn btn-primary btn-lg"
                                    @click="show"
                            >发布</button>
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
    import SiteHeader from 'components/common/SiteHeader'
    import UEditor from 'components/common/UEditor'
    import Post from 'components/posts/Post'
    import PostComment from 'components/posts/Comment'
    export default{
        name:'start',
        data() {
          return {

          }
        },
        methods:{
            show(){
                console.log("user is "+this.$store.state.isLogin)
            }
        },
        components:{
           Post,
           SiteHeader,
           'ueditor':UEditor,
           'post-comment':PostComment
        }
    }
</script>