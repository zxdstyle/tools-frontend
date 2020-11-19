<template>
    <div class="sidebar">
        <div class="mini-logo pt-3">
            <img src="@/assets/images/w_logo.png" />
            <span v-if="!collapse">Elaenia</span>
        </div>
        <a-menu @click="changeMenu" v-model:selectedKeys="activeMenu" mode="inline" :inline-collapsed="collapse">
            <a-menu-item v-for="menu in menuList" :key="menu.name">
                <a-tooltip v-if="collapse" placement="right">
                    <i class="iconfont" :class="menu.meta ? menu.meta.icon : ''"></i>
                    <template v-if="menu.title" #title>{{ menu.title }}</template>
                </a-tooltip>
                <template v-else>
                    <i class="iconfont" :class="menu.meta ? menu.meta.icon : ''"></i>
                    <span>{{ menu.title }}</span>
                </template>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
import { ref } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

export default {
    name: "SideBar",
    props: {
        collapse: {
            required: true,
            type: Boolean
        }
    },
    setup() {
        const router = useRouter()
        const store = useStore()

        let activeMenu = ref([router.currentRoute.value.name])

        const changeMenu = item => {
            router.push({ name: item.key })
            activeMenu = ref([router.currentRoute.value.name])
        }

        const menuList = store.getters.menuList

        return {
            activeMenu,
            changeMenu,
            menuList
        }
    }
}
</script>

<style lang="less" scoped>
.mini-logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
        width: 35px;
    }

    span {
        color: #fff;
        font-weight: 700;
        margin-left: 20px;
        font-size: 24px;
    }
}
</style>
