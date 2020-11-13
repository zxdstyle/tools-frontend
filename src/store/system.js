import menuList from "@/router/menu"
import tools from "@/utils/tools"
export default {
    state: {
        loading: false,
        menuList: [],
        allTools: []
    },
    mutations: {
        setLoading(state, loading) {
            state.loading = loading
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
