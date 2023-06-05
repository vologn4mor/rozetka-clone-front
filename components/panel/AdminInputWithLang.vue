<template>
  <div class='input-container'>
    <div class='langs-buttons'>
      <div v-for='item in langAndText' :key='item.lang' class='' @click='isSelectedLang = item.lang'>
        <span :class='activeBtn === item.lang ? "active" : null'>{{ item.lang.toUpperCase() }}</span>
      </div>
    </div>
    <input
      v-if='!isTextarea && !withoutInput'
      type='text'
      :value='activeValue'
      placeholder='Введіть назву'
      @input='e => changeActiveValue(e.target.value)'
    >
    <textarea
      v-else-if='!withoutInput'
      type='text'
      :value='activeValue'
      placeholder='Введіть назву'
      @input='e => changeActiveValue(e.target.value)'
    >

    </textarea>
  </div>
</template>

<script>
export default {
  name: 'AdminInputWithLang',
  props: {
    langAndText: {
      type: Array,
      required: true,
    },
    isTextarea: {
      type: Boolean,
      required: false,
      default: false,
    },
    withoutInput: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isSelectedLang: 'ua',
    };
  },
  computed: {
    activeValue() {
      const itemActive = this.langAndText.filter(item => item.lang === this.isSelectedLang);
      return itemActive[0].text;
    },
    activeBtn() {
      const itemActive = this.langAndText.filter(item => item.lang === this.isSelectedLang);
      return itemActive[0].lang;
    },
  },
  methods: {
    changeActiveValue(val) {
      const newData = this.langAndText.map(item => {
        if (item.lang === this.isSelectedLang) {
          return {
            ...item,
            text: val,
          };
        } else return item;
      });

      this.$emit('input', newData);
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
    border-radius: 0 10px 10px 10px;
  }

  textarea {
    max-width: 787px;
    width: 100%;
    height: 200px;
    padding: 10px;
    border-radius: 0 10px 10px 10px;
    resize: none;
  }

  input:focus, textarea:focus {
    outline: none;
  }
}

.langs-buttons {
  display: flex;
  width: fit-content;
  position: relative;
  top: 1px;


  div {
    padding: 10px;
    border: 1px solid black;
    background-color: white;
    border-bottom: 0;
    border-radius: 10px 10px 0 0;
  }

  div:first-child {
    border-right: 0;
  }

  div:last-child {
    border-right: 1px solid;
  }

  div:hover {
    cursor: pointer;
  }

  .active {
    color: green;
  }
}
</style>
