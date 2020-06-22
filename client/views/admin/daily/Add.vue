<template>
    <div id="daily">
        日記
        <!-- 输入发表内容: <el-input></el-input> -->
        <el-form ref="form" :model="form">
            输入发表内容:
            <textarea name id cols="30" rows="10" v-model="form.content" value="form.content"></textarea>
        </el-form>
        <el-button @click="handleSubmit()">提交</el-button>
    </div>
</template>

<script>
import fyyd from "../../../api/fyyd";
const postDaily = fyyd.postDaily;

export default {
    name: "Add",
    data() {
        return {
            form: {
                content: "aa",
                time: "111"
            }
        };
    },
    methods: {
        handleSubmit() {
            // console.log(data)
            this.form.time = new Date().getFullYear() +
                "年" +
                (new Date().getMonth() + 1) +
                "月" +
                new Date().getDate() +
                "日" +
                new Date().getHours() +
                "时" +
                new Date().getMinutes() +
                "分" +
                new Date().getSeconds() +
                "秒"

            console.log(this.form.time, 111);
            postDaily(this.form)
                .then(res => {
                    // res.send({
                    //   code:0
                    // })
                })
                .catch(() => {
                    // res.send({
                    //   code:1
                    // })
                });
        }
    },
    mounted() {
        // console.log(this,111)
        console.log(
            new Date().getFullYear() +
                "年" +
                (new Date().getMonth() + 1) +
                "月" +
                new Date().getDate() +
                "日" +
                new Date().getHours() +
                "时" +
                new Date().getMinutes() +
                "分" +
                new Date().getSeconds() +
                "秒",
            111,this.form
        );
    }
};
</script>

<style>
</style>