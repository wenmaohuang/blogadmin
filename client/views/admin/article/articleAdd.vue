`<template>
  <div>
    <Add
        @handleSubmit="handleSubmit"
        v-loading.fullscreen.lock="fullscreenLoading"
        :default-data="{}"
    ></Add>
  </div>
</template>

<script>
  // import {postArticle} from "../../../api";
import request from "../../../api";
const postArticle = request.postArticle;


import Add from "../../../src/components/Add"
// import { log } from 'util';

  export default {
    name: "ArticleAdd",
    components:{Add},
    data(){
      return {
        fullscreenLoading : false
      }
    },
    methods:{
      handleSubmit(data){
        this.fullscreenLoading = true;
        
        postArticle(data).then((req,res)=>{
          console.log(req,'lll',res,'kkkk');
          
          this.$message({
            message: "上传成功"+JSON.stringify(req),
            type: 'success',
            duration : 200000
          });
          setTimeout(()=>{
            this.fullscreenLoading = false;
            window.location.reload();
          },300000)
        }).catch(()=>{
          this.$message({
            message: "上传失败",
            type: 'error',
            duration : 2000
          });
        })
        console.log(data.req,555);
      }
    },

    // beforeRouteLeave(to,from,next){
    //   this.$confirm('此操作将不会保存已编写的文章内容, 是否继续?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning',
    //     center: true
    //   }).then(() => {
    //     next();
    //   }).catch(() => {

    //   });
    // }
  }

</script>

<style scoped>

</style>
