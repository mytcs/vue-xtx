<script>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
export default {
  components: {
    LayoutNav,
    LayoutHeader,
    LayoutFooter,
  },
};
</script>


<template>
  <LayoutNav />
  <LayoutHeader />
  <!-- 二级路由出口 -->
  <RouterView />
  <LayoutFooter />
</template>



<style lang="scss">
</style>