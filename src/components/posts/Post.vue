<template>
    <div id="post">
        <li class="feed-item">
            <div class="feed-item-head">
                <a class="avatar">
                    <img src="../../assets/images/avatars/default/my-avatar.jpg">
                </a>
                <a class="feed-item-author">JellyBean123</a>
                <span class="time" id="aaa">4天前</span>
                <div class="control-operator">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <a><i class="fa fa-chevron-down"></i></a>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">收藏</el-dropdown-item>
                            <el-dropdown-item command="b">举报</el-dropdown-item>
                            <el-dropdown-item command="b">删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
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
                <comment></comment>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Comment from './Comment'
    export default{
        data(){
            return{
            }
        },
        components:{
            Comment
        }
    }

</script>
