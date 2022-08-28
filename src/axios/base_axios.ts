// 导入基地址
import { baseUrl } from "../const"
import axios from "axios"
console.log(baseUrl);

// axios 配置
const config={
    baseURL:baseUrl,
    timeout:1000, // 超时
    headers: {
        "X-Auth-Token":"test"
    }
}

// 导出 axios 实例
export const BaseAxios=axios.create(config)





