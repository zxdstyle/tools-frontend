<template>
    <div class="setting" @click="showDrawer"><i class="iconfont icon-setting"></i></div>
    <a-drawer title="自定义" placement="right" v-model:visible="visible">
        <div class="content">
            <div class="item">
                <h5>主题</h5>
                <div>
                    <a-radio-group name="radioGroup" v-model:value="themeMode">
                        <a-radio value="dark">dark</a-radio>
                        <a-radio value="light">light</a-radio>
                    </a-radio-group>
                </div>
            </div>
        </div>
    </a-drawer>
</template>

<script>
import { ref, computed } from "vue"
import { useStore } from "vuex"

export default {
    name: "CustomizeTheme",
    setup() {
        const store = useStore()
        let visible = ref(false)

        const showDrawer = () => {
            visible.value = !visible.value
        }

        let themeMode = computed({
            get: () => store.state.system.themeMode,
            set: () => store.commit("setThemeMode")
        })

        return {
            visible,
            showDrawer,
            themeMode
        }
    }
}
</script>

<style lang="less" scoped>
.setting {
    background-color: @primary-color;
    position: fixed;
    top: 50%;
    z-index: 50000;
    width: 38px;
    height: 38px;
    right: 0;
    border-radius: 6px 0 0 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    i {
        -webkit-animation: spin 1s linear 1s 5 alternate;
        animation: spin 1s linear infinite;
    }

    &:hover {
        box-shadow: 0 8px 25px -8px rgba(115, 103, 240, 1);
    }
}
</style>
