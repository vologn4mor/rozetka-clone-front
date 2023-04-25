<template>
  <div
    :style='`background-color: ${bgColor}; color: ${color}`'
    @click='$emit("click")'
  >
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: false,
      default: 'Button',
    },
    bgColor: {
      type: String,
      required: false,
      default: 'gray',
    },
    color: {
      type: String,
      required: false,
      default: 'white',
    },
  },
};
</script>

<style scoped lang='scss'>

div {
  padding: 12.5px 38.5px;
  border-radius: 11px;
}

div:hover {
  cursor: pointer;
}

</style>
