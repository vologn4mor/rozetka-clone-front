<template>
  <div>
    <button @click='$emit("click")'>{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'AdminGreenBtn',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang='scss'>
button {
  border-radius: 6px;
  background-color: $lh-accent-green;
  border-color: $lh-accent-green;
  color: $lh-white;
  padding: 10px 20px;
  font-weight: bold;
}
</style>
