<template>
    <div id="start">
        <site-header></site-header>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import SiteHeader from './common/SiteHeader'
    export default{
        name:'start',
        data() {
          return {
             msg: 'Welcome to Your Vue.js App'
          }
        },
        components:{
           SiteHeader
        }
    }

</script>
