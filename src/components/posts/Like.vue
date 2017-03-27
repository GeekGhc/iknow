<template>
    <div>
        <a class="feed-item-thumbs" v-bind:class="{'active':isVoted }">
            <i
                    class="fa fa-thumbs-o-up"
                    @click="toggleLikePost"
            ></i>{{vote_count}}
        </a>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default{
        props:['post'],
        data(){
            return{
                isVoted:false,
                vote_count:this.post.vote_count
            }
        },
        mounted(){
            this.hasVoted()
        },
        methods:{
            toggleLikePost(){
                this.axios.post('http://localhost:8000/api/user/post/like',{userId:this.$store.state.user.id,postId:this.post.id}).then(response => {
                        if(response.data.status){
                            this.isVoted = response.data.isVoted
                            console.log("response.data.hasVote  = "+response.data.isVoted)
                            if(response.data.isVoted){
                                console.log("恭喜你 赞了这篇说说")
                                this.vote_count++;
                            }else{
                                this.vote_count--;
                                console.log("恭喜你 你已经取消了赞")
                            }
                        }
                })
            },
            async hasVoted(){
                 var userId = this.$store.state.user.id
                 var postId = this.post.id
                 const response = await fetch(`http://localhost:8000/api/user/${userId}/post/${postId}/like`)
                 this.isVoted = Boolean(await response.json())
                 console.log("this post vote count = "+this.post.vote_count)
            }
        },
        components:{

        }
    }

</script>
