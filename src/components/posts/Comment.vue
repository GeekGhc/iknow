<template>
    <div id="comment">
        <div class="comment">
            <a class="avatar">
                <img :src="comment.user.avatar">
            </a>
            <div class="content">
                <a class="author">{{ comment.user.name }}</a>
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
                                v-model="textarea">
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
        props:['postId','comment'],
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
               textarea:'',
               reply_to_user:"回复"+this.comment.user.name+":"
            }
        },
        methods:{
            ...mapActions(['COMMENT_CREATE']),
            toggle_comment_reply(){
                this.show_comment_reply = !this.show_comment_reply
            },
            comment_reply(){

            },
        },
        components:{

        }
    }




</script>
