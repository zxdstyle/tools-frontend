import { createStore } from "vuex"
import system from "@/store/system"
import createPersistedState from "vuex-persistedstate"

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: { system },
    plugins: [
        createPersistedState({
            paths: ["system"]
        })
    ]
})
