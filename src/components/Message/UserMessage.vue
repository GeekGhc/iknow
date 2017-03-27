<template>
    <li id="userMessage">
    <button class="ui button" data-toggle="modal" data-target="#myModal">发私信</button>
    <div class="modal fade" tabindex="-1" role="dialog" id="myModal" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">发送私信</h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="message-text" class="control-label">To JellyGavin:</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary">发送</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    </li>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        }
    }
</script>
