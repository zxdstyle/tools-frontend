import axios from "axios"

const config = {
    baseURL: process.env === "development" ? "http://127.0.0.1:8199" : "http://127.0.0.1:8199",
    timeout: 5 * 1000, // 请求超时时间设置
    crossDomain: true
}

const _axios = axios.create(config)

// 导出常用函数

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url, data = {}, params = {}) {
    return _axios({ method: "post", url, data, params })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url, params = {}) {
    return _axios({ method: "get", url, params })
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put(url, data = {}, params = {}) {
    return _axios({ method: "put", url, params, data })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function _delete(url, params = {}) {
    return _axios({ method: "delete", url, params })
}

export default _axios
