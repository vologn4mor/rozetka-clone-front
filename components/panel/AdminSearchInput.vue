<template>
  <div class='input-search'>
    <input v-model='value' type='text' :placeholder='placeholder' @keyup.enter='$emit("search", value)'>
    <button @click='$emit("search", value)'>Знайти</button>
  </div>
</template>

<script>
export default {
  name: 'AdminSearchInput',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: 'Я шукаю',
    },
  },
  data() {
    return {
      value: '',
    };
  },
};
</script>

<style scoped lang='scss'>
.input-search {
  display: flex;
  width: 100%;

  input {
    border-radius: 6px 0 0 6px;
    padding: 10px;
    max-width: 831px;
    width: 100%;
    border-color: $lh-panel-gray;
  }

  input:focus {
    outline: none;
  }

  button {
    border-radius: 0 6px 6px 0;
    background-color: $lh-accent-green;
    border-color: $lh-accent-green;
    color: $lh-white;
    padding: 10px 20px;
    font-weight: bold;
  }
}
</style>
