// src/store/user.js
import { ref } from "vue";
import { doLoginAPI } from "@/apis/user.js";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', () => {
    // 1.定义获取数据的Store
    const userInfo = ref({});


    // 2.定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await doLoginAPI({ account, password });
        userInfo.value = res.result;
    };


    // 退出登录时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
    }

    // 3.以对象的形式把state和action return返回
    return {
        userInfo,
        clearUserInfo,
        getUserInfo
    };
},
    {
        // 启用持久化存储
        persist: true,
    }
);