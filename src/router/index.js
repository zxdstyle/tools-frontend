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
