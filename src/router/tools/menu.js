export default [
    {
        path: "/tools",
        name: "tools",
        title: "百宝箱",
        meta: {
            icon: "icon-tools"
        },
        component: () => import(/* webpackChunkName: "about" */ "@/views/pages/tools/index.vue")
    }
]
