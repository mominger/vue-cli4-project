<template>
  <div>
    这是一个全局组件GAComponent，当前被
    <span class="parent">{{ parent }}</span>
    引用了
  </div>
</template>
<script>
export default {
  name: "GAComponent",
  props: {
    parent: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.parent {
  color: red;
}
</style>
