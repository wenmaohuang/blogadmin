<template>
  <div>
    <el-container>
      <el-aside>
        <Menu></Menu>
      </el-aside>
      <el-main>
        <MainNav></MainNav>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Menu from '../../src/components/Menu'
import MainNav from '../../src/components/MainNav'

export default {
  name:'admin',
  components:{
    Menu,
    MainNav
  }
};
</script>

<style lang='less'>
.el-container{
.el-aside{
  width: 200px !important;
  height: 100vh;
  
}
.el-main{
  padding: 0;
}
}

</style>