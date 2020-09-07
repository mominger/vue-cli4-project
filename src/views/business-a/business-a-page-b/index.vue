<template>
  <div class="business-a-page-a">
    <h1 class="title">页面B</h1>
    这里是业务 A 页面 B
    <a-common-component parent="business-a-page-b" />
  </div>
</template>

<script>
import ACommonComponent from "@/components/a-common-component";
import tokenMixin from "@/mixins/token-mixin";

export default {
  name: "business-a-page-b",
  mixins: [tokenMixin],
  components: {
    ACommonComponent
  },
  created() {
    //测试获取mixins的token获取
    console.info("business-a-page-b page:", this.token);
  }
};
</script>

<style lang="scss" scoped>
.title {
  color: pink;
}
</style>
