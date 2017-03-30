<template>
    <div id="follower">
        <site-header></site-header>
        <div class="wrapper">
            <div class="panel-page follow-page">
                <el-row :gutter="20">
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :offset="6">
                        <h2 class="ui header">
                            <div class="content">粉丝列表</div>
                        </h2>
                        <div class="ui cards stackable one column grid">
                            <div class="card column" v-for="(follower,index) in followers">
                                <div class="content">
                                    <img class="right floated mini ui image" :src="follower.avatar">
                                    <div class="header">{{ follower.name }}</div>
                                    <div class="meta">{{follower.followers_count}}个关注者</div>
                                    <div class="description">{{follower.profile.description}}</div>
                                </div>
                                <div class="extra content user-follow-footer">
                                    <div class="user-follow-footer-panel">
                                        <router-link :to="{name: 'account',params: { id:follower.id }}">
                                            <i class="student icon"></i> 主页
                                        </router-link>
                                    </div>
                                    <follow-button :followedId="follower.id"></follow-button>
                                </div>
                            </div>

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
    import FollowButton from '../follow/FollowButton'
    export default{
        data(){
            return{

            }
        },
        mounted(){
            this.getFollowers()
        },
        computed:{
            followers(){
               return this.$store.state.followers
            }
        },
        methods:{
        ...mapActions(['FOLLOWERS_GET']),
            getFollowers(){
                let userId =  this.$route.params.id
                this.FOLLOWERS_GET(userId)
            }
        },
        components:{
             SiteHeader,
             FollowButton
        }
    }
</script>
