<template>
    <div>
        <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form" ref="form">
                <!-- <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item> -->
                <el-form-item label="分类" :label-width="formLabelWidth">
                    <el-select v-model="form.type" :placeholder="type">
                        <el-option label="原创" value="原创"></el-option>
                        <el-option label="转载" value="转载"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="标题">
                    <!-- <el-input type='text'></el-input> -->
                    <el-input v-model="title" autocomplete="off"></el-input>

                </el-form-item>
                <el-form-item label="标签">
                    <el-select v-model="form.tag" :placeholder="tag">
                        <el-option label="HTML&CSS" value="HTML&CSS"></el-option>
                        <el-option label="JavaScript" value="JavaScript"></el-option>
                        <el-option label="Node" value="Node"></el-option>
                        <el-option label="Vue&React" value="Vue&React"></el-option>
                        <el-option label="other" value="other"></el-option>
                    </el-select>
                </el-form-item>
                <RichTextEdit :value="form.context" ref="RichTextEdit" :content="content"></RichTextEdit>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false;onSubmit('form')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import fyyd from "../../api/fyyd";
import RichTextEdit from "./RichTextEdit";
const getArticle = fyyd.getArticleTitle;
export default {
    components: {
        RichTextEdit
    },
    data() {
        return {
            gridData: [],
            dialogTableVisible: false,
            dialogFormVisible: false,
            typeVal:this.type,
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
            },
            formLabelWidth: "120px",
            // layedit: null,
            // index: 0,
            // tableData: {}
        };
    },
    mounted() {
        getArticle()
            .then((req, res) => {
                this.tableData = req.data.data;
            })
            .catch(err => {});
    },
    props: ["title", "tag", "content","type"],
    created() {
        console.log(this,'222')
    },
    methods: {
        onSubmit(formName) {
            
            this.form.type = this.form.type ? this.form.type : this.type
            this.form.title = this.form.title ? this.form.title : this.title
            this.form.tag = this.form.tag ? this.form.tag : this.tag
            this.form.content = this.form.content ? this.form.content : this.content
            this.form.surface = this.form.surface ? this.form.surface : this.surface
            // console.log(this.form.type,444)
           
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.$emit("handleSubmit", {
                        type: this.form.type,
                        title: this.form.title,
                        tag: this.form.tag,
                        surface: this.form.surface,
                        content: function() {
                            return this.layedit.getContent(this.index);
                        }.call(this.$refs.RichTextEdit)
                    });
                } else {
                    return false;
                }
            });
        }
    }
};
</script>
<style lang="less">
.el-dialog {
    background-color: #123;
}
</style>