<template>
    <div class="sidebar">
        <div class="mini-logo pt-3"><img src="@/assets/images/w_logo.png" /></div>
        <a-menu @click="changeMenu" v-model:selectedKeys="activeMenu" mode="inline" :inline-collapsed="collapse">
            <a-menu-item v-for="menu in menuList" :key="menu.name">
                <a-tooltip placement="right">
                    <i class="iconfont" :class="menu.meta ? menu.meta.icon : ''"></i>
                    <template v-if="menu.title" #title>{{ menu.title }}</template>
                </a-tooltip>
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
.ant-menu {
    margin-top: 60px;
    /*background: transparent;*/
    border-right: none;
    text-align: center;

    ul {
        width: 100%;
    }

    li {
        text-align: center;
        padding: 0 15px;
        display: inline-block;
        margin-bottom: 5px;
        border-radius: 5px;

        &:hover,
        &:focus {
            background: #3a3361;
        }
        &.ant-menu-item-selected {
            background: #7b6fff;
            i {
                color: #fff;
            }
        }

        i {
            color: #9591cc;
            font-size: 24px;
        }
    }
}

.mini-logo {
    width: 100%;
    text-align: center;

    img {
        width: 35px;
    }
}
</style>
