<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(i,index) in getRouters" :to="{path:'/'}" :key="index">{{i.meta.cnName}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.meta.cnName}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "MaiNav",
  computed: {
    getRouters() {
      let arr = [...this.$route.matched];
      arr.pop();
      return arr;
    }
  },
  watch: {
    $route(router) {
      // console.log(router);
    }
  },
  methods: {
    
  }
};
</script>

<style>
.el-breadcrumb{
  padding: 20px;
  background-color: #387;
}
</style>