<template>
  <div class='app-card' :style="'width: ' + width + 'px;'" @click='$emit("click")'>
    <div class="img-start">
      <slot name="img-start"></slot>
    </div>
    <div class='app-card-content'>
      <slot name="content" />
    </div>
    <div class="img-end">
      <slot name="img-end"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppImgCard',
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

  display: flex;
  flex-direction: row;

  .app-card-content {
    padding: 13px;
    width: 100%;
    display: flex;
  }
}

.img-start {
  width: max-content;
}

img {
  display: block;
}
</style>
