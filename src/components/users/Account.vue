<template>
    <div id="account">
        <site-header></site-header>
        <div class="wrapper">
            <div class="account-page">
                <div class="user-banner">
                    <el-row :gutter="20">
                        <el-col :span="12" :offset="6">
                            <ul class="user-banner-tags">
                                <li class="tag-item"><a>Android</a></li>
                                <li class="tag-item"><a>Java</a></li>
                                <li class="tag-item"><a>Laravel</a></li>
                                <li class="tag-item"><a>PHP工程师</a></li>
                            </ul>
                            <div class="user-banner-info">
                                <div class="user-banner-left" v-if="user">
                                    <img :src="user.avatar">
                                </div>
                                <div class="user-banner-right">
                                    <h2 v-if="user">{{ user.name }}</h2>
                                    <p>我是一个有追求的人 Keep Coding </p>
                                    <ul class="user-info-ul">
                                        <li>
                                            <a href="#" v-if="showCount">
                                                <span>{{ showCount.posts_count}}</span>
                                                帖子
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" v-if="showCount">
                                                <span>{{ showCount.following_count}}</span>
                                                关注者
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" v-if="showCount">
                                                <span>{{ showCount.followers_count}}</span>
                                                粉丝
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" v-if="showCount">
                                                <span>{{ showCount.collect_count}}</span>
                                                收藏
                                            </a>
                                        </li>
                                    </ul>
                                    <router-link
                                            :to="{name: 'profile'}"
                                            class="modify-profile"
                                    >
                                        <i class="fa fa-pencil-square-o"></i>修改资料
                                    </router-link>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="user-banner-control">
                    <el-row :gutter="20">
                        <el-col :span="12" :offset="9">
                            <ul class="user-level-ul">
                                <li><a>我的帖子</a></li>
                                <li><a>我的收藏</a></li>
                            </ul>
                            <ul class="user-banner-button">
                                <follow-button></follow-button>
                                <user-message></user-message>
                            </ul>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>

        <user-post></user-post>

    </div>
</template>
<script>
    import SiteHeader from '../common/SiteHeader'
    import UserMessage from '../Message/UserMessage'
    import FollowButton from '../follow/FollowButton'
    import UserPost from '../posts/UserPost'
    export default{
        data(){
            return{
                user:null,
                showCount:null,
            }
        },
        created(){
            this.fetchData()
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'fetchData'
        },
        methods:{
            fetchData(){
                let userId = this.$route.params.id
                this.axios.post('http://localhost:8000/api/user/'+userId+'/account').then(response => {
                    if(response.data.status){
                          this.user = response.data.user
                          this.showCount = response.data.showCount
                    }
                    console.log("this account user name = "+this.user.name)
                })
            }
        },
        components:{
            SiteHeader,
            'follow-button':Follow,
            'user-message':UserMessage,
            'user-post':UserPost
        }
    }

</script>
