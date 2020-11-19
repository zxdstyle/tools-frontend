<template>
    <div class="setting" @click="showDrawer"><i class="iconfont icon-setting"></i></div>
    <a-drawer title="自定义" placement="right" v-model:visible="visible">
        <div class="content">
            <div class="item">
                <h5>主题</h5>
                <div>
                    <a-radio-group name="radioGroup" v-model:value="themeMode">
                        <a-radio value="dark">dark</a-radio>
                        <a-radio value="purple">purple</a-radio>
                        <a-radio value="light">light</a-radio>
                    </a-radio-group>
                </div>
            </div>
            <div class="item d-inline-flex justify-content-between w-100 pr-3">
                <h5>菜单收缩</h5>
                <a-switch v-model:checked="collapse"></a-switch>
            </div>
            <div class="item d-inline-flex justify-content-between w-100 pr-3">
                <h5>回到顶部</h5>
                <a-switch v-model:checked="backTop"></a-switch>
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

        // 显示抽屉弹窗
        let visible = ref(false)
        const showDrawer = () => {
            visible.value = !visible.value
        }

        // 主题设置
        let themeMode = computed({
            get: () => store.state.system.themeMode,
            set: value => store.commit("setThemeMode", value)
        })

        // 收缩菜单
        let collapse = computed({
            get: () => store.state.system.menuCollapse,
            set: value => store.commit("setMenuCollapse", value)
        })

        // 关闭回到顶部功能
        let backTop = computed({
            get: () => store.state.system.backTop,
            set: value => store.commit("setBackTop", value)
        })

        return {
            visible,
            showDrawer,
            collapse,
            backTop,
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

.content {
    .item {
        padding-bottom: 10px;
        border-bottom: 1px solid #414561 !important;
        margin-bottom: 15px;

        h5 {
            color: #ebeefd;
        }
    }
}
</style>
