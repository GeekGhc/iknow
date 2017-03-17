<template>
    <div id="comment">
        <div class="comment">
            <form class="ui reply form" v-if="show_post_comment">
                <div class="field">
                    <el-input
                            type="textarea"
                            autosize
                            placeholder="回复JellyBean:"
                            v-model="textarea">
                    </el-input>
                    <div class="ui primary button pull-right">回复</div>
                </div>
            </form>

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
                            class="reply active pull-right"
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
                        <div class="ui primary button pull-right">回复</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
               show_post_comment:false,
               show_comment_reply:false,
               textarea:''
            }
        },
        methods:{
            toggle_comment_reply(){
                this.show_comment_reply = !this.show_comment_reply
            },
            toggle_post_comment(){
                this.show_post_comment = !this.show_post_comment
            },
            printInfo(info){
                console.log("info has printed...."+info)
            }
        },
        components:{

        }
    }


</script>
