export default [
    {
        path: "/page",
        name: "page",
        title: "页面",
        meta: {
            icon: "icon-exchange"
        },
        children: [
            {
                path: "/page/form",
                name: "form",
                title: "表单",
                meta: {
                    icon: "icon-exchange"
                },
                component: () => import(/* webpackChunkName: "about" */ "@/views/pages/page/form.vue")
            },
            {
                path: "/page/table",
                name: "table",
                title: "表格",
                meta: {
                    icon: "icon-exchange"
                },
                component: () => import(/* webpackChunkName: "about" */ "@/views/pages/bug/index.vue")
            },
            {
                path: "/page/error",
                name: "error",
                title: "错误",
                meta: {
                    icon: "icon-exchange"
                },
                component: () => import(/* webpackChunkName: "about" */ "@/views/pages/bug/index.vue")
            }
        ]
    }
]
