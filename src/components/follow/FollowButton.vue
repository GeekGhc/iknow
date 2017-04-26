<template>
    <button
            class="ui button pull-right"
            v-text="text"
            @click="followUser(follow)"
    >
        Follow
    </button>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapMutations } from 'vuex'
    export default{
        props:['followedId'],
        data(){
            return{
                follow:{
                    isFollowed:false
                }
            }
        },
        mounted(){
            this.isFollow()
        },
        computed: {
            text(){
                return this.follow.isFollowed ? 'UnFollow' : 'Follow';
            }
        },
        methods:{
        ...mapActions(['USER_FOLLOW']),
            //用户关注
            followUser(follow){
                let userId = this.$store.state.user.id
                let followedId = this.followedId
                this.USER_FOLLOW({userId,followedId,follow})
            },
            //用户是否关注了这个用户
            async isFollow(){
                let userId = this.$store.state.user.id
                let followedId = this.followedId
                const response = await fetch(`http://localhost:8000/api/user/${userId}/follow/${followedId}`)
                this.follow.isFollowed =  Boolean(await response.json())
            }
        },
        components:{

        }
    }
</script>
