<template>
  <div class='checkbox-container'>
    <div class='checkbox'>
      <input :id='id' type='checkbox' />
      <label :for='id'></label>
    </div>
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppCheckbox',
  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      id: null,
    };
  },
  mounted() {
    this.id = this._uid;
  },
};
</script>

<style scoped lang='scss'>
input[type="checkbox"] {
  display: none;
}

/* стили для метки */
label {
  color: #000;
  cursor: pointer;
  font-weight: normal;
  line-height: 30px;
  margin: 0 auto;
  //padding: 10px 0;
  vertical-align: middle;
}

/* формируем внешний вид чекбокса в псевдоэлементе before */
label:before {
  content: "";
  color: #000;
  display: inline-block;
  font: 20px/30px Arial;
  position: relative;

  text-align: center;
  text-indent: 0;
  width: 15px;
  height: 15px;
  border-radius: 3px;
  background: #FFF;
  border: 2px solid $lh-accent-green;
  border-radius: 6px;
  border-image: initial;
  vertical-align: middle;
}

/* вариации внешнего вида в зав-ти от статуса checkbox */
/* checked */
input:checked + label:before {
  content: "";
  background: $lh-accent-green;
  color: rgba(6, 102, 90);
}

/* disabled */
input:disabled + label:before {
  background: #eee;
  color: #aaa;
}

.container {
  display: flex;
  align-items: center;
}

.checkbox-container {
  display: flex;
  align-items: center;

  span {
    margin-left: 6px;
    //margin-top: 4px;
  }
}

</style>
