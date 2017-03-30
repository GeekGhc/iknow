<template>
    <li id="follow">
        <button
                class="ui button"
                v-bind:class="{'green':follow.isFollowed}"
                v-html="text"
                @click="followUser(follow)"
        >
            <i class="user icon"></i>关注他
        </button>
    </li>
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
                return this.follow.isFollowed ? '<i class="user icon"></i>已关注' : '<i class="user icon"></i>关注他';
            }
        },
        methods:{
         ...mapActions(['USER_FOLLOW']),
            //用户关注
            followUser(follow){
                let userId = this.$store.state.user.id
                let followedId = this.followedId
                console.log("user id = "+userId+" / "+followedId)
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
