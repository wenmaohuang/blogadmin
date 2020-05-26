<template>
  <el-row class="tac">
        <el-col :span="12">
          <!-- <h5>自定义颜色</h5> -->
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            :default-active="$route.path"
          >
            <el-submenu index="article" >
              <template slot="title">
                <i class="iconfont icon-24"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item index="/articleAdd">发表文章</el-menu-item>
              <el-menu-item index="/articleManager">管理文章</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="iconfont icon-yonghu"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="2-1">权限管理</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="iconfont icon-rizhi"></i>
                <span>日志管理</span>
              </template>
              <el-menu-item index="3-1">发表日记</el-menu-item>
              <el-menu-item index="3-1">删除日记</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="iconfont icon-liuyan"></i>
                <span>留言管理</span>
              </template>
              <el-menu-item index="4-1">发表留言</el-menu-item>
              <el-menu-item index="4-1">删除删除</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
</template>

<script>
export default {
  name:'Menu',
 methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang='less'>
.el-row{
  width: 100%;
  text-align: center;
  .el-col{
    width: 100%;
    .el-manu{
      width:100%;
      .el-submenu{
        width: 100%;
        .el-menu-item{
          width: 100%;
        }
      }
    }

  }
}
</style>