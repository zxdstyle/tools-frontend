<template>
    <preloader v-if="loading"></preloader>

    <div id="main-wrapper" class="show">
        <div class="header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <nav class="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
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

        <div class="sidebar">
            <div class="menu">
                <ul>
                    <li>
                        <a href="index.html" data-toggle="tooltip" data-placement="right" title="Home">
                            <span><i class="la la-igloo"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="buy-sell.html" data-toggle="tooltip" data-placement="right" title="Exchange">
                            <span><i class="la la-exchange-alt"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="accounts.html" data-toggle="tooltip" data-placement="right" title="Account">
                            <span><i class="la la-user"></i></span>
                        </a>
                    </li>
                    <li>
                        <a href="settings.html" data-toggle="tooltip" data-placement="right" title="Setting">
                            <span><i class="la la-tools"></i></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="page_title">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="page_title-content">
                            <p>
                                Welcome Back,
                                <span> Maria Pascle</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <router-view></router-view>

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
        HeaderInfo
    },
    setup() {
        const store = useStore()

        const loading = computed(() => store.state.system.loading)

        return {
            loading
        }
    }
}
</script>

<style lang="scss" scoped></style>
