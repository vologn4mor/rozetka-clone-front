<template>
  <div class='button' :style='`padding: ${padding}; max-width: ${width - 71}px;`'>
    <img :src='icon' alt='icon'>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppArticleButton',
  props: {
    icon: {
      type: String,
      required: true,
      default: '',
    },
    text: {
      type: String,
      required: true,
      default: 'button',
    },
    padding: {
      type: String,
      required: true,
      default: '10px',
    },
    width: {
      type: String,
      required: true,
      default: '165',
    },
  },
};
</script>

<style scoped lang='scss'>
.button {
  display: flex;
  background-color: $main-dark-gray;
  color: $main-light-gray;
  align-items: center;
  border-radius: 30px;

  img {
    margin-right: 10px;
  }
}
</style>
