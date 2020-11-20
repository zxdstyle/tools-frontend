<template>
    <a-sub-menu v-if="menu.children && menu.children.length > 0">
        <template #title>
            <i v-if="collapse" class="iconfont" :class="menu.meta ? menu.meta.icon : ''"></i>

            <template v-else>
                <i class="iconfont" :class="menu.meta ? menu.meta.icon : ''"></i>
                <span>{{ menu.title }}</span>
            </template>
        </template>

        <sub-menu v-for="child in menu.children" :menu="child" :key="child.name"></sub-menu>
    </a-sub-menu>

    <a-menu-item v-else>
        <i class="iconfont" :class="menu.meta ? menu.meta.icon : 'icon-yuan'"></i>
        <span>{{ menu.title }}</span>
    </a-menu-item>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
export default {
    name: "SubMenu",
    props: {
        menu: {
            type: Object
        }
    },
    setup() {
        const store = useStore()

        let collapse = computed(() => store.state.system.menuCollapse)

        return {
            collapse
        }
    }
}
</script>

<style scoped></style>
