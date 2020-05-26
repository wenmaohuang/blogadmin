<template>
  <el-upload
  class="avatar-uploader"
  action="https://localhost:3000/upload/article"
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
        imageUrl:""
    }
},
methods:{
    handleAvatarSuccess(res,file){
        this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(type){
        const isType = /^(image\/jpeg|image\/png|image\/gif)$/.test(file.type)
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