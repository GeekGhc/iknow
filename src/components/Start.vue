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
                                <li class="feed-item">
                                    <div class="feed-item-head">
                                        <a class="avatar">
                                            <img src="../assets/images/avatars/default/my-avatar.jpg">
                                        </a>
                                        <a class="feed-item-author">JellyBean123</a>
                                        <span class="time"  id="aaa">4天前</span>
                                        <div class="control-operator">
                                            <a><i class="fa fa-chevron-down"></i></a>
                                        </div>

                                    </div>
                                    <div class="feed-item-body">
                                        <div class="feed-item-body-wrapper">
                                            <div class="feed-item-body-content">
                                                <p>First post</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="feed-item-foot">
                                        <a class="feed-item-thumbs">
                                            <i class="fa fa-thumbs-o-up"></i>2
                                        </a>
                                        <div class="feed-item-separation"></div>
                                        <div class="feed-item-comment">
                                            <i class="fa fa-commenting-o"></i>4
                                        </div>
                                    </div>
                                </li>
                                <div class="comments-list">
                                    <div class="comment-wrapper">
                                        <div class="ui comments">
                                            <div class="comment">
                                                <a class="avatar">
                                                    <img src="../assets/images/avatars/default/my-avatar.jpg">
                                                </a>
                                                <div class="content">
                                                    <a class="author">Steve Jobes</a>
                                                    <div class="text">Revolutionary!</div>
                                                    <div class="actions">
                                                        <div class="metadata">
                                                            <div class="date">2 days ago</div>
                                                        </div>
                                                        <a class="reply active pull-right">回复</a>
                                                    </div>
                                                    <form class="ui reply form">
                                                        <div class="field">
                                                            <el-input
                                                                    type="textarea"
                                                                    autosize
                                                                    placeholder="回复JellyBean:"
                                                                    v-model="textarea">
                                                            </el-input>
                                                        </div>
                                                        <div class="reply-button">
                                                            <div class="ui primary button">回复</div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>


                                            <div class="comment">
                                                <a class="avatar">
                                                    <img src="../assets/images/avatars/default/my-avatar.jpg">
                                                </a>
                                                <div class="content">
                                                    <a class="author">Steve Jobes</a>
                                                    <div class="text">Revolutionary!</div>
                                                    <div class="actions">
                                                        <div class="metadata">
                                                            <div class="date">2 days ago</div>
                                                        </div>
                                                        <a class="reply active pull-right">回复</a>
                                                    </div>
                                                    <form class="ui reply form">
                                                        <div class="field">
                                                            <el-input
                                                                    type="textarea"
                                                                    autosize
                                                                    placeholder="回复JellyBean:"
                                                                    v-model="textarea">
                                                            </el-input>
                                                        </div>
                                                        <div class="reply-button">
                                                            <div class="ui primary button">回复</div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
           SiteHeader,
           'ueditor':UEditor
        }
    }
</script>