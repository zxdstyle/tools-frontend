<template>
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                <div v-for="group in tools" :key="group.title" class="col-md-12">
                    <a-divider orientation="left">{{ group.title }}</a-divider>

                    <div class="row">
                        <div v-for="tool in group.children" :key="tool.key" class="col-md-3 mb-5">
                            <a-card
                                @click="$router.push(`/tools/${tool.key}`)"
                                hoverable
                                size="small"
                                :title="tool.name"
                            >
                                <template #extra><a href="#">more</a></template>
                                <div class="tool-content" :style="'background-image: url(' + tool.icon + ')'">
                                    <p>{{ tool.describe }}</p>
                                </div>
                            </a-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex"
export default {
    name: "index",
    setup() {
        const store = useStore()

        let tools = store.getters.allTools

        return {
            tools
        }
    }
}
</script>

<style lang="scss" scoped>
.tool-content {
    height: 100px;
    width: 100%;
    background-position: left top;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;

    p {
        height: 100%;
        width: 60%;
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
    }
}
</style>
