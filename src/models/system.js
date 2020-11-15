import { get, post } from "@/plugins/axios"

class System {
    // 获取每日一言
    async getTodayOne() {
        return get("/api/today/one")
    }
    async insert(params) {
        return post("/api/language", params)
    }
    async getLanguages(params = {}) {
        return get("/api/language", params)
    }
}

export default new System()
