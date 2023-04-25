<template>
  <div class='input-container'>
    <span :style='isBoldLabel ? `font-weight: bold;` : null'>{{ label }}</span>
    <input
      v-if='!isTextarea'
      type='text'
      class='input'
      :placeholder='placeholder'
    >
    <textarea
      v-else
      type='text'
      class='textarea'
      :style='`height: ${heightTextarea}`'
      :placeholder='placeholder'
    >

    </textarea>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    isTextarea: {
      type: Boolean,
      required: false,
      default: false,
    },
    isBoldLabel: {
      type: Boolean,
      required: false,
      default: false,
    },
    heightTextarea: {
      type: String,
      required: false,
      default: '131px',
    },
    label: {
      type: String,
      required: false,
      default: 'Label',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style scoped lang='scss'>

.input-container {
  display: flex;
  flex-direction: column;

  input, textarea {
    border: 2px solid $main-light-gray;
    border-radius: 7px;
    margin: 10px 0;
    padding: 10px 33px;
    resize: none;
  }

}

</style>
