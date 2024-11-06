//购物车模块
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
    const cartList = ref([])

    //添加购物车
    const addCart = (goods) => {
        const item = cartList.value.find((item) => { goods.skuId === item.skuId })

        // 1.已经有相同商品：count+1

        if (item) {
            item.count = item.count++

        } else {

            // 2.没有的话就push
            cartList.value.push(goods)
        }


    }

    //计算商品
    // 总数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))

    // 总价
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))


    //单选
    const singCheck = (skuId, selected) => {
        const item = cartList.value.find((item) => item.skuId = skuId)
        item.selected = selected
    }

    //是否全选
    const isAll = computed(() => {
        cartList.value.every((item) => { item.selected })
        console.log(123);

    })

    //全选
    const allCheck = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }

    // 已勾选商品数量
    const selectedCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))

    // 已勾选商品总价
    const selectedPrice = computed(() => cartList.value.reduce((a, c) => a + c.price * c.price, 0))

    //删除购物车商品
    const delCart = (skuId) => {
        cartList.value = cartList.value.filter((item) => { item.skuId !== skuId })

    }


    return {
        cartList,
        allCount,
        allPrice,
        addCart,
        delCart,
        singCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice
    }


},
    {
        // 启用持久化存储
        persist: true,
    }
)