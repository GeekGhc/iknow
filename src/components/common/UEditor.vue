<template>
    <div id="ueditor">
        <div ref="editor" id="editor" name="content"></div>
    </div>
</template>
<script>
    import '../../../static/ueditor/ueditor.config.js'
    import '../../../static/ueditor/ueditor.all.js'
    import '../../../static/ueditor/lang/zh-cn/zh-cn.js'
    export default{
        data(){
            return{
              edtior: null
            }
        },
        mounted() {
            this.editor = UE.getEditor(this.$refs.editor.id,{
                toolbars: [
                     ['bold', 'italic', 'underline', 'strikethrough', 'blockquote', 'insertunorderedlist', 'insertorderedlist', 'justifyleft','justifycenter', 'justifyright',  'link', 'insertimage', 'fullscreen']
                ],
                zIndex:1,
                initialFrameHeight:250,
                elementPathEnabled: false,
                enableContextMenu: false,
                autoClearEmptyNode:true,
                wordCount:false,
                imagePopup:false,
                autotypeset:{ indent: true,imageBlockLine: 'center' }
            });
        },
        beforeDestroy() {
            if(this.editor) {
            this.editor.destroy();
           }
        },
        components:{
        }
    }
</script>
