<template>
    <div class="content-body">
        <div class="container-fluid">
            <a-divider orientation="left">面包屑</a-divider>
            <div class="row">
                <div class="col-md-6">
                    <a-breadcrumb>
                        <a-breadcrumb-item href=""><i class="iconfont icon-home"></i></a-breadcrumb-item>
                        <a-breadcrumb-item href="">
                            <i class="iconfont icon-user"></i>
                            <span> Application List</span>
                        </a-breadcrumb-item>
                        <a-breadcrumb-item>
                            Application
                        </a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <div class="col-md-6">
                    <a-breadcrumb :routes="routes">
                        <template #itemRender="{ route, params, routes, paths }">
                            <span v-if="routes.indexOf(route) === routes.length - 1">
                                {{ route.breadcrumbName }} {{ params }}
                            </span>
                            <router-link v-else :to="`${basePath}/${paths.join('/')}`">
                                {{ route.breadcrumbName }}
                            </router-link>
                        </template>
                    </a-breadcrumb>

                    {{ $route.path }}
                </div>
            </div>

            <a-divider orientation="left">下拉菜单</a-divider>
            <div class="row">
                <div class="col-md-2">
                    <a-dropdown>
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                            Hover me <i class="iconfont icon-down"></i>
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <a href="javascript:;">1st menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">2nd menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">3rd menu item</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
                <div class="col-md-2">
                    <a-dropdown>
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                            Cascading menu <i class="iconfont icon-down"></i>
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>1st menu item</a-menu-item>
                                <a-menu-item disabled>2nd menu item</a-menu-item>
                                <a-sub-menu key="test" title="sub menu">
                                    <a-menu-item>3rd menu item</a-menu-item>
                                    <a-menu-item>4th menu item</a-menu-item>
                                </a-sub-menu>
                                <a-sub-menu title="disabled sub menu" disabled>
                                    <a-menu-item>5d menu item</a-menu-item>
                                    <a-menu-item>6th menu item</a-menu-item>
                                </a-sub-menu>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            basePath: "/components/breadcrumb",
            routes: [
                {
                    path: "index",
                    breadcrumbName: "home"
                },
                {
                    path: "first",
                    breadcrumbName: "first",
                    children: [
                        {
                            path: "/general",
                            breadcrumbName: "General"
                        },
                        {
                            path: "/layout",
                            breadcrumbName: "Layout"
                        },
                        {
                            path: "/navigation",
                            breadcrumbName: "Navigation"
                        }
                    ]
                },
                {
                    path: "second",
                    breadcrumbName: "second"
                }
            ]
        }
    }
}
</script>
