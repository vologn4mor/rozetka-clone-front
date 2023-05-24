<template>
  <button :class='styleBtn' @click='$emit("click")'>
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'ButtonProfile',
  props: {
    title: {
      type: String,
      required: true,
    },
    styleBtn: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang='scss'>

button {
  padding: 12.5px 35.5px;
  border-radius: 11px;
  border: 0 solid white;
}

button:hover {
  cursor: pointer;
}

.gray {
  background-color: $main-gray;
  color: $main-light-gray;
}

.light-gray {
  background-color: $main-light-gray;
  color: $main-gray;
}

.green {
  background-color: $lh-accent-green;
  color: $lh-white;
}

.orange {
  background-color: $lh-accent-orange;
  color: $lh-white;
}

</style>
