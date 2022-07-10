<template v-if='serchList.length == 0'>
  <div>
    <van-search shape="round" placeholder="请输入搜索关键词" v-model="value" />
    <!-- 热门搜索 -->

    <template v-if="serchList.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          class="op"
          color="#e7e8eb"
          text-color="#333333"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in tags"
          :key="index"
          @click="clickFn(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div></template
    >
    <template v-else>
      <van-cell title="最佳匹配" />
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in serchList"
          :key="item.id"
          :title="item.name"
        /> </van-list
    ></template>
  </div>
</template>



<script>
import { getSearchTagApi, getSearchtListApi } from "@/apis";
export default {
  data() {
    return {
      tags: [],
      value: "",
      serchList: [],
      loading: false,
      finished: true,
    };
  },
  created() {
    this.getTagList();
  },
  methods: {
    async getTagList() {
      try {
        const res = await getSearchTagApi();
        this.tags = res.data.result.hots;
      } catch (e) {
        console.log("e", e);
      }
    },
    async clickFn(val) {
      this.value = val;
      try {
        const res = await getSearchtListApi({
          keywords: this.value,
        });
        this.serchList = res.data.result.songs;
        this.$toast.success("成功");
      } catch (e) {
        this.$toast.success("失败");
      }
    },
    onLoad() {},
  },
};
</script>

<style scoped>
.op {
  font-size: 14px;
  margin-right: 8px;
  margin-bottom: 8px;
  height: 32px;
  padding: 0 14px;
  line-height: 32px;
}
</style>