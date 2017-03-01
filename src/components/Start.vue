<template>
    <div id="start">
        <site-header></site-header>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="feed-list">
                            <ul>
                                <li class="feed-item">
                                    <div class="feed-item-head">
                                        <a class="avatar">
                                            <img src="../assets/images/avatars/default/my-avatar.jpg">
                                        </a>
                                        <a class="feed-item-author">JellyBean</a>
                                        <span class="time">4天前</span>
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
                                        <!--<div class="ui comments">
                                            <div class="comment">
                                                <a class="avatar">
                                                    <img src="../assets/images/avatars/default/my-avatar.jpg">
                                                </a>
                                                <div class="content">
                                                    <a class="author">Steve Jobes</a>
                                                    <div class="metadata">
                                                        <div class="date">2 days ago</div>
                                                    </div>
                                                    <div class="text">Revolutionary! </div>
                                                    <div class="actions">
                                                        <a class="reply active">Reply</a>
                                                    </div>
                                                    <form class="ui reply form">
                                                        <div class="field">
                                                            <textarea></textarea>
                                                        </div>
                                                        <div class="ui primary submit labeled icon button"><i class="icon edit"></i> Add Reply </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>-->

                                            <div class="comment-list">
                                                <div class="comment-item-body">
                                                    <div class="comment-item-avatar">
                                                        <img src="../assets/images/avatars/default/my-avatar.jpg">
                                                    </div>
                                                    <div class="comment-item-main">
                                                        <div class="comment-text">
                                                            <p>这是一个好问题</p>
                                                        </div>
                                                        <div class="comment-time">
                                                            3天前
                                                        </div>
                                                        <a class="reply-sub">
                                                            回复
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="reply-form">
                                                    <div class="field">
                                                        <el-input
                                                                type="textarea"
                                                                autosize
                                                                placeholder="回复JellyBean:"
                                                                v-model="textarea2">
                                                        </el-input>
                                                        <!--<p>回复JellyBean设计师发布的好不撒大家:</p>
                                                        <div class="field-text">
                                                            <textarea></textarea>
                                                        </div>-->
                                                    </div>
                                                    <div class="ui primary button pull-right"> 回复 </div>
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
<style>

</style>
<script>
    import SiteHeader from './common/SiteHeader'
    export default{
        name:'start',
        data() {
          return {
             msg: 'Welcome to Your Vue.js App',
             textarea2:''
          }
        },
        components:{
           SiteHeader
        }
    }


</script>
