<template>
  <div class='input-container' :style='width ? `max-width: ${width}px` : null'>
    <input
      v-if='!isTextarea'
      :style='width ? `width: ${width}px` : null'
      :type='type'
      :value='value'
      @input='e => $emit("input", e.target.value)'
    >
    <textarea
      v-else
      :style='width ? `width: ${width}px` : null'
      type='text'
      :value='value'
      @input='e => $emit("input", e.target.value)'
    >

    </textarea>
  </div>
</template>

<script>
export default {
  name: 'AdminInput',
  props: {
    isTextarea: {
      type: Boolean,
      required: false,
      default: false,
    },
    width: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style scoped lang='scss'>

.input-container {
  max-width: 767px;
  width: 100%;

  input {
    max-width: 787px;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
  }

  textarea {
    max-width: 787px;
    width: 100%;
    height: 120px;
    padding: 10px;
    border-radius: 10px;
    resize: none;
  }

  input:focus, textarea:focus {
    outline: none;
  }
}

</style>
