<template>
    <div class="sidebar">
        <div class="mini-logo pt-3">
            <img src="@/assets/images/w_logo.png" />
            <span v-if="!collapse">Elaenia</span>
        </div>
        <a-menu
            @click="changeMenu"
            v-model:selectedKeys="activeMenu"
            v-model:openKeys="openKeys"
            mode="inline"
            :inline-collapsed="collapse"
        >
            <sub-menu v-for="menu in menuList" :menu="menu" :key="menu.name"></sub-menu>
        </a-menu>
    </div>
</template>

<script>
import { ref } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

import SubMenu from "./SubMenu"

export default {
    name: "SideBar",
    components: { SubMenu },
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

        let openKeys = ref([])
        menuList.forEach(item => {
            if (item.children && item.children.length > 0) {
                item.children.forEach(child => {
                    if (child.name === router.currentRoute.value.name) {
                        openKeys.value.push(item.name)
                    }
                })
            }
        })

        return {
            activeMenu,
            changeMenu,
            menuList,
            openKeys
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
    margin-bottom: 60px;

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
