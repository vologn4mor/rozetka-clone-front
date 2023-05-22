<template>
  <div class='input-container'>
    <span :style='isBoldLabel ? `font-weight: bold;` : null'>{{ label }}</span>
    <input
      v-if='!isTextarea'
      :type='type'
      class='input'
      :placeholder='placeholder'
      :value='value'
      @input="$emit('input', $event.target.value)"
    >
    <textarea
      v-else
      :type='type'
      class='textarea'
      :style='`height: ${heightTextarea}`'
      :placeholder='placeholder'
      :value='value'
      @input="$emit('input', $event.target.value)"
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
    value: {
      type: String,
      required: true,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'text',
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
