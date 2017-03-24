<template>
    <div id="comment">
        <div class="comment">
            <a class="avatar">
                <img :src="comment.user.avatar">
            </a>
            <div class="content">
                <a class="author">{{ comment.user.name }}</a>
                <span class="author-reply" v-if="comment.to_user_id">回复</span>
                <a class="author" v-if="comment.to_user_id">{{ comment.to_user.name }}</a>
                <div class="text">{{ comment.body }}</div>
                <div class="actions">
                    <div class="metadata">
                        <div class="date">2 days ago</div>
                    </div>
                    <a
                            class="reply active pull-right comment-reply-btn"
                            @click="toggle_comment_reply()"
                    >回复</a>
                </div>
                <form class="ui reply form" v-if="show_comment_reply">
                    <div class="field">
                        <el-input
                                type="textarea"
                                autosize
                                :placeholder="reply_to_user"
                                v-model="comment_content">
                        </el-input>
                        <div
                                class="ui primary button pull-right"
                                @click="comment_reply"
                        >回复</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default{
        props:['postId','comment','comments'],
        data(){
            return{
               show_comment_reply:false,
               comment_data:{
                'post_id':0,
                'user_id':0,
                'to_user_id':0,
                'to_comment_id':0,
                'body':'',
               },
               comment_content:'',
               reply_to_user:"回复"+this.comment.user.name+":"
            }
        },
        methods:{
            ...mapActions(['COMMENT_CREATE']),
            toggle_comment_reply(){
                this.show_comment_reply = !this.show_comment_reply
            },
            comment_reply(){
                this.$store.state.newComment.post_id = this.postId
                this.$store.state.newComment.to_comment_id = this.comment.id
                this.$store.state.newComment.to_user_id = this.comment.user.id
                this.$store.state.newComment.body = this.comment_content
                this.COMMENT_CREATE(this.comments)
                this.show_comment_reply = false
                this.comment_content = ''
            },
        },
        components:{

        }
    }




</script>
