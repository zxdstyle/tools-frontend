<template>
    <a-dropdown :trigger="['click']" class="profile_log">
        <div class="user">
            <span class="thumb"><i class="iconfont icon-user"></i></span>
            <span class="name">Maria Pascle</span>
            <span class="arrow"><i class="iconfont icon-down"></i></span>
        </div>

        <template #overlay>
            <a-menu @click="changeMenu" class="profile_menu">
                <a-menu-item key="account"><i class="iconfont icon-user"></i> Account </a-menu-item>
                <a-menu-item key="history"><i class="iconfont icon-history"></i> History </a-menu-item>
                <a-menu-item key="setting"><i class="iconfont icon-setting"></i> Setting</a-menu-item>
                <a-menu-item key="3"><i class="iconfont icon-lock"></i> Lock</a-menu-item>
                <a-menu-item key="3" class="logout"><i class="iconfont icon-logout"></i> Logout</a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<script>
import { useRouter } from "vue-router"
export default {
    name: "Profile",
    setup() {
        const router = useRouter()

        const changeMenu = item => {
            router.push({ name: item.key })
        }

        return {
            changeMenu
        }
    }
}
</script>

<style lang="scss" scoped>
.profile_log {
    cursor: pointer;
    display: flex;
    align-items: center;
}

::v-deep(.thumb) {
    height: 45px;
    width: 45px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: inline-block;
    margin-right: 15px;
    background: #7b6fff;
    color: #fff;
    text-align: center;
    padding: 10px 0;
}

.user .thumb ::v-deep(i) {
    font-size: 20px;
}

.user ::v-deep(.name) {
    margin-right: 30px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
}

@media only screen and (max-width: 1199px) {
    ::v-deep(.user .name) {
        display: none;
    }
}

@media only screen and (min-width: 1200px) and (max-width: 1350px) {
    ::v-deep(.user .name) {
        display: none;
    }
}

.user ::v-deep(.arrow) {
    color: #fff;
}

.user .arrow ::v-deep(i) {
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    margin-top: 6px;
    display: inline-block;
}

@media only screen and (max-width: 1199px) {
    ::v-deep(.user .arrow) {
        display: none;
    }
}
</style>
