<template>
  <div class='app-card' :style="'width: ' + width + 'px;'">
    <div class='app-card-content'>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    width: {
      type: String,
      default: '226',
    },
  },
};
</script>

<style scoped lang='scss'>
.app-card {
  background-color: $lh-gray;
  border-radius: 12px;

  .app-card-content {
    padding: 13px;
  }
}
</style>
