import menuList from "@/router/menu"
import tools from "@/utils/tools"
export default {
    state: {
        loading: false,
        menuList: [],
        allTools: [],
        // 菜单收缩状态
        menuCollapse: false
    },
    mutations: {
        setLoading(state, loading) {
            state.loading = loading
        },
        setMenuCollapse(state) {
            state.menuCollapse = !state.menuCollapse
        }
    },
    getters: {
        menuList() {
            return menuList
        },
        allTools() {
            return tools
        }
    }
}
