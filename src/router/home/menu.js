export default [
    {
        path: "/dashboard",
        name: "dashboard",
        title: "控制台",
        meta: {
            icon: "icon-dashboard"
        },
        component: () => import(/* webpackChunkName: "about" */ "@/views/pages/dashboard/index.vue")
    },
    {
        path: "/tools",
        name: "tools",
        title: "程序员百宝箱",
        meta: {
            icon: "icon-tools"
        },
        component: () => import(/* webpackChunkName: "about" */ "@/views/pages/tools/index.vue")
    },
    {
        path: "/bug",
        name: "bug",
        meta: {
            icon: "icon-exchange"
        },
        component: () => import(/* webpackChunkName: "about" */ "@/views/pages/bug/index.vue")
    }
]
