<template>
  <div class="business-a">
    <h1 class="title">页面A</h1>这里是业务 A 页面 A
    <component-a></component-a>
  </div>
</template>

<script>
import ComponentA from "./components/component-a";

export default {
  name: "business-a",
  components: {
    ComponentA,
  },
  filters: {
  },
  created() {
   
  },
  methods: {
   
  }
};
</script>

<style lang="scss" scoped>
.title {
  color: pink;
}
</style>
