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
        component: () => import(/* webpackChunkName: "page" */ "../views/Home.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
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
