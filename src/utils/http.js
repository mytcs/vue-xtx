//axios的基础封装
import axios from "axios";
import "element-plus/theme-chalk/el-message.css";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',

    timeout: 5000
})


// axios请求拦截器
httpInstance.interceptors.request.use(config => {

    // 1.从pinia中获取token数据
    const userStore = useUserStore();
    const token = userStore.userInfo.token

    // 2.拼接token到接口请求头中
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }


    return config
}, e => Promise.reject(e))


// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore();

    //统一错误提示
    ElMessage({ type: "warning", message: e.response.data.message })

    // token失效401拦截
    if (e.response.status === 401) {
        userStore.clearUserInfo()
    }
    return Promise.reject(e)
})

//默认导出
export default httpInstance