//默认导入
import httpInstance from "@/utils/http"


//获取banner
export function getBannerAPI(params = {}) {
    // 默认为1，商品为2
    const { distributionSite = "1" } = params
    return httpInstance({
        url: "/home/banner",
        params: {
            distributionSite
        }
    })
}


/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const getNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
        url: "/home/hot"
    })
}

/**
 * 获取商品
 * @returns 
 */
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}
