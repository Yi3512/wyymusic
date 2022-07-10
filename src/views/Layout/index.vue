<template>
  <div style="padding-button: 48px">
    <van-nav-bar :title="$route.meta.title" />
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "VueMusicIndex",
  data() {
    return {
      active: 0,
    };
  },
  mounted() {
    // this.title = this.$route.meta.title;
  },
  methods: {},
  watch: {
    // $route(newval) {
    //   this.title = newval.meta.title;
    // },
  },
};
</script>

<style>
</style>