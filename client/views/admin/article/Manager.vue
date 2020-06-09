<template>
  <div>管理jjjjj
    <Delete @handleSubmit="handleSubmit" :default-data="{}"></Delete>
  </div>
</template>

<script>
import Delete from '../../../src/components/Delete'
import fyyd from "../../../api/fyyd";

const postArticleDel = fyyd.postArticleDel;



export default {
name:'Manager',
data(){
return {
  
}
},
components:{
  Delete
},
methods:{
  handleSubmit(data){
        this.fullscreenLoading = true;
        console.log(data,'qqq');
        
       postArticleDel(data).then((req,res)=>{
        console.log(req,'ddd');
        console.log(res,'jjj');
        
         this.$message({
            message: "删除成功",
            type: 'success',
            duration : 2000
          });
          setTimeout(()=>{
            this.fullscreenLoading = false;
            window.location.reload();
          },3000)
        }).catch(()=>{
          this.$message({
            message: "删除失败",
            type: 'error',
            duration : 2000
          });        
      })
    }
}
}
</script>

<style>

</style>