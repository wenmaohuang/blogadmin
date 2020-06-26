<template>
  <el-upload
  class="avatar-uploader"
  action="http://www.fyyd.vip/upload/articleSurface"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload"
  >
<img v-if="imgUrl" class="avatar" :src="imgUrl" alt="">
<i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
</template>

<script>
export default {
    name:"Upload",
    data(){
        return {
            imgUrl:""
        }
    },
    methods:{
        handleAvatarSuccess(res,file){
            this.$emit('uploadSuccess',res.surface)
            console.log(res)
            console.log(file)
            this.imgUrl = URL.createObjectURL(file.raw)
        },
        beforeAvatarUpload(file){
            
            const isType = /^(image\/jpeg|image\/png|image\/gif)$/.test(file.type)
console.log(isType)
        if(!isType){
            this.$message.error('上传图片只能jpeg png gif格式')
        }
        return isType
    }
}
}
</script>

<style>

</style>
