<template>
    <preloader v-if="loading"></preloader>

    <div id="main-wrapper" class="show">
        <div class="header" :class="{ collapsed: collapse }">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <nav class="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                            <i @click="onMenuToggle" class="menu-toggle iconfont icon-menu"></i>

                            <a class="navbar-brand" href="index.html">
                                <img src="@/assets/images/w_logo.png" alt="" />
                                <span>Elaenia</span>
                            </a>

                            <div class="dashboard_log my-2">
                                <div class="d-flex align-items-center">
                                    <header-info></header-info>

                                    <profile></profile>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <side-bar :collapse="collapse"></side-bar>

        <page-title></page-title>

        <router-view
            :class="{ collapsed: collapse }"
            class="animated fadeIn animate__delay-1s animate__faster"
        ></router-view>

        <div class="footer">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-md-6">
                        <div class="copy_right">
                            Copyright © 2019 Quixlab. All Rights <a href="http://www.bootstrapmb.com/">Reserved</a>.
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 text-lg-right text-center">
                        <div class="social">
                            <a href="#"><i class="fa fa-youtube-play"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from "@/views/layouts/components/PageTitle"
import SideBar from "@/views/layouts/components/SideBar"
import Preloader from "@/views/layouts/components/Preloader"
import Profile from "@/views/layouts/components/Profile"
import HeaderInfo from "@/views/layouts/components/HeaderInfo"
import { computed } from "vue"
import { useStore } from "vuex"

export default {
    name: "default",
    components: {
        Preloader,
        Profile,
        SideBar,
        HeaderInfo,
        PageTitle
    },
    setup() {
        const store = useStore()

        const loading = computed(() => store.state.system.loading)

        let collapse = computed(() => store.state.system.menuCollapse)

        const onMenuToggle = () => {
            store.commit("setMenuCollapse")
        }

        return {
            loading,
            collapse,
            onMenuToggle
        }
    }
}
</script>

<style lang="less" scoped>
.content-body {
    margin-left: 175px;
    margin-top: 15px;

    &.collapsed {
        margin-left: 75px;
    }
}

.menu-toggle {
    cursor: pointer;
}
</style>
