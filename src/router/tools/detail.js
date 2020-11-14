export default [
    {
        path: "/tools/:name",
        name: "tools-detail",
        component: () => import(/* webpackChunkName: "about" */ "@/views/pages/tools/detail.vue")
    }
]
