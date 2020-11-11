export default [
    {
        path: "/history",
        name: "history",
        title: "历史记录",
        meta: {
            icon: "icon-user"
        },
        component: () => import(/* webpackChunkName: "about" */ "@/views/pages/history/index.vue")
    },
    {
        path: "/setting",
        name: "setting",
        meta: {
            icon: "icon-tools"
        },
        component: () => import(/* webpackChunkName: "about" */ "@/views/pages/setting/index.vue")
    },
    {
        path: "/account",
        name: "account",
        meta: {
            icon: "icon-users"
        },
        component: () => import(/* webpackChunkName: "about" */ "@/views/pages/account/index.vue")
    }
]
