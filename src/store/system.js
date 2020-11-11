import menuList from "@/router/menu"
export default {
    state: {
        loading: false,
        menuList: []
    },
    mutations: {
        setLoading(state, loading) {
            state.loading = loading
        }
    },
    getters: {
        menuList() {
            return menuList
        }
    }
}
