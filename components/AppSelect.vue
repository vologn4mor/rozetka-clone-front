<template>
  <div
    class='custom-select'
    :tabindex='tabindex'
    :style='width ? `width: ${width}px;` : null'
    @blur='open = false'>
    <div
      class='selected'
      :class='color ? color : null'
      @click='open = !open'
    >
      {{ typeof selected === 'string' ? selected : selected.value }}
    </div>
    <div class='items' :class='{ selectHide: !open }'>
      <div
        v-for='option of options'
        :key='option.id'
        @click="
          selected = option;
          open = false;
          $emit('input', option.id ? option.id : null);
        "
      >
        {{ option.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    width: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    color: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      // selected: this.placeholder,
      selected: this.placeholder ? this.placeholder : this.default
        ? this.default
        : this.options.length > 0
          ? this.options[0]
          : null,
      open: false,
    };
  },
  mounted() {
    this.$emit('input', this.selected);
  },
};
</script>

<style scoped lang='scss'>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: white;
  border-radius: 6px;
  border: 1px solid #666666;
  color: black;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  /*border: 1px solid #ad8225;*/
  /*border-radius: 6px 6px 0px 0px;*/
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: black transparent transparent transparent;
}

.custom-select .items {
  color: black;
  border-radius: 0px 0px 6px 6px;
  overflow-x: hidden;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: black;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: lightblue;
}

.selectHide {
  display: none;
}

.items {
  max-height: 400px;
  overflow-x: scroll;
}

.custom-select .green {
  border: 2px solid $lh-accent-green;
}
</style>
