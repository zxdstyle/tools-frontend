<template>
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-3 col-md-4">
                    <left-side></left-side>
                </div>
                <div class="col-xl-9 col-md-8">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LeftSide from "@/views/pages/setting/components/LeftSide"
export default {
    name: "index",
    components: {
        LeftSide
    }
}
</script>

<style scoped></style>
