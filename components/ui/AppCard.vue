<template>
  <div class='app-card' :style="'max-width: ' + width + 'px; width: 100%'">
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
  background-color: $main-light-gray;
  border-radius: 12px;

  .app-card-content {
    padding: 13px;
  }
}
</style>
