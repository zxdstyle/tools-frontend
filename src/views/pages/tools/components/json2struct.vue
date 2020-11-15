<template>
    <div class="row">
        <div class="col-md-6">
            <a-textarea
                @change="onJsonChange"
                v-model:value="formData.jsonStr"
                placeholder="请输入合法的JSON格式数据"
                autoSize
            />

            <a-form :model="formData" class="mt-5">
                <a-form-item label="包名">
                    <a-input @change="onJsonChange" v-model:value="formData.pkgName" />
                </a-form-item>
                <a-form-item label="结构体名称">
                    <a-input @change="onJsonChange" v-model:value="formData.modelName" />
                </a-form-item>
            </a-form>
        </div>
        <div class="col-md-6">
            <a-textarea v-model:value="structStr" placeholder="这里是Golang Struct结构体" autoSize />
        </div>
    </div>
</template>

<script>
import { throttle } from "lodash"
import { ref, reactive, getCurrentInstance } from "vue"
import Tools from "@/models/tools"
export default {
    name: "json-struct",
    setup() {
        let structStr = ref("")
        const { ctx } = getCurrentInstance()
        let formData = reactive({
            pkgName: "model",
            modelName: "Test",
            jsonStr: `{
    "username": "devtool",
    "age": 2,
    "url": "http://www.devtool.com",
    "title": "好用的在线开发工具"
}
`
        })

        const json2struct = () => {
            Tools.json2struct(formData).then(res => {
                structStr.value = res.data
                ctx.$message.success("转换成功")
            })
        }

        const onJsonChange = throttle(() => json2struct(), 500)

        json2struct()

        return {
            formData,
            onJsonChange,
            structStr
        }
    }
}
</script>

<style scoped></style>
