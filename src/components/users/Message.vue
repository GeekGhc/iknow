<template>
    <div id="message">
        <site-header></site-header>
        <div class="wrapper">
            <div class="panel-page">
                <el-row :gutter="20">
                    <el-col :span="12" :offset="6">
                        <div class="panel-header">
                            <div class="ui big breadcrumb">
                                <a class="section">首页</a>
                                <i class="right chevron icon divider"></i>
                                <div class="active section">消息通知</div>
                            </div>
                            <span>消息通知</span>
                        </div>

                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import { mapActions } from 'vuex'
    import SiteHeader from '../common/SiteHeader'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
             SiteHeader,
        }
    }

</script>
