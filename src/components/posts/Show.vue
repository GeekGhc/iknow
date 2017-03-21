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
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import SiteHeader from '../common/SiteHeader'
    export default{
        data(){
            return{
                post:'',
            }
        },
        mounted(){
            this.getPost()
        },
        methods:{
        ...mapActions(['POST_SHOW']),
            getPost(){
                var post = this.post
                var postId = this.$route.params.id
                this.POST_SHOW(post,postId)
            }
        },
        components:{
            SiteHeader
        }
    }

</script>
