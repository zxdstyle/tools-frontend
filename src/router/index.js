import { createRouter, createWebHistory } from "vue-router"
import store from "../store"
import Default from "../views/layouts/default.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Default,
        children: [
            {
                path: "/",
                name: "Home",
                component: () => import(/* webpackChunkName: "page" */ "../views/pages/dashboard/index.vue")
            },
            {
                path: "/about",
                name: "About",
                component: () => import(/* webpackChunkName: "about" */ "../views/pages/about/index.vue")
            },
            {
                path: "/bug",
                name: "bug",
                component: () => import(/* webpackChunkName: "about" */ "../views/pages/bug/index.vue")
            },
            {
                path: "/history",
                name: "history",
                component: () => import(/* webpackChunkName: "about" */ "../views/pages/history/index.vue")
            },
            {
                path: "/setting",
                name: "setting",
                component: () => import(/* webpackChunkName: "about" */ "../views/pages/setting/index.vue")
            }
        ]
    },
    {
        path: "/lock",
        name: "lock",
        component: () => import(/* webpackChunkName: "about" */ "../views/pages/lock/index.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "about" */ "../views/pages/login/index.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach(() => {
    store.commit("setLoading", true)
})

router.afterEach(() => {
    store.commit("setLoading", false)
})

export default router
