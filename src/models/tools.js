import { post } from "@/plugins/axios"

class Tools {
    async json2struct(params) {
        return post("/api/json/struct", params)
    }
    async sql2struct(params) {
        return post("/api/json/sql", params)
    }
}

export default new Tools()
