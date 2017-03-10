<template>
    <div id="collect">
        <site-header></site-header>
        <div class="wrapper">
            <div class="collect-page">
                <h1>这是收藏页面</h1>
            </div>
        </div>
    </div>
</template>
<script>
    import SiteHeader from '../common/SiteHeader'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
             SiteHeader
        }
    }
</script>
