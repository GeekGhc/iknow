<template>
    <div id="message">
        <site-header></site-header>
        <div class="wrapper">
            <div class="panel-page">
                <el-row :gutter="20">
                    <el-col :span="12" :offset="6">
                        <div class="panel-header">
                            <div class="ui big breadcrumb">
                                <a class="section">首页</a>
                                <i class="right chevron icon divider"></i>
                                <div class="active section">消息通知</div>
                            </div>
                            <span>消息通知</span>
                            <button class="ui button teal message-read-btn" @click="markAsRead">标记全部已读</button>
                        </div>
                        <div class="list-form">
                            <div class="empty empty-wrapper" v-if="!messages">
                                <i>╮(╯∀╰)╭</i>
                                <span class="empty-tips">你还没有消息哦</span>
                            </div>

                            <ul class="collect-list" v-if="messages">
                                <li class="collect-post-item" v-for="(message,index) in messages">
                                    <div class="message-info" v-if="message.data.type === 'follow'">
                                        <div class="pull-left"><a>{{message.data.name}}</a>关注了你</div>
                                    </div>
                                    <div class="message-info" v-if="message.data.type === 'comment'">
                                        <div class="pull-left"><a>{{message.data.name}}</a> 评论了你的帖子 <router-link
                                                :to="{ name: 'show', params: { id:message.data.id }}"
                                        >
                                            {{ message.data.title }}
                                        </router-link></div>
                                    </div>
                                    <div class="message-info" v-if="message.data.type === 'like'">
                                        <div class="pull-left"><a>{{message.data.name}}</a> 赞了你的帖子 <router-link
                                                :to="{ name: 'show', params: { id:message.data.id }}">
                                            {{ message.data.title }}
                                        </router-link></div>
                                    </div>
                                    <div class="message-info" v-if="message.data.type === 'collect'">
                                        <div class="pull-left"><a>{{message.data.name}}</a> 收藏了你的帖子 <router-link
                                                :to="{ name: 'show', params: { id:message.data.id }}"
                                        >
                                            {{ message.data.title }}
                                        </router-link></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import { mapActions } from 'vuex'
    import SiteHeader from '../common/SiteHeader'
    export default{
        data(){
            return{

            }
        },
        computed:{
            messages(){
                return this.$store.state.messages
            }
        },
        mounted(){
            this.getMessages()

        },
        methods:{
        ...mapActions(['NOTIFY_MESSAGE_GET','MARK_NOTIFY_MESSAGE']),
            getMessages(){
                let userId = this.$store.state.user.id
                this.NOTIFY_MESSAGE_GET(userId)
            },
            markAsRead(){
                let userId = this.$store.state.user.id
                console.log("user id = "+userId)
                this.MARK_NOTIFY_MESSAGE(userId)
            }
        },
        components:{
             SiteHeader,
        }
    }


</script>
