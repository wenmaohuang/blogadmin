<template>
    <div>
        管理
        <Delete @handleSubmit="handleSubmit" :default-data="{}"></Delete>
        <!-- <Edit @handleSubmit="handleSubmit" :default-data="{}">aaa</Edit> -->
    </div>
</template>

<script>
import Delete from "../../../src/components/Delete";
import Edit from "../../../src/components/Edit";
import fyyd from "../../../api/fyyd";

const postArticleDel = fyyd.postArticleDel;

export default {
    name: "Manager",
    data() {
        return {};
    },
    components: {
        Delete,
        Edit
    },
    methods: {
        handleSubmit(data) {
            this.fullscreenLoading = true;
            console.log("111");

            postArticleDel(data)
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
        }
    }
};
</script>

<style>
</style>