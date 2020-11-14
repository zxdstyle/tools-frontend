import { get } from "@/plugins/axios"

class System {
    // 获取每日一言
    async getTodayOne() {
        return get("/api/today/one")
    }
}

export default new System()
