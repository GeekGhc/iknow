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
                            <button class="btn btn-primary btn-lg">发布</button>
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
<style src="../assets/css/globals/common.css"></style>
<script>
    import SiteHeader from './common/SiteHeader'
    import UEditor from './common/UEditor'
    import Post from './posts/Post'
    import PostComment from './posts/Comment'
    export default{
        name:'start',
        data() {
          return {
             textarea:''
          }
        },
        mounted(){

        },
        components:{
           Post,
           SiteHeader,
           'ueditor':UEditor,
           'post-comment':PostComment
        }
    }
</script>