import { ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { getCategoryAPI } from "@/apis/category";


export function useCategory() {
    const route = useRoute();
    const categoryList = ref({});
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id);
        categoryList.value = res.result;
    };
    getCategory();

    // 路由参数变化时，可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id);
    });

    return {
        categoryList
    }
}

