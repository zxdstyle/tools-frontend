export default [
    {
        path: "/blog",
        name: "blog",
        title: "博客",
        meta: {
            icon: "icon-brush"
        },
        component: () => import(/* webpackChunkName: "about" */ "@/views/pages/article/index.vue")
    }
]
