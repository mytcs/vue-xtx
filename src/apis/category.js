import httpInstance from "@/utils/http";


export const getCategoryAPI = (id) => {
    return httpInstance({
        url: "/category",
        params: {
            id
        }
    })
}


/**
 * 获取二级分类数据
 * @param {*} id 
 */
export const getsubcategoryAPI = (id) => {
    return httpInstance({
        url: "/category/sub/filter",
        params: {
            id
        }
    })
}

/**
 * 获取二级分类商品列表基础数据
 * @param {*} data 
 * @returns 
 */
export const getSubBaseCategoryAPI = (data) => {
    return httpInstance({
        url: '/category/goods/temporary',
        method: "Post",
        data
    })
}