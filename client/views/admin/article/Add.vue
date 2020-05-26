<template>
  <el-form ref="form" :model="form" label-width="80px">
     <el-form-item label="分类">
      <el-select v-model="form.tag" placeholder="请选择分类">
        <el-option label="原创" value="原创"></el-option>
        <el-option label="转载" value="转载"></el-option>
       
      </el-select>
    </el-form-item>
    <el-form-item label="标题">
      <el-input v-model="form.name"></el-input>
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
  </el-form>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      form: {
        name: ""
        ,tat:""
      }
    };
  }
};
</script>

<style>
</style>