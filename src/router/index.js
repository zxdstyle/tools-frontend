import { createRouter, createWebHistory } from "vue-router"
import store from "../store"
import Default from "../views/layouts/default.vue"
import routeList from "./routes"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Default,
        children: [
            {
                path: "/",
                redirect: "/dashboard"
            },
            ...routeList
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
    },
    {
        path: "/article",
        name: "article",
        component: () => import(/* webpackChunkName: "about" */ "../views/pages/article/term.vue")
    },
    {
        path: "/policy",
        name: "policy",
        component: () => import(/* webpackChunkName: "about" */ "../views/pages/article/policy.vue")
    },
    {
        path: "/404",
        name: "404",
        component: () => import(/* webpackChunkName: "about" */ "../views/pages/error/404.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404"
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
