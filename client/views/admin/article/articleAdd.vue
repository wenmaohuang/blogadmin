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
import fyyd from "../../../api/fyyd"
const postArticle = fyyd.postArticle;
import Add from "../../../src/components/Add"


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
          // console.log(req,'lll',res,'kkkk');
          
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
        // console.log(data.req,555);
      }
    },
  }

</script>

<style scoped>

</style>
