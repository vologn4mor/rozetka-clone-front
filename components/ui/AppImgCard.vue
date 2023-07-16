<template>
  <div class='app-card' :style="cssVars" @click='$emit("click")'>
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
    direction: {
      type: String,
      default: 'row',
    }

  },
  computed: {
    cssVars() {
      return {
        '--width':this.width+'px',
        '--flex-direction':this.direction,
      }
    }
  }
};
</script>

<style scoped lang='scss'>
.app-card {
  background-color: $lh-gray;
  border-radius: 12px;
  display: flex;
  flex-direction: var(--flex-direction);
  width: var(--width);
  //height: 100%;

  .app-card-content {
    padding: 13px;
    width: 100%;
    display: flex;
    margin: auto;
  }
}

.img-start {
  width: max-content;
}

img {
  display: block;
}
</style>
