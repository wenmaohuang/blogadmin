<template>
  <div class="edit">
    <textarea id="edit" style="display: none;"></textarea>
    <!-- <button type="button" @click="handleClick" class="layui-btn">提交</button> -->
  </div>
</template>
<script src="../../public/layui/layui.js"></script>

<script>
export default {
  name: "RichText",
  data() {
    return {
      layedit: null,
      index: 0
    };
  },
  methods: {
    handleClick() {
      // layedit.getContent(this.index);
      // console.log("1");
      // this.$emit("Sub", this.layedit.getContent(this.index));
      // console.log(this.layedit.getContent(this.index))
    }
  },
  mounted() {
    layui.use("layedit", () => {
      this.layedit = layui.layedit;
      this.index = this.layedit.build("edit", {
        tool: ["face"]
      }); //建立编辑器
    });
  }
};
</script>

<style lang='less'>
.layui-layedit {
  border-color: transparent;
}
</style>
<style lang="less">
@media only screen and (max-width: 500px) {
  .layui-layer {
    left: 0 !important;
  }
}
</style>
