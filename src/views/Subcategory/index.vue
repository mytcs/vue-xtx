<script setup>
import { getsubcategoryAPI } from "@/apis/category";
import { getSubBaseCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import GoodsItem from "@/views/home/components/GoodsItem.vue";

const subCategoryData = ref({});
const route = useRoute();
const getsubcategory = async () => {
  const res = await getsubcategoryAPI(route.params.id);
  subCategoryData.value = res.result;
};
onMounted(() => {
  getsubcategory();
});

// 获取二级分类商品列表基础数据
const goodsList = ref([]);
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: "publishTime",
});
const getsubBaseCategory = async () => {
  const res = await getSubBaseCategoryAPI(reqData.value);
  console.log(res);

  goodsList.value = res.result.items;
};

onMounted(() => {
  getsubBaseCategory();
});

// tab切换数据更新
const tabChange = () => {
  reqData.value.page = 1;
  getsubBaseCategory();
};

// 无限加载
const load = async () => {
  reqData.value.page++;
  const res = await getSubBaseCategoryAPI(reqData.value);
  goodsList.value = [...goodsList.value, ...res.result.items];
  // 全部都被加载完了，停止监听
  const disabled = ref(false);
  if (res.result.items.length === 0) {
    disabled.value = true;
  }
};
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: `/category/${subCategoryData.parentId}` }"
          >{{ subCategoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCategoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs
        v-model="reqData.sortField"
        @tab-change="tabChange"
        :infinite-scroll-disabled="disabled"
      >
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load">
        <!-- 商品列表-->
        <GoodsItem v-for="goods in goodsList" :key="goods.id" :goods="goods" />
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>