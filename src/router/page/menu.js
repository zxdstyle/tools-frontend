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
                component: () => import(/* webpackChunkName: "about" */ "@/views/pages/page/form.vue")
            },
            {
                path: "/page/button",
                name: "button",
                title: "按钮",
                component: () => import(/* webpackChunkName: "about" */ "@/views/pages/page/btn.vue")
            },
            {
                path: "/page/breadcrumb",
                name: "breadcrumb",
                title: "面包屑",
                component: () => import(/* webpackChunkName: "about" */ "@/views/pages/page/breadcrumb.vue")
            }
        ]
    }
]
