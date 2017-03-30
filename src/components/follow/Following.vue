<template>
    <div id="following">
        <site-header></site-header>
        <div class="wrapper">
            <div class="panel-page follow-page">
                <el-row :gutter="20">
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :offset="6">
                        <h2 class="ui header">
                            <div class="content">关注列表</div>
                        </h2>
                        <div class="ui cards stackable one column grid">
                            <div class="card column" v-for="(following,index) in followings">
                                <div class="content">
                                    <img class="right floated mini ui image" :src="following.avatar">
                                    <div class="header">{{ following.name }}</div>
                                    <div class="meta">{{following.followers_count}}个关注者</div>
                                    <div class="description">{{following.profile.description}}</div>
                                </div>
                                <div class="extra content user-follow-footer">
                                    <div class="user-follow-footer-panel">
                                        <router-link :to="{name: 'account',params: { id:following.id }}">
                                            <i class="student icon"></i> 主页
                                        </router-link>
                                    </div>
                                    <follow-button :followedId="following.id" v-if="following.id !== localUserId"></follow-button>
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
            this.getFollowings()
        },
        computed:{
            followings(){
               return this.$store.state.following
            },
            localUserId(){
                return this.$store.state.user.id
            }
        },
        methods:{
        ...mapActions(['FOLLOWING_GET']),
            getFollowings(){
                let userId =  this.$route.params.id
                this.FOLLOWING_GET(userId)
            }
        },
        components:{
             SiteHeader,
             FollowButton
        }
    }
</script>