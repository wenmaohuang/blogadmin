<template>
  <div class="delete">
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-select v-model="article.title">
          <el-option :label="i.title" :value="i.title" v-for="(i,index) in article" :key="index"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button @click="onSubmit('form');test()">删除文章</el-button>
  </div>
</template> 

<script>
import { log } from "util";
import fyyd from "../../api/fyyd";


const getArticleShow = fyyd.getArticleShow;

export default {
  name: "delete",
  data() {
    return {
      form: {
        title: ''
      },
      article: {
        title:''
      }
    };
  },
computed: {
  msg(){
    let ccc = this.article.title
    return ccc
  }
},
  methods: {
    onSubmit(formName) {
      console.log(formName, "fff");
      this.$refs[formName].validate(valid => {
        // console.log(valid)
        if (valid) {
          this.$emit("handleSubmit", {
            title: this.article.title,
           
          });
        } else {
          return false;
        }
      });
    },
    test(){
      console.log(this.form,'ppp');
      
    }
  },
  mounted() {
    getArticleShow().then(res => {
      this.article = res.data.data;
      // this.form = res.data.data
      console.log(this.article);
    });
  }
};
</script>

<style>
</style>