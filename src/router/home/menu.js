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
        path: "/bug",
        name: "bug",
        title: "控制台",
        meta: {
            icon: "icon-exchange"
        },
        component: () => import(/* webpackChunkName: "about" */ "@/views/pages/bug/index.vue")
    }
]
