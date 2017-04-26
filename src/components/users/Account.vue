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
                                    <p v-if="user"><i class="fa fa-location-arrow fa-icon-sm"></i> {{ user.profile.city }}</p>
                                    <p class="user-account-link" v-if="user"><i class="fa fa-link fa-icon-sm"></i> <a target="_blank" :href="user.profile.site">{{user.profile.site}}</a></p>
                                    <p v-if="user">{{ user.profile.description }}</p>
                                    <ul class="user-info-ul">
                                        <router-link
                                                tag="li"
                                                :to="{ name: 'posts'}"
                                        >
                                            <a href="#" v-if="showCount">
                                                <span>{{ showCount.posts_count }}</span>
                                                帖子
                                            </a>
                                        </router-link>
                                        <router-link
                                                tag="li"
                                                :to="{ name: 'following', params: { id:userId }}"
                                        >
                                            <a href="#" v-if="showCount">
                                                <span>{{ showCount.following_count }}</span>
                                                关注者
                                            </a>
                                        </router-link>
                                        <router-link
                                                tag="li"
                                                :to="{ name: 'followers', params: { id:userId }}"
                                        >
                                            <a href="#" v-if="showCount">
                                                <span>{{ showCount.followers_count }}</span>
                                                粉丝
                                            </a>
                                        </router-link>
                                        <router-link
                                                tag="li"
                                                :to="{ name: 'collect'}"
                                        >
                                            <a href="#" v-if="showCount">
                                                <span>{{ showCount.collect_count }}</span>
                                                收藏
                                            </a>
                                        </router-link>
                                    </ul>
                                    <router-link
                                            :to="{name: 'profile'}"
                                            class="modify-profile"
                                            v-if="localUserId !== userId"
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
                            <div class="user-level-ul">
                                <a>最新动态</a>
                            </div>
                            <ul class="user-banner-button">
                                <follow-user :followedId="userId" v-if="localUserId !== userId"></follow-user>
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
    import FollowUser from '../follow/FollowUser'
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
        computed:{
            userId(){
                return this.$route.params.id
            },
            localUserId(){
                return this.$store.state.user.id
            }
        },
        methods:{
            fetchData(){
                let userId = this.$route.params.id
                this.axios.post('http://localhost:8000/api/user/'+userId+'/account').then(response => {
                    if(response.data.status){
                          this.user = response.data.user
                          this.showCount = response.data.showCount
                    }
                })
            }
        },
        components:{
            SiteHeader,
            'follow-user':FollowUser,
            'user-post':UserPost
        }
    }

</script>
