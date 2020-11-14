<template>
    <div class="content-body">
        <div class="container-fluid">
            <keep-alive><component :is="$route.params.name"></component></keep-alive>
        </div>
    </div>
</template>

<script>
import SqlStruct from "@/views/pages/tools/components/sql2struct"
import JsonStruct from "@/views/pages/tools/components/json2struct"
export default {
    name: "detail",
    components: {
        SqlStruct,
        JsonStruct
    }
}
</script>
