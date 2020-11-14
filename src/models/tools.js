import { post } from "@/plugins/axios"

class Tools {
    async json2struct(params) {
        return post("/api/json/struct", params)
    }
}

export default new Tools()
