<template>
  <!--  <el-botton>delete</el-botton>-->

  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="日期" width="180">
      <template slot-scope="scope" v-show="ifShow">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="姓名" width="180">
      <template slot-scope="scope" v-show="ifShow">
        <p>id: {{ scope.row._id }}</p>

        <!--        <el-popover trigger="hover" placement="top">-->
        <!--          <p>姓名: {{ scope.row.name }}</p>-->
        <!--          <p>住址: {{ scope.row.address }}</p>-->
        <!--          <div slot="reference" class="name-wrapper">-->
        <!--            <el-tag size="medium">{{ scope.row.name }}</el-tag>-->
        <!--          </div>-->
        <!--        </el-popover>-->
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope" v-show="ifShow">

        <p v-for="item in tableData" v-html="scope.row.content"></p>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import fyyd from "../../../api/fyyd";
// import api from "../../api"
const getArticle = fyyd.getArticleTitle;
const getMessage = fyyd.getMessage
const postMessageDel = fyyd.postMessageDel
const postArticleUpdate = fyyd.postArticleUpdate;


// import Edit from "./Edit";
export default {
  data() {
    return {
      ifShow: true,
      tableData: [],
      index: "",
      title: "",
      tag: "",
      type: "",
      content: ""
    };
  }, // components: { Edit },
  watch: {
    tableData() {}
  },

  methods: {
    handleEdit(index, row) {
      this.index = index;
      this.title = row.title;
      this.tag = row.tag;
      this.type = row.type
      this.content = row.content;
    },
    handleDelete(index, row) {
      this.ifShow = false;
      // this.$emit("handleSubmit", {
      //   id: row._id
      // });

      postMessageDel({id:row._id})
          .then((req, res) => {
            this.$message({
              message: "删除成功",
              type: "success",
              duration: 2000
            });
            setTimeout(() => {
              this.fullscreenLoading = false;
              // window.location.reload();
            }, 3000);
          })
          .catch(() => {
            this.$message({
              message: "删除失败",
              type: "error",
              duration: 2000
            });
          });
    },
    handleSubmit(data) {
      this.fullscreenLoading = true;
      console.log("111", data);

      postArticleUpdate(data)
          .then((req, res) => {
            this.$message({
              message: "修改成功",
              type: "success",
              duration: 2000
            });
            setTimeout(() => {
              this.fullscreenLoading = false;
              // window.location.reload();
            }, 3000);
          })
          .catch(() => {
            this.$message({
              message: "修改失败",
              type: "error",
              duration: 2000
            });
          });
    }
  },
  mounted() {
    console.log(this, 333, this.title);
  },
  created() {

    getMessage()
        .then((res) => {


          this.tableData = res.data.data;
          console.log(res.data.data, ',.');
        })
        .catch(err => {

          console.log(err, './');
        });
    // getArticle()
    //     .then((req, res) => {
    //       this.tableData = req.data.data;
    //     })
    //     .catch(err => {});
  }
};
</script>

<style>

</style>


<!--<script>-->

<!--</script>-->