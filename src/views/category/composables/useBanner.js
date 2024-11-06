import { onMounted, ref } from "vue";
import { getBannerAPI } from "@/apis/home.js";


// 获取banner
export function useBanner() {

    const bannerList = ref([]);
    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite: "2",
        });
        bannerList.value = res.result;

    };

    onMounted(() => {
        getBanner();
    });

    return {
        bannerList
    }
}