<template>
    <div class="content-body">
        <div class="container-fluid">
            <div style="cursor: pointer" @click="test">test</div>
            <div class="row">
                <div v-for="group in tools" :key="group.title" class="col-md-12">
                    <a-divider orientation="left">{{ group.title }}</a-divider>

                    <div class="row">
                        <div
                            v-for="tool in group.children"
                            :key="tool.key"
                            class="col-xs-12 col-sm-6 col-md-4 col-xl-4 col-lg-3 mb-5"
                        >
                            <a-card
                                @click="$router.push(`/tools/${tool.key}`)"
                                hoverable
                                size="small"
                                :title="tool.name"
                            >
                                <template #extra><a href="#">more</a></template>
                                <div class="tool-content">
                                    <div class="row">
                                        <div class="col-md-6 icon-box">
                                            <img :src="tool.icon" alt="" />
                                        </div>
                                        <div class="col-md-6">
                                            <p>{{ tool.describe }}</p>
                                        </div>
                                    </div>
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
import System from "@/models/system"
import language from "@/utils/language"
export default {
    name: "index",
    setup() {
        const store = useStore()

        let tools = store.getters.allTools

        const test = () => {
            System.insert(language[0]).then(res => {
                console.log(res)
            })
        }

        return {
            tools,
            test
        }
    }
}
</script>

<style lang="scss" scoped>
.tool-content {
    height: 100px;
    width: 100%;

    .icon-box {
        display: flex;
        align-items: center;
        height: 100px;
    }
    img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }

    p {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
    }
}
</style>
