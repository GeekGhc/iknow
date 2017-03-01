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
                                <div class="feed-item-comment-list">
                                    <div class="feed-comment-wrapper">
                                        <ul class="feed-comment-list">
                                            <li class="feed-comment-list-item">
                                                <div class="feed-comment-list-item-body">
                                                    <div class="feed-comment-item-avatar">
                                                        <img>
                                                    </div>
                                                    <div class="feed-comment-item-main">
                                                        <div class="comment-text">
                                                            <p>这是一个好问题</p>
                                                        </div>
                                                        <div class="comment-time">
                                                            3天前
                                                        </div>
                                                        <a class="comment-reply">
                                                            回复
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
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
             msg: 'Welcome to Your Vue.js App'
          }
        },
        components:{
           SiteHeader
        }
    }


</script>
