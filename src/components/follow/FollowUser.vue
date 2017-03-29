<template>
    <li id="follow">
        <button
                class="ui button"
                v-bind:class="{'green':followed}"
                v-text="text"
                @click="follow(z)"
        >
            <i class="user icon"></i>关注他
        </button>
    </li>
</template>

<script>
    import { mapActions } from 'vuex'
    export default{
        props:['followedId'],
        data(){
            return{
                followed:false
            }
        },
        computed: {
            text(){
                return this.followed ? '已关注' : '关注他';
            }
        },
        methods:{
        ...mapActions(['USER_FOLLOW']),
            follow(){
                let userId = this.$store.state.user.id
                let followedId = this.followedId
                console.log("user id = "+userId+" / "+followedId)
                this.USER_FOLLOW(this.followed)
                console.log("account followed =  "+this.followed)
            }
        },
        components:{

        }
    }
</script>

