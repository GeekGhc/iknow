<template>
    <div id="comment">

        <form class="ui reply form" v-if="show_post_comment">
            <div class="field">
                <el-input
                        type="textarea"
                        autosize
                        placeholder="回复JellyBean:"
                        v-model="comment_content">
                </el-input>
                <div
                        class="ui primary button pull-right"
                        @click="postComment"
                >回复</div>
            </div>
        </form>

        <div class="comment">
            <a class="avatar">
                <img src="../../assets/images/avatars/default/my-avatar.jpg">
            </a>
            <div class="content">
                <a class="author">Steve Jobes</a>
                <div class="text">Revolutionary!</div>
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
                                placeholder="回复JellyBean:"
                                v-model="textarea">
                        </el-input>
                        <div
                                class="ui primary button pull-right"
                                @click="toggle_post_comment"
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
        props:['postId'],
        data(){
            return{
               show_post_comment:false,
               show_comment_reply:false,
               comment_content:'',
               comment_data:{
                'post_id':0,
                'user_id':0,
                'to_user_id':0,
                'to_comment_id':0,
                'body':'',
               }
            }
        },
        methods:{
            ...mapActions(['COMMENT_CREATE']),
            toggle_comment_reply(){
                this.show_comment_reply = !this.show_comment_reply
            },
            toggle_post_comment(){
                this.show_post_comment = !this.show_post_comment
            },
            postComment(){
                this.comment_data.post_id = this.postId
                this.comment_data.body = this.comment_content
                this.COMMENT_CREATE(this.comment_data)
            },
            comment_reply(){

            },
            printInfo(info){
                console.log("info has printed...."+info)
            }
        },
        components:{

        }
    }




</script>
