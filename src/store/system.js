import { menu } from "@/router/menu"
import tools from "@/utils/tools"
export default {
    state: {
        loading: false,
        menuList: [],
        allTools: [],
        // 菜单收缩状态
        menuCollapse: false,
        // 主题
        themeMode: "dark",
        // 回到顶部
        backTop: true
    },
    mutations: {
        setLoading(state, loading) {
            state.loading = loading
        },
        setMenuCollapse(state) {
            state.menuCollapse = !state.menuCollapse
        },
        setThemeMode(state, mode) {
            state.themeMode = mode
            document.getElementsByTagName("body")[0].className = `theme-${mode}`
        },
        setBackTop(state) {
            state.backTop = !state.backTop
        }
    },
    getters: {
        menuList() {
            return menu
        },
        allTools() {
            return tools
        }
    }
}
