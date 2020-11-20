<template>
    <div class="content-body">
        <div class="container-fluid">
            <a-divider orientation="left">按钮颜色</a-divider>
            <div class="row">
                <div class="col-md-1" v-for="btn in fillBtn" :key="btn">
                    <a-button :type="btn">{{ btn }}</a-button>
                </div>
            </div>

            <a-divider orientation="left">Disabled</a-divider>
            <div class="row">
                <div class="col-md-1" v-for="btn in fillBtn" :key="btn">
                    <a-button :type="btn" disabled>{{ btn }}</a-button>
                </div>
            </div>

            <a-divider orientation="left">按钮组合</a-divider>
            <div class="row">
                <div class="col-md-2">
                    <a-button-group>
                        <a-button type="primary">Cancel</a-button>
                        <a-button type="primary">OK</a-button>
                    </a-button-group>
                </div>
                <div class="col-md-2">
                    <a-button-group>
                        <a-button disabled>L</a-button>
                        <a-button disabled>M</a-button>
                        <a-button disabled>R</a-button>
                    </a-button-group>
                </div>
                <div class="col-md-2">
                    <a-button-group>
                        <a-button type="primary">L</a-button>
                        <a-button>M</a-button>
                        <a-button>M</a-button>
                        <a-button type="dashed">R</a-button>
                    </a-button-group>
                </div>
            </div>

            <a-divider orientation="left">图标</a-divider>
            <div class="row">
                <div class="col-md-2">
                    <a-button-group>
                        <a-button type="primary"> <i class="iconfont icon-left"></i>Go back </a-button>
                        <a-button type="primary"> Go forward<i class="iconfont icon-right"></i> </a-button>
                    </a-button-group>
                </div>
                <div class="col-md-2">
                    <a-button-group>
                        <a-button type="primary">
                            <template #icon><i class="iconfont icon-cloud"></i></template>
                        </a-button>
                        <a-button type="primary">
                            <template #icon><i class="iconfont icon-download"></i></template>
                        </a-button>
                    </a-button-group>
                </div>
                <div class="col-md-1">
                    <a-button type="primary" shape="circle">
                        <template #icon><i class="iconfont icon-search"></i></template>
                    </a-button>
                    <a-button class="ml-2" type="success" shape="circle">
                        <template #icon><i class="iconfont icon-search"></i></template>
                    </a-button>
                    <a-button class="ml-2" type="dashed" shape="circle">
                        <template #icon><i class="iconfont icon-search"></i></template>
                    </a-button>
                </div>
                <div class="col-md-1">
                    <a-button type="success">
                        <template #icon><i class="iconfont icon-search"></i></template> Search
                    </a-button>
                </div>
            </div>

            <a-divider orientation="left">Loading</a-divider>
            <div class="row">
                <div class="col-md-1">
                    <a-button type="primary" loading>Loading</a-button>
                </div>
                <div class="col-md-3">
                    <a-button class="mr-2" type="warning" :loading="loading" @mouseenter="enterLoading">
                        mouseenter me!
                    </a-button>
                    <a-button type="success" :loading="iconLoading" @click="enterIconLoading">
                        延迟1s
                    </a-button>
                </div>
            </div>

            <a-divider orientation="left">block 按钮</a-divider>
            <div class="row" v-for="btn in fillBtn" :key="btn">
                <div class="col-md-6 mb-3">
                    <a-button :type="btn" block>block</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
export default {
    name: "btn",
    setup() {
        let fillBtn = ["default", "dashed", "primary", "danger", "warning", "success", "link"]

        let loading = ref(false)
        let iconLoading = ref(false)

        const enterLoading = () => {
            loading.value = true
        }
        const enterIconLoading = () => {
            iconLoading.value = { delay: 1000 }
        }

        return {
            fillBtn,
            loading,
            iconLoading,
            enterLoading,
            enterIconLoading
        }
    }
}
</script>

<style scoped></style>
