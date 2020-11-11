<template>
    <div class="sidebar">
        <a-menu>
            <a-menu-item key="1">
                <i class="iconfont icon-dashboard"></i>
            </a-menu-item>
            <a-menu-item key="2">
                <i class="iconfont icon-exchange"></i>
            </a-menu-item>
            <a-menu-item key="3">
                <i class="iconfont icon-user"></i>
            </a-menu-item>
            <a-menu-item key="4">
                <i class="iconfont icon-tools"></i>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
export default {
    name: "SideBar"
}
</script>

<style lang="scss" scoped>
.ant-menu {
    margin-top: 100px;
    background: transparent;
    border-right: none;

    li {
        width: 100%;
        text-align: center;
        padding: 0 15px;
        display: inline-block;
        margin-bottom: 5px;
        border-radius: 5px;

        &:hover,
        &:focus {
            background: #3a3361;
        }
        &.active {
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
</style>
