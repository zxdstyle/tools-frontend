<template>
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                <div v-for="group in tools" :key="group.title" class="col-md-12">
                    <a-divider orientation="left">{{ group.title }}</a-divider>

                    <div class="row">
                        <div v-for="tool in group.children" :key="tool.name" class="col-md-3 mb-5">
                            <a-card hoverable size="small" :title="tool.name">
                                <template #extra><a href="#">more</a></template>
                                <div class="row">
                                    <div class="col-md-5 icon-box">
                                        <img class="tool-icon" :src="tool.icon" alt="" />
                                    </div>
                                    <div class="col-md-7">
                                        <p>{{ tool.describe }}</p>
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
p {
    padding: 25px;
    width: 200px;
    height: 180px;
    background: url("../../../assets/images/background.png") no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
}

.icon-box {
    display: flex;
    align-items: center;
}

.tool-icon {
    width: 160px;
    height: 150px;
}
</style>
