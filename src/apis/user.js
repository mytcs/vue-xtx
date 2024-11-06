// 封装用户的所有接口
import httpInstance from "@/utils/http"
export const doLoginAPI = ({ account, password }) => {
    return httpInstance({
        url: "/login",
        method: "POST",
        data: {
            account,
            password
        }
    })
}