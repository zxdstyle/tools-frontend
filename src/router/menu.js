import Home from "./home/menu"
import Article from "./article/menu"
import Tools from "./tools/menu"
import Page from "./page/menu"

let menu = [...Home, ...Tools, ...Article, ...Page]

let routes = []
menu.forEach(item => {
    if (item.children) {
        item.children.forEach(child => {
            if (!child.meta || !child.meta.outRoute) {
                //判断是否不需要合并进router
                routes.push({
                    ...child,
                    meta: {
                        ...child.meta,
                        menuGroup: item.menuGroup
                    }
                })
            }
        })
    } else {
        routes.push(item)
    }
})

export default routes

export { menu }
