<template>
        <div class="comment">
            <form class="ui reply form">
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
                    <a class="reply active pull-right">回复</a>
                </div>
                <form class="ui reply form">
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
</template>

<script>
    export default{
        data(){
            return{
                   textarea:''
            }
        },
        components:{

        }
    }

</script>
