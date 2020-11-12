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
        path: "/",
        component: () => import(/* webpackChunkName: "about" */ "@/views/pages/setting/index.vue"),
        children: [
            {
                path: "/edit/profile",
                name: "edit-profile",
                meta: {
                    icon: "icon-tools"
                },
                component: () =>
                    import(/* webpackChunkName: "about" */ "@/views/pages/setting/components/EditProfile.vue")
            },
            {
                path: "/preferences",
                name: "preferences",
                meta: {
                    icon: "icon-tools"
                },
                component: () =>
                    import(/* webpackChunkName: "about" */ "@/views/pages/setting/components/Preferences.vue")
            },
            {
                path: "/security",
                name: "security",
                meta: {
                    icon: "icon-tools"
                },
                component: () => import(/* webpackChunkName: "about" */ "@/views/pages/setting/components/Security.vue")
            },
            {
                path: "/linked",
                name: "linked",
                meta: {
                    icon: "icon-tools"
                },
                component: () => import(/* webpackChunkName: "about" */ "@/views/pages/setting/components/Linked.vue")
            }
        ]
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
