<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="分类">
      <el-select v-model="form.type" placeholder="请选择分类">
        <el-option label="原创" value="原创"></el-option>
        <el-option label="转载" value="转载"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="标签">
      <el-select v-model="form.tag" placeholder="请选择标签">
        <el-option label="HTML&CSS" value="HTML&CSS"></el-option>
        <el-option label="JavaScript" value="JavaScript"></el-option>
        <el-option label="Node" value="Node"></el-option>
        <el-option label="Vue&React" value="Vue&React"></el-option>
        <el-option label="other" value="other"></el-option>
      </el-select>
    </el-form-item>
    <RichText :value="form.context" ref="richText"></RichText>
    <el-form-item label="封面"></el-form-item>
    <Upload @uploadSuccess="uploadSuccess"></Upload>
    <el-form-item label="内容"></el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('form')">提交666</el-button>
      <el-button type="primary" @click="onSubmit('form')">提交666</el-button>
    </el-form-item>
1  </el-form>
</template>

<script>
import Upload from "./Upload.vue";
import RichText from "./RichText.vue";
// import { postArticle } from "../../api/";
// console.log(postArticle);

export default {
  name: "Add",
  data() {
    return {
      form: {
        name: "",
        type: "",
        title: "",
        tag: "",
        surface: ""
      },
      rules: {
        type: [{ required: true, message: "请选择type" }],
        title: [{ required: true, message: "请输入title" }],
        tag: [{ required: true, message: "请输入tag" }],
        content: {
          validator: (rule, value, cb) => {
            (function() {
              if (this.layedit.getContent(this.index)) {
                cb();
              } else {
                cb(new Error("请输入文章内容！"));
              }
            }.call(this.$refs.richText));
          },
          required: true
        }
      }
    };
  },

  components: {
    Upload,
    RichText
  },
  methods: {
    uploadSuccess(url) {
      this.form.surface = url;
    },
    test() {
      console.log(this);
    },
    onSubmit(formName) {
console.log(formName,'fff')

// console.log(666);
      // console.log(666,this.refs[formName])
      // console.log(this.$refs[formName]);
      this.$refs[formName].validate(valid => {
        // console.log(valid)
         if (valid) {

            this.$emit("handleSubmit", {
              type: this.form.type,
              title: this.form.title,
              tag: this.form.tag,
              surface: this.form.surface,
              content: (function () {
                return this.layedit.getContent(this.index);
              }).call(this.$refs.richText)
            });

          } else {
            return false;
          }
      });

    }
  }

  //   mounted:{
  //       a(){
  //           test()
  //       }
  //   }
};
</script>

<style>
</style>
